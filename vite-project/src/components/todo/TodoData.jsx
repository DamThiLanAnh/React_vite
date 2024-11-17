import './todo.css'

const TodoData = (props) => {
    console.log(">>> check props: ", props)

    return (
        <div className='list'>
            {/* eslint-disable-next-line react/prop-types */}
            <div>My name is {props.name}</div>
            <div>Learn React</div>
            <div>Learn Vite</div>
            <div>Learn React Router</div>
            <div>Learn Redux</div>
            <div>Learn React Hooks</div>
            <div>Learn React Context</div>
            <div>
                {/* eslint-disable-next-line react/prop-types */}
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData