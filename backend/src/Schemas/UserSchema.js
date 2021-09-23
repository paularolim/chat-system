const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    phone: String
}, { collection: 'users' })

const Repository = mongoose.model('User', UserSchema)

module.exports = Repository