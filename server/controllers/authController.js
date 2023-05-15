const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwtFunctions = require("../functions/jwtFunctions");
const cookieFunctions = require("../functions/cookieFunctions");

const handleLogin = async (req, res) => {
    const cookies = req.cookies;
    console.log(`cookie available at login: ${JSON.stringify(cookies)}`.gray);
    const { phone, password } = req.body;
    console.log(phone, password);
    if (!phone || !password) {
        console.log("missing credentials".red);
        return res.status(400).json({ message: "Phone Number and password are required." });
    }

    const foundUser = await User.findOne({ phone }).exec();
    if (!foundUser) {
        console.log("incorrect phone number".red);
        return res.status(401).json({ message: "Phone Number or password are incorrect." }); //Unauthorized
    }
    // evaluate password

    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles).filter(Boolean);
        // create JWTs

        const accessToken = jwtFunctions.generateAccessToken({ username: foundUser.name, id: foundUser.id }, roles);
        const newRefreshToken = jwtFunctions.generateRefreshToken(foundUser.id);

        // Changed to let keyword
        let newRefreshTokenArray = !cookies?.jwt
            ? foundUser.refreshToken
            : foundUser.refreshToken.filter((rt) => rt !== cookies.jwt);

        if (cookies?.jwt) {
            /* 
            Scenario added here: 
                1) User logs in but never uses RT and does not logout 
                2) RT is stolen
                3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
            */
            const refreshToken = cookies.jwt;
            const foundToken = await User.findOne({ refreshToken }).exec();

            // Detected refresh token reuse!
            if (!foundToken) {
                console.log("attempted refresh token reuse at login!".magenta);
                // clear out ALL previous refresh tokens
                newRefreshTokenArray = [];
            }
            cookieFunctions.deleteCookie(res);
        }

        // Saving refreshToken with current user
        foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
        const result = await foundUser.save();
        // console.log(roles);
        // console.log(phone);

        // Creates Secure Cookie with refresh token
        cookieFunctions.createCookie(res, newRefreshToken);
        console.log("access token created and sent".green);
        // Send authorization roles and access token to user
        res.json({ accessToken });
    } else {
        console.log("incorrect password".red);
        return res.status(401).json({ message: "Phone Number or password are incorrect." });
    }
};

module.exports = { handleLogin };
