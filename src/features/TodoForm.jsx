import { useRef, useState} from 'react'


function TodoForm({onAddTodo}){

    const todoTitleInput = useRef('')
    const [workingTodoTitle, setWorkingTodoTitle] = useState('')

    function handleAddTodo(event){
        event.preventDefault()
        onAddTodo(workingTodoTitle)
        setWorkingTodoTitle('')
        todoTitleInput.current.focus();
    }

    return(
        <>
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Todo</label>
            <input 
                id="todoTitle" 
                name="title" 
                ref={todoTitleInput} 
                value={workingTodoTitle}
                onChange={(event) => setWorkingTodoTitle(event.target.value)}
                ></input>
            <button disabled={workingTodoTitle.trim() === ''}>Add Todo</button>
        </form>
        </>
    )
}

export default TodoForm