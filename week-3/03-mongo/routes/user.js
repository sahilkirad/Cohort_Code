const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db');
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    const uss = await User.findOne({ username, password });
    if (uss) {
        res.json({ "message": "user already exists" });
    }
    else {
        await User.create({
            username: username,
            password: password
        });
        res.json({ message: 'User created successfully' })
    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const respo = await Course.find({});
    res.json({ courses: respo });

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const user = req.user; // from middleware

    if (!user) {
        return res.status(403).json({ message: 'unverified user' });
    }

        const result = await User.updateOne(
            { username: user.username },
            { $push: { purchasedCourse: courseId } }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: 'user not found' });
        }

        if (result.modifiedCount === 0) {
            // maybe already purchased
            return res.json({ message: 'course was already purchased or no change' });
        }

        return res.json({ message: 'purchase successful' });
   
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
   
    const repo = await User.findOne({username:req.headers.username});
    res.json({ courses: repo });
})

module.exports = router;