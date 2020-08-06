const router = require("express").Router();
const authRoutes = require("./auth.route");
const tokenValidator = require('../middlewares/auth.middleware');

router.use("/auth", authRoutes);
router.use(tokenValidator);
router.get("/hw", (req, res) => res.send("hello"));

module.exports = router;
