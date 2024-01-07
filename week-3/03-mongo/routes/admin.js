const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");


// Admin Routes
router.post('/signup', async(req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    const admin = new Admin({ username, password });
    await admin.save();

    res.json({ message: 'Admin created successfully' });
});
router.post('/courses', adminMiddleware, async (req, res) => {
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