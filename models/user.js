const mongoose = require ("mongoose")

const user = new mongoose.Schema(
    {
        firstName: {type: String },
        lastName: {type: String },
        phoneNumber: {type: String },
        email:{type: String},
        password:{type: String}

    },
    {timestamps: true}
);

const model = mongoose.model("users",user);

module.exports =model;