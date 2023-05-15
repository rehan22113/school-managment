const otpGenerator = require("otp-generator");

const generateOtp = (digits) => {
    const otp = otpGenerator.generate(digits, {
        digits: true,
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
    });
    return otp;
};

module.exports = { generateOtp };
