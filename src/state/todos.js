const ADD = 'todos/ADD'
const INPUT_CHANGE = 'todos/INPUT_CHANGE'

export const add = () => ({type: ADD})
export const inputChange = (newTaskName) => ({type: INPUT_CHANGE, newTaskName})

const initialState = {
    tasks: [],
    newTaskName: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                newTaskName: initialState.newTaskName,
                tasks: state.tasks.concat(state.newTaskName)
            }
        case INPUT_CHANGE:
            return {
                ...state,
                newTaskName: action.newTaskName
            }
        default:
            return state
    }
}