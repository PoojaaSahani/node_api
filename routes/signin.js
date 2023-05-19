
const express = require('express');
const routes = express();
const { body } = require('express-validator');
const userController = require('../controllers/signin');
const optController = require('../controllers/otp');
routes.use(express.json());

routes.post('/',
    body('email').isEmail().withMessage('Invalid email'),
    body('password').notEmpty().withMessage('Password is required'), userController.postSignin);

routes.post('/forget-password', body('email').isEmail().withMessage('Invalid email'), userController.forgetPassword);
routes.post('/update-password', body('password').notEmpty().withMessage('Password is required'), userController.updatePassword);
routes.post("/otp",optController.postOtp)
module.exports = routes;
