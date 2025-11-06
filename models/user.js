const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({})

const User = mongoose.Model('User', userSchema)

module.exports = { User }