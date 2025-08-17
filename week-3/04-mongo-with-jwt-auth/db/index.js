
const mongoose = require('mongoose');
require("dotenv").config({ path: "../../.env" });

const MONGO_URI = process.env.MONGODB_URI2;
console.log("MONGODB_URI2 =", MONGO_URI); // Debug print
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI2)
    
    .then(() => console.log("connected to mongodb"))
    .catch(() => console.log("connection error"))



// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String 
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:String,
    purchasedCourse:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    imageLink:String,
    price:Number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}