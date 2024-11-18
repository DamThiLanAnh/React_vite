import './todo.css'
import {useState} from "react";


const TodoInput = (props) => {
    // Sự kiện onclick
    const [valueInput, setValueInput] = useState('lan anh')

    const { addNewTodo } = props;
    console.log(addNewTodo)

    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
    }

    // sự kiện onChange lay ra dc gia tri
    const handleOnChange = (name) => {
        setValueInput(name)
    }

    //useState hook (getter/setter)
    //const valueInput = "lan anh"


    return (
        <div className='add'>
            <input type="text" className="input" placeholder='Enter your task'
                   onChange={(event) => {handleOnChange(event.target.value)}}
                       value={valueInput}
            />
            <button className='add-btn' onClick={handleClick}>Add</button>

            <div>
                My text input is = {valueInput}
            </div>
        </div>
    )
}

export default TodoInput