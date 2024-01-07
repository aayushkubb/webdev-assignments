const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const e = require("express");
const jwtPassword = "123456";


// User Routes
router.post('/signin', async(req, res) => {
    const { username, password } = req.body;
    const admin = await User.findOne({
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
    // Implement user signup logic
    const { username, password } = req.body;

    const user = new User({ username, password });
    await user.save();

    res.json({ message: 'user created successfully' });
});

router.get('/courses', async (req, res) => {
    const courses = await Course.find({ published: false });

    res.json({ courses });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const { courseId } = req.params;
    const user = req.user;

    const course = await Course.findById(courseId);
    if (!course) {
        return res.status(404).json({ message: 'Course not found' });
    }

    user.purchasedCourses.push(course);
    await user.save();

    res.json({ message: 'Course purchased successfully' });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = req.user;
    await user.populate('purchasedCourses').execPopulate();

    res.json({ purchasedCourses: user.purchasedCourses });
});


module.exports = router