import { ToDoCard } from "./ToDoCard"

export function ToDoList(props) {
    const { todos } = props
    const tab = 'All'
    const filterTodosList = tab == 'All' ? todos :
                            tab == 'Open' ? todos.filter(val => !val.complete) :
                                            todos.filter(val => val.complete)
    return ( 
       <>
        {filterTodosList.map((todo, todoIndex) => {
            return (
                <ToDoCard key={todoIndex} 
                todo={todo} />
            )
        })}
       </> 
    )
} 