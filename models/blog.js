const mongoose = require('mongoose')

let { Schema, model } = require('mongoose')

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    img: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    author: {
        id: {
            // type: Schema.Types.ObjectId,
            type: mongoose.Types.ObjectId,
            ref: 'Users'
        },
        authorName: {
            type: String
        }

    }
})

module.exports = model('BlogSchema', blogSchema)