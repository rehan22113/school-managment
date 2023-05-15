const { logEvents } = require("./logEvents");

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name} : ${err.message}\t${clientIp}\t${req.method}\t${req.headers.origin}\t${req.url}\t`, "errLog.txt");
    console.error(err.stack.red);
    const status = res.statusCode ? res.statusCode : 500;
    res.status(status);
    res.json({ message: err.message, isError: true });
};

module.exports = errorHandler;
