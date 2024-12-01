import './todo.css'
import PropTypes from "prop-types";


const TodoData = (props) => {
    const {todoList, deleteTodo} = props;
    console.log(">>> check props: ", todoList)
    const handleOnClick = (id) => {
        deleteTodo(id)
    }
    return (
        <div className='list'>
            {todoList.map((item, index) => {
                console.log(">>> check map: ", item, index)
                return (
                    <div className='button_delete' key={item.id}>
                        <div>{item.name}</div>
                        <button style={{cursor: "pointer"}}
                                onClick={()=> handleOnClick(item.id)}
                        >Delete
                        </button>
                    </div>
                )
            })}
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

TodoData.prototype = {
    todoList: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
}

export default TodoData