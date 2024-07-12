import React from 'react'
import Filter from '../../components/Filter/Filter'
import TodoList from '../../components/TodoList/TodoList'
import AddTodo from '../../components/AddTodo/AddTodo'
import styles from './MainPage.module.css'

const MainPage = () => {
  return (
    <div className={styles.main}>
      <Filter />
      <TodoList />
      <AddTodo />
    </div>
  )
}

export default MainPage
