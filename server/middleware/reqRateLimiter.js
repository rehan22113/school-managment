const rateLimit = require("express-rate-limit");
const { logEvents } = require("./logEvents");
const { getClientIp } = require("request-ip");

const reqRateLimit = (limit, timeOut) => {
    if (!limit) limit = 5;
    if (timeOut) timeOut = timeOut * 1000;
    else timeOut = 60 * 1000;

    return rateLimit({
        windowMs: timeOut,
        max: limit,
        message: { message: "too many requests from this system, try again later" },
        handler: (req, res, next, options) => {
            clientIp = getClientIp(req);
            logEvents(
                `Too many requests from : ${clientIp}\t${req.method}\t${req.headers.origin}\t${req.url}\t`,
                "errLog.txt"
            );
            console.log('too many requests'.red)
            res.status(options.statusCode).send(options.message);
        },
        standardHeaders: true,
        lagacyHeaders: false,
    });
};

module.exports = reqRateLimit;
