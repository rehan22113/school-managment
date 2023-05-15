const os = require("os");
const requestIP = require("request-ip");

const getClientIp = (req) => {
    let clientIp;
    if (req.ip) clientIp = req.ip;
    else if (req.headers["x-real-ip"]) clientIp = req.headers["x-real-ip"];
    else if (requestIP.getClientIp(req)) clientIp = requestIP.getClientIp(req);
    else if (req.socket.remoteAddress) clientIp = req.socket.remoteAddress;
    else if (req.headers["x-forwarded-for"]) clientIp = req.headers["x-forwarded-for"];
    else clientIp = undefined;
    return clientIp;
};

const getServerIp = () => {
    for (let allAddresses of Object.values(os.networkInterfaces())) {
        for (let ipAddress of allAddresses) {
            if (ipAddress.address.startsWith("192.168.")) {
                return ipAddress.address;
            }
        }
    }
};

module.exports = { getServerIp, getClientIp };
