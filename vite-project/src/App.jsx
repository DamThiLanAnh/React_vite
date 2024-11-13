import './components/todo/todo.css'
import './components/todo/todoNew'
import TodoNew from './components/todo/todoNew'
import TodoData from './components/todo/todo_data'
import TodoList from './components/todo/todoList'

const App = () => {
  return (
    <>
      <TodoNew />
      <TodoData />
      <TodoList />
    </>
  )
}

export default App
