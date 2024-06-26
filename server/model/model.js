const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    }
});

const UserModel = mongoose.model("CRUD-mongo-opeation", userSchema);

module.exports = UserModel;
