const express=require('express');
const adminMiddleware=require("../middleware/adminMiddleware.js");
const { Admin, Course } = require("../db");
const router = express.Router();

router.post('/signup', async (req,res)=> {
    //admin signup
    const username=req.body.username;
    const password=req.body.password;
    //check if user with this username already exists or not
    await Admin.create({
        username:username,
        password:password  
    });
    res.json({message:"Admin created successfully"});
    
});

router.post('/courses',adminMiddleware,async(req,res)=> {
    // implement course creation logic
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

})

router.get('/courses', adminMiddleware, async(req,res)=> 
{
    //implement fetching all courses logic
    const respo=await Course.find({});
    res.json({courses:respo});
})

// ✅ EXPORT the router
module.exports = router;