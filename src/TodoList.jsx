import TodoListItem from './TodoListItem'

function TodoList({todoList}){
    return (
        <>
          {todoList.length === 0 ? (
            <p>Add todo above to get started</p>
          ) : (
            <ul>
              {todoList.map((todo, index) => (
                <li key={todo.id}>
                  <TodoListItem todo={todo} />
                </li>
              ))}
            </ul>
          )}
        </>
    )
}

export default TodoList