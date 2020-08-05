const router = require("express").Router();
const authRoutes = require("./auth.route");

router.use(authRoutes);
router.get("/hw", (req, res) => res.send("hello"));
// router.post('/', async (req, res) => {
//     await User.create({fullname:"rio", email:"rio@gmail.com", password:"1234"});
//     const users = await User.find();
//     res.send(users);
// });

module.exports = router;
