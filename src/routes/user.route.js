const { Router } = require('express');

const router = require('express').Router();

const User = require('../models/user.model');

const {currentUser} = require('../controllers/user.controller');

const UserService = require('../services/user.service');
const userService = new UserService(User);


router.post('/current', (req, res) => currentUser(req, res, userService))

module.exports = router;