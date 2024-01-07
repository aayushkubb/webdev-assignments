const { Admin } = require("../db");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.body.username;
    const password = req.body.password;

    const exists= await Admin.findOne({
        username: username,
        password: password
    });
    if(!exists){
        return res.status(403).json({
            msg: "Admin doesn't exists",
        });
    }
    next();
}

module.exports = adminMiddleware;