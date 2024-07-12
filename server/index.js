const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const authRouter = require('./routes/auth.routes')
const todoRouter = require('./routes/todo.routes')
const app = express()
const PORT = config.get('serverPort')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/todo', todoRouter)

const start = async () => {
  try {
    await mongoose.connect(config.get('dbUrl'))

    mongoose.get

    app.listen(PORT, () => {
      console.log('Server started on port', PORT)
    })
  } catch (e) {
    console.error(e)
  }
}

start()

// const client = new MongoClient('mongodb://localhost:27017/', {
//   dbName: 'todo',
// })

// const client = new MongoClient('mongodb://localhost:27017/')
// const db = client.db('todo')

// const start = async () => {
//   try {
//     await client.connect()
//     console.log('Connected')
//     const todoList = await db.collection('todo')
//     const todo = await todoList.findOne({ title: 'Todo 1' })
//     // const todo = await todoList.find()
//     const todos = await todoList.find().toArray()
//     console.log(todos)
//   } catch (e) {
//     console.log(e)
//   }
// }

// start()
