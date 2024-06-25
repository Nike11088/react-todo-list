import React from 'react'
import Menu from '../../components/Menu/Filter'
import TodoList from '../../components/TodoList/TodoList'
import AddTodo from '../../components/AddTodo/AddTodo'

const MainPage = () => {
  return (
    <>
      <Menu />
      <TodoList />
      <AddTodo />
    </>
  )
}

export default MainPage
