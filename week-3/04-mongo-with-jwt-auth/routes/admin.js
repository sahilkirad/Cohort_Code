const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,User,Course } = require('../db');
const router = Router();
const {JWT_SECRET}=require('../config');
const jwt=require("jsonwebtoken")
// Admin Routes
router.post('/signup', async (req, res) => 
{
    // Implement admin signup logic
    const username = req.body.username;
    const pass = req.body.password;
    const ad1 = await Admin.create({
        username: username,
        password: pass
    })
    if (ad1) {
        const token=jwt.sign({
            username
        },JWT_SECRET);
        res.json({
            token
        })
    }
    else {
        res.status(411).json({"message":"Invalid username and password"});
    }
    
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    const isValid=await Admin.findOne({username,password});
    console.log(JWT_SECRET);
    if(isValid)
    {
    const token=jwt.sign({username},JWT_SECRET);
    res.json({"token=":token});
    }
    else{
        res.status(411).json({"message":"username doesnt exists"});
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title=req.body.title;
    const desc=req.body.desc;
    const imageLink=req.body.imageLink;
    const price=req.body.price;

    const newCourse=await Course.create({
        title : title,
        desc : desc,
        imageLink : imageLink ,
        price : price
    });
    console.log(newCourse);
    res.json({
        message: "course created successfully", courseId:newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const resp=await Course.find({});
    res.json({
        courses:resp
    })
});

module.exports = router;