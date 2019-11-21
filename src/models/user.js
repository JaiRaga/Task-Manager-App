const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('user', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate(value) {
            let val = value.toLowerCase()
            if (val.includes('password')) throw new Error('Cannot contain the word "password"')
        }
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Not a valid Email address!')
            }
        }
    }
})

module.exports = User