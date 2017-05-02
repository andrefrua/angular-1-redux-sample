import { TODOS } from '../constants/todos';


const initialState = {
    inputTodo: '',
    showDone: false,
    allDone: false,
    todos: [
        { id: 1, text: 'First todo item', done: false },
        { id: 2, text: 'Second todo item', done: false }
    ]
};

export function TodosReducer(state = initialState, action) {
    switch (action.type) {
        case TODOS.ADD_TODO:
            var newId = Math.max.apply(Math, state.todos.map(function (t) { return t.id; }));
            if (isNaN(parseInt(newId))) newId = 1
            return {
                ...state,
                allDone: false,
                inputTodo: '',
                todos: state.todos.concat({ id: newId, text: action.payload, done: false })
            }
        case TODOS.REMOVE_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, action.payload),
                    ...state.todos.slice(action.payload + 1)
                ]
            };
        case TODOS.REMOVE_ALL_DONE:
            return {
                ...state,
                allDone: false,
                todos: state.todos.filter(function (todo) {
                    return !todo.done;
                })
            }
        case TODOS.REMOVE_DONE:
            return {
                ...state,
                allDone: false,
                todos: state.todos.map(function (todo) {
                    return todo.id === action.payload ? { ...todo, done: false } : todo;
                })
                //(todo, i) => todo.id === action.payload ? { ...todo, done: false } : todo //WITH NEW ES6 SYNTAX
            };
        case TODOS.MARK_ALL_AS_DONE:
            return {
                ...state,
                allDone: action.payload,
                todos: state.todos.map(function (todo) {
                    return { ...todo, done: action.payload };
                })
            }
        default:
            return state;
    }
}
