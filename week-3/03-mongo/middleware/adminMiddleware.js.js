// Middleware for handling auth

const { Admin } = require("../db");
async function adminMiddleware(req, res, next) 
{
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const username = req.headers.username;
        const password = req.headers.password;
        // if (!username || !password) {
        //     return res.status(403).json({ msg: "Missing auth headers" });
        // }
        const admin = await Admin.findOne({ username, password });
        if (admin) {
            next();
        }
        else {
            res.status(403).json({ msg: "admin not found!" });
        }
    }
    catch(err){
        res.status(500).json({msg :" internal server error"})
    }
}

module.exports = adminMiddleware;