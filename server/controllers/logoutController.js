const User = require("../models/User");
const cookieFunctions = require("../functions/cookieFunctions");

const handleLogout = async (req, res) => {
    // On client, also delete the accessToken

    const cookies = req.cookies;
    if (!cookies?.jwt) {
        console.log("user already logged out".red);
        return res.sendStatus(204);
    } //No content
    const refreshToken = cookies.jwt;

    // Is refreshToken in db?
    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) {
        cookieFunctions.deleteCookie(res);
        console.log("no user found".red);
        return res.sendStatus(204);
    }

    // Delete refreshToken in db
    foundUser.refreshToken = foundUser.refreshToken.filter((rt) => rt !== refreshToken);
    const result = await foundUser.save();

    cookieFunctions.deleteCookie(res);
    console.log("successfully logged out".green);
    return res.sendStatus(204);
};

module.exports = { handleLogout };
