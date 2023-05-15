const createCookie = (res, token) => {
    res.cookie("jwt", token, {
        httpOnly: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
        // secure: true,
    });
};

const deleteCookie = (res) => {
    res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "None",
        // secure: true,
    });
};

module.exports = { createCookie, deleteCookie };
