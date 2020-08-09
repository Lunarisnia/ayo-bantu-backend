const router = require("express").Router();

const User = require("../models/user.model");
const Request = require("../models/request.model");

const { addPost } = require("../controllers/request.controller");

const RequestService = require("../services/request.service");
const requestService = new RequestService(User, Request);

router.post("/", (req, res) => addPost(req, res, requestService));

module.exports = router;