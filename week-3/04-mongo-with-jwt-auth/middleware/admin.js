// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require('../config');
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    // const username=req.headers.username;
    // const password=req.headers.password;
    // const admin=await Admin.findOne({
    //     username:username,
    //     password:password
    // });
    // if(admin)
    // {
    //     next();

    // }
    // else{
    //     req.status(403).json({"message":"admin not found buddy"});
    // }
    console.log(req.headers);
    const token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
        return res.status(403).json({ message: "Missing or invalid token" });
    }

    const jwToken = token.split(" ")[1]; // Correct: split by space, get second part

    try {
        const decodedvalue = jwt.verify(jwToken, JWT_SECRET);

        if (decodedvalue.username) {
            next();
        } else {
            res.status(403).json({ msg: "You are not authenticated" });
        }
    } catch (err) {
        console.error("JWT verification error:", err.message);
        res.status(403).json({ msg: "Invalid token" });
    }

}

module.exports = adminMiddleware;