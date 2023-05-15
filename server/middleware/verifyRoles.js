const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.roles) {
            console.log("missing roles field".magenta);
            return res.sendStatus(401);
        }
        const rolesArray = [...allowedRoles];
        const result = req.roles.map((role) => rolesArray.includes(role)).find((val) => val === true);
        if (!result) {
            console.log("incorrect roles".red);
            return res.sendStatus(401);
        }
        next();
    };
};

module.exports = verifyRoles;
