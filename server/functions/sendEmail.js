const sendMailFunction = (otp, email) => {
    if (email == undefined) {
        email = process.env.MAIL_NAME;
    }
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_NAME,
            pass: process.env.MAIL_PASS,
        },
    });
    var mailOptions = {
        from: "elaanonline@gmail.com",
        to: email,
        subject: "OTP code.",
        text: otp,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
};

module.exports = { sendMailFunction };
