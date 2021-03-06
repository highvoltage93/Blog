const mongoose = require('mongoose')

let { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dateRegistration: {
        type: Date,
        default: Date.now()
    },
    avatar: {
        type: String,
        default: ''
    },
    blogs: [{
        type: mongoose.Types.ObjectId,
        ref: 'BlogSchema'
    }]
})


module.exports = model('Users', userSchema)