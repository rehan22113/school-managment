const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
    const { phone, name, password } = req.body;
    if (!phone || !name || !password) {
        console.log("missing credentials".red);
        return res.status(400).json({ message: "Phone , Name and password are required." });
    }

    // check for duplicate phone in the db
    const duplicate = await User.findOne({ phone }).collation({ locale: "en", strength: 2 }).lean().exec();
    if (duplicate) {
        console.log("user already exists".red);
        return res.sendStatus(409); //Conflict
    }

    try {
        //encrypt the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create and store the new user
        const result = await User.create({
            name: name,
            phone: phone,
            password: hashedPassword,
        });

        console.log("new user created successfully".green);
        return res.status(201).json({ success: `New user ${name} created!` });
    } catch (err) {
        console.log("failed to register a user".red);
        return res.status(500).json({ message: err.message });
    }
};

module.exports = { handleNewUser };
