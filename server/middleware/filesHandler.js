const path = require("path");

function filesMiddleware(allowedExtArray, fileSize, maxFilesLimit) {
    return (req, res, next) => {
        if (!req.files?.files) {
            console.log("Missing Files".red);
            return res.status(400).json({ status: "error", message: "Missing Files" });
        }
        if (req.files?.files.length == undefined) {
            let singleFile = [];
            singleFile.push(req.files.files);
            req.files = singleFile;
        } else {
            req.files = req.files.files;
        }

        const files = req.files;
        const MB = fileSize;
        const FILES_SIZE_LIMIT = MB * 1024 * 1024;
        const fileExtensions = [];
        const filesOverLimit = [];

        if (files.length > maxFilesLimit) {
            console.log(`cannot upload more than ${maxFilesLimit} files at a time`.red);
            return res.status(413).json({ message: `cannot upload more than ${maxFilesLimit} files at a time` });
        }

        Object.keys(files).forEach((key) => {
            files[key].name = files[key].name.toLowerCase();
            fileExtensions.push(path.extname(files[key].name));
            if (files[key].size > FILES_SIZE_LIMIT) {
                filesOverLimit.push(files[key].name);
            }
        });
        let allowed = fileExtensions.every((ext) => allowedExtArray.includes(ext));
        if (!allowed) {
            console.log("Incorrect Files Format".red);
            return res.status(422).json({ message: "Incorrect Files Format" });
        }
        if (filesOverLimit.length) {
            console.log("one or more file sizes are too large".red);
            return res.status(413).json({ message: "one or more file sizes are too large" });
        }
        next();
    };
}

module.exports = filesMiddleware;
