const { Schema, model } = require('mongoose')
const ObjectId = require('mongodb').ObjectId

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  todos: [{ type: ObjectId, ref: 'Todo' }],
})

module.exports = model('User', User)
