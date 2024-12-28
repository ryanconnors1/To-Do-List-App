import { ToDoCard } from "./ToDoCard"

export function ToDoList(props) {
    const { todos, selectedTab } = props
    const filterTodosList = selectedTab == 'All' ? todos :
    selectedTab == 'Open' ? todos.filter(val => !val.complete) :
                                            todos.filter(val => val.complete)
    return ( 
       <>
        {filterTodosList.map((todo, todoIndex) => {
            return (
                <ToDoCard key={todoIndex}
                toDoIndex={todoIndex}
                {...props}
                todo={todo} />
            )
        })}
       </> 
    )
} 