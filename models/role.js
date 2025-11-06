const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({

})

const Role = mongoose.Model('Role', roleSchema)

module.exports = { Role }