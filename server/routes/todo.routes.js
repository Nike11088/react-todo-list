const Router = require('express')
const Todo = require('../models/Todo')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const router = new Router()
const { check, validationResult } = require('express-validator')

router.post(
  '/',
  [check('title', 'Tilte is empty').isLength({ min: 1 })],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Uncorrect request', errors })
      }

      const { title, user } = req.body

      const todo = new Todo({
        title,
        completed: false,
        user,
      })
      await todo.save()
      return res.json({ todo, message: 'Todo was created' })
    } catch (e) {
      console.error(e)
      res.send({ message: 'Server error' })
    }
  }
)

router.get('/', async (req, res) => {
  try {
    const user = req.query.user

    const todos = await Todo.find({
      user,
    }).exec()

    return res.json(todos)
  } catch (e) {
    console.error(e)
    res.send({ message: 'Server error' })
  }
})

router.delete('/', async (req, res) => {
  try {
    let ids = []
    if (Array.isArray(req.body.ids)) {
      ids = req.body.ids
    } else {
      ids = [req.body.ids]
    }
    await Todo.deleteMany({ _id: { $in: [...ids] } }).exec()

    return res.json({ message: 'Todos was deleted' })
  } catch (e) {
    console.error(e)
    res.send({ message: 'Server error' })
  }
})

router.put('/', async (req, res) => {
  try {
    const todo = req.body
    console.log('todo:', todo)
    await Todo.findByIdAndUpdate(todo._id, todo)

    return res.json({ message: 'Todo was updated' })
  } catch (e) {
    console.error(e)
    res.send({ message: 'Server error' })
  }
})

module.exports = router
