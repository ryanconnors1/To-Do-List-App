
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { ToDoList } from './components/ToDoList'
import { ToDoInput } from './components/ToDoInput'

import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([{ input: 'Hello! Add your first todo!', complete: true }])

  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo){
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
  }

  function handleCompleteTodo(index){
    let newTodos = [...todos]
    let completedTodo = todos[index]
    completedTodo.complete = true
    newTodos[index] = completedTodo
    setTodos(newTodos)
  }

  function handleDeleteTodo(index){
    let newTodoList = todos.filter((val, valIndex) => { return valIndex != index })
    setTodos(newTodoList)
  }
  
  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <ToDoList todos={todos} selectedTab={selectedTab} handleDeleteTodo={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />
      <ToDoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App
