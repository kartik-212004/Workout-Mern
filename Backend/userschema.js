const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const schema = mongoose.Schema
const userSchema = new schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    }
)

// login

userSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw new Error('field must be filled')
    }
    const user = await this.findOne({ email })

    if (!user) {
        throw new Error('Incorrect Email')
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw new Error('Incorrect Password')
    }
    return user
}

// Signup

userSchema.statics.signup = async function (email, password) {

    if (!email || !password) {
        throw new Error('field must be filled')
    }
    if (!validator.isEmail(email)) {
        throw new Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw new Error('Password Not Strong Enough')
    }

    const exist = await this.findOne({ email });
    if (exist) {
        throw new Error('Email is already taken');
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = await this.create({ email, password: hash });
        return user;
    } catch (error) {
        throw new Error(error.message)
    }

}




module.exports = mongoose.model('User', userSchema)




