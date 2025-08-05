// Middleware for handling auth
const {Admin}=require('../db')
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
    const token=req.headers.authorization;
        const words=token.split('');
        const jwToken=words[1];
        const decodedvalue=jwToken.verify(jwToken,secret);
        if(decodedvalue.username)
        {
            next();
        }
        else{
            res.status(403).json({
                msg:"you are not authenticated"
            });
        }
}

module.exports = adminMiddleware;