const express = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// @route    POST api/auth/register
// @desc     Register user
router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
  ],
  authController.registerUser
);

// @route    POST api/auth/login
// @desc     Login user
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  authController.loginUser
);

// @route    GET api/auth/user
// @desc     Get authenticated user
router.get('/user', authMiddleware, authController.getUser);

module.exports = router;
