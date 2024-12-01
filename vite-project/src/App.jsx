import TodoHeader from "./components/todo/TodoHeader.jsx";
import TodoInput from "./components/todo/TodoInput.jsx";
import TodoData from "./components/todo/TodoData.jsx";
import {useState} from "react";

const App = () => {
    // const name = 'Lan Anh'
    // const age = 20
    // const data = {
    //     address: 'Ha Noi',
    //     contact: '0987654321'
    // }

    const [todoList, setTodoList] = useState([
        // {id: 1, name: 'Learn React'},
        // {id: 2, name: 'Learn Vite'},
        // {id: 3, name: 'Learn React Router'},
    ])


    const addNewTodo = (name) => {
        const newTodo = {
            id: randomIntFromInterval(1, 1000), name: name
        }
        setTodoList([...todoList, newTodo])
    }
    const deleteTodo = (id) => {
        const newTodo = todoList.filter(item => item.id !== id)
        console.log(">>> check newTodo: ", newTodo)
        setTodoList(newTodo)
    }
    // func trả ra 1 sô nguyên ngẫu nhiên nằm trong khoảng min và max
    const randomIntFromInterval = (min, max) => { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return (
        <div className='containerr'>
            <TodoHeader/>
            <TodoInput
                addNewTodo={addNewTodo}
            />
            {todoList.length === 0 ? //dieu kien chieu dai todolist = 0 thi render ra img lon hon 0 thi render ra list
                <div className='todo-img'>
                    <img src="./assets/react.svg" alt="reactLogo"/>
                </div>
                :
                <TodoData
                    name={name}
                    // age = {age}
                    // data = {data}
                    addNewTodo={addNewTodo} //Truyen 1 func khac vs thuc thi 1 func
                    todoList={todoList}
                    deleteTodo = {deleteTodo}
                />
            }
        </div>
    )
}

export default App