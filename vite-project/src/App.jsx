import TodoHeader from "./components/todo/TodoHeader.jsx";
import TodoInput from "./components/todo/TodoInput.jsx";
import TodoData from "./components/todo/TodoData.jsx";

const name = 'Lan Anh'
const age = 20
const data = {
    address: 'Ha Noi',
    contact: '0987654321'
}

const addNewTodo = () => {
    alert("call me")
}

addNewTodo()

const App = () => {
    return (
        <div className='containerr'>
            <TodoHeader/>
            <TodoInput/>
            <TodoData
                name = {name}
                age = {age}
                data = {data}
                addNewTodo = {addNewTodo} //Truyen 1 func khac vs thuc thi 1 func
            />
        </div>
    )
}

export default App