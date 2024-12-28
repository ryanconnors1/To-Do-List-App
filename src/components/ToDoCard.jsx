export function ToDoCard(props) {
    const { todo, toDoIndex, handleDeleteTodo, handleCompleteTodo } = props
    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button onClick={() => {
                    handleCompleteTodo(toDoIndex)
                }} disabled={todo.complete} >
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(toDoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}