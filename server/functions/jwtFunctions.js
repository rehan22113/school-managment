const jwt = require('jsonwebtoken');

const generateAccessToken = ({username,id}, roles) => {
    return jwt.sign(
        {
            "UserInfo": {
                "username":username,
                "id": id,
                "roles": roles
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXP }
    );
}

const generateRefreshToken = (id) => {
    return jwt.sign(
        { "id": id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXP }
    );
}

module.exports = { generateAccessToken, generateRefreshToken }