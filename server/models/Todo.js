const { Schema, model } = require('mongoose')
const ObjectId = require('mongodb').ObjectId

const Todo = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
  user: { type: ObjectId, ref: 'User', required: true },
})

module.exports = model('Todo', Todo)
