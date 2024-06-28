import React from 'react'
import Filter from '../../components/Filter/Filter'
import TodoList from '../../components/TodoList/TodoList'
import AddTodo from '../../components/AddTodo/AddTodo'

const MainPage = () => {
  return (
    <>
      <Filter />
      <TodoList />
      <AddTodo />
    </>
  )
}

export default MainPage
