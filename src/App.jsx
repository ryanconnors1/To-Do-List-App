
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { ToDoList } from './components/ToDoList'
import { ToDoInput } from './components/ToDoInput'

function App() {
  const todos = [
    { input: 'Hello! Add your first todo!', complete: true },
    { input: 'Get the groceries!', complete: false },
    { input: 'Learn how to web design', complete: false },
    { input: 'Say hi to gran gran', complete: true },
    ]
  return (
    <>
      <Header todos={todos}/>
      <Tabs todos={todos}/>
      <ToDoList todos={todos}/>
      <ToDoInput />
    </>
  )
}

export default App