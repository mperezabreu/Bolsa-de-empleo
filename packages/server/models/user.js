const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("user",UserSchema);