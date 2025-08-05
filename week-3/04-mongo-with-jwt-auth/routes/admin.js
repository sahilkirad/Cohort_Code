const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require('../db');
const router = Router();
const secret=require('../index');
// Admin Routes
router.post('/signup', async (req, res) => 
{
    // Implement admin signup logic
    // const username = req.body.username;
    // const pass = req.body.password;
    // const ad1 = await Admin.findOne({
    //     username: username,
    //     password: pass
    // })
    // if (ad1) {
    //     res.json({ "message": "admin already exists" });
    // }
    // else {
    //     await Admin.create({
    //         "username": username,
    //         "password": pass
    //     });
    //     res.json({"message":"admin created succesfully"});
    // }
    
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;