import './todo.css'
import PropTypes from "prop-types";


const TodoData = (props) => {
    const { todoList} = props;
    console.log(">>> check props: ", todoList)

    return (
        <div className='list'>
            {todoList.map((item, index) => {
                console.log(">>> check map: ", item, index)
                return (
                    // eslint-disable-next-line react/jsx-key
                    <div className='button_delete'>
                        <div>{item.name}</div>
                        <button>Delete</button>
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