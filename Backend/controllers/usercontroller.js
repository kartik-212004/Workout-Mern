const User = require('../userschema'); // Adjust the path as necessary
const jwt = require('jsonwebtoken');
const tokenize = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

// Login user 
const loginuser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = tokenize(user._id);
        res.status(200).json({ email: user.email, token, done: "Passsed" });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Signup user 
const signupuser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);
        const token = tokenize(user._id);
        res.status(200).json({ email: user.email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { loginuser, signupuser };
