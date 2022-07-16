const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "User is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]   
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;