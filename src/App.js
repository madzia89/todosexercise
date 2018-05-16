import React from 'react';
import {connect} from 'react-redux'
import{add, inputChange} from "./state/todos";

const App = (props) => (

    <div className="App">
        <input
            type={'text'}
            value={props.newTaskName}
            onChange={props.onInputChange}
        />
        <button
            onClick={props.addTask}
        >
            add
        </button>
            <ul>
                {
                    props.tasks.map((task, i) => <li key={i}>{task}</li>)
                }
            </ul>
    </div>
)

export default connect(
state => ({
            tasks: state.todos.tasks,
    newTaskName:state.todos.newTaskName
}),
    dispatch => ({
        addTask: () => dispatch(add()),
        onInputChange: (event) => dispatch(inputChange(event.target.value)),
    })
) (App);
