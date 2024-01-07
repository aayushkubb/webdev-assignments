const { User } = require("../db");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";


function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
        return res.status(403).json({
            msg: "No token provided",
        });
    }
    try {
        const decodedValue = jwt.verify(token, jwtPassword);
        if (decodedValue.username) {
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    }
    catch(e) {
        res.json({
            msg: "Incorrect inputs"
    })
    }
}

module.exports = userMiddleware;