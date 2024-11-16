import './todo.css'


const handleClick = () => {
    alert("click me")
}
//onChange lay ra duoc gia tri
const handleOnChange = (name) => {
    console.log(">>> handleOnChange", name.target.value)
}
const TodoInput = () => {
    return (
        <div className='add'>
            <input type="text" className="input" placeholder='Enter your task'
                   onChange={(event)=>handleOnChange(event.target.value)}
            />
            <button className='add-btn' onClick={handleClick}>Add</button>
        </div>
    )
}

export default TodoInput