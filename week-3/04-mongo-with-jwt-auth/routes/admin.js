const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const e = require("express");
const jwtPassword = "123456";


// Admin Routes
router.post('/signin', async(req, res) => {
    const { username, password } = req.body;
    const admin = await Admin.findOne({
        username,
        password
    });

    if (!admin) {
        return res.status(403).json({
            msg: "Admin doesn't exists",
        });
    }
    else {
        const token = jwt.sign({ username: username }, jwtPassword);
        return res.json({
            token
        });
    }
  });


router.post('/signup', async(req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    const admin = new Admin({ username, password });
    await admin.save();

    res.json({ message: 'Admin created successfully' });
});
router.post('/courses', adminMiddleware, async (req, res) => {
    const token = req.headers.authorization;
    console.log(req.body);
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    console.log(title, description, imageLink, price);
    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({ message: 'Course created successfully', courseId: newCourse._id });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const courses = await Course.find({});

    res.json({ courses });
});
module.exports = router; 