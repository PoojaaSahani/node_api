const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const Otp = require("../models/otp");
const User = require("../models/signup");

require("dotenv").config();

postOtp = async (req, res, next) => {
  try {
    const otp = String(req.body.otp);

    const userId = req.headers.authorization;

    const otps = await Otp.findOne({ userId });

    if (otps != null) {
      const isMatch = await bcrypt.compare(otp, otps.otp);
      if (isMatch) {
        res.status(200).json({
          statusCode: 200,
          statusMessage: "OK",
          result: {
            success: "OTP is matched!",
          }
        });
      }
      else {
        res.status(204).json({
          statusCode: 204,
          statusMessage: "OK",
          result: {
            success: "OTP not matched!",
          }
        });
      }
    } 
  } catch (err) {
    throw err;
  }
};

module.exports = {
  postOtp,
};
