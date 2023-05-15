const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        phone: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "",
        },
        password: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            default:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTux6W-JOnzu6w_aZW0TO1OqEqexEaBOtQ9sgWDDZlJUsz0Lso&s",
        },
        type: {
            type: String,
            default: "Free",
        },
        roles: {
            User: {
                type: Number,
                default: 2001,
            },
            Teacher: Number,
            Admin: Number,
        },
        refreshToken: [String],
        delete: {
            status: {
                type: Boolean,
                default: false,
            },
            time: {
                type: Date,
                default: null,
            },
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
