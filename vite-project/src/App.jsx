import TodoHeader from "./components/todo/TodoHeader.jsx";
import TodoInput from "./components/todo/TodoInput.jsx";
import TodoData from "./components/todo/TodoData.jsx";
import {useState} from "react";

const name = 'Lan Anh'
const age = 20
const data = {
    address: 'Ha Noi',
    contact: '0987654321'
}

const addNewTodo = (name) => {
    alert(`call me ${name}`)
}

addNewTodo()

const App = () => {

    const [todoList, setTodoList] = useState([
        {id: 1, name: 'Learn React'},
        {id: 2, name: 'Learn Vite'},
        {id: 3, name: 'Learn React Router'},
    ])

    return (
        <div className='containerr'>
            <TodoHeader/>
            <TodoInput/>
            <TodoData
                name = {name}
                age = {age}
                data = {data}
                addNewTodo = {addNewTodo} //Truyen 1 func khac vs thuc thi 1 func
                todoList = {todoList}
            />
        </div>
    )
}

export default App