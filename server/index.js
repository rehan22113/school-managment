require("dotenv").config();
require("colors");
const connectDB = require("./config/dbConn");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler");
const express = require("express");
const app = express();
const path = require("path");
const corsOptions = require("./config/corsOptions");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");
const { logger } = require("./middleware/logEvents");
const { getServerIp } = require("./functions/ip");
const verifyJWT = require("./middleware/verifyJWT");
const PORT = process.env.PORT || 3500;

// Connect to MongoDB
connectDB();

// custom middleware logger
app.use("/", logger);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

//middleware for files upload
app.use(fileUpload({ createParentPath: true }));

//serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

// Api Routes
app.use("/register", require("./routes/api/register"));
app.use("/auth", require("./routes/api/auth"));
app.use("/refresh", require("./routes/api/refresh"));
app.use("/logout", require("./routes/api/logout"));

app.all("/*", (req, res) => {
    console.log("404 path not found".red);
    res.status(404);
    if (req.accepts("json")) {
        res.json({ error: "404 path Not Found" });
    } else {
        res.type("txt").send("404 path Not Found");
    }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB".blue);
    app.listen(PORT, () => console.log(`Server running on port ${getServerIp()}:${PORT}`.blue));
});
