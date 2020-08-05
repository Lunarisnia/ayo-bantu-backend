const router = require("express").Router();

const User = require("../models/user.model");
const AuthService = require("../services/auth.service");
const authService = new AuthService(User);

const { auth, register } = require("../controllers/auth.controller");

router.post("/login", (req, res) => auth(req, res, authService));
router.post("/register", (req, res) => register(req, res, authService));

module.exports = router;
