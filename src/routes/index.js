const router = require("express").Router();
const authRoutes = require("./auth.route");
const tokenValidator = require('../middlewares/auth.middleware');
const requestRoutes = require('./request.route');
const userRoutes = require('./user.route');

router.use("/auth", authRoutes);
router.use(tokenValidator);
router.use('/post', requestRoutes);
router.use('/user', userRoutes);
router.get("/hw", (req, res) => res.send("hello"));

module.exports = router;
