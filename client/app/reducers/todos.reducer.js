import { TODOS } from '../constants/todos';

const initialState = {
    isLoading: false,
    notification: '',
    showDone: false,
    todos: [
        // { id: 1, text: 'First todo item', done: false, error: false },
        // { id: 2, text: 'Second todo item', done: false, error: false }
    ]
};

export function TodosReducer(state = initialState, action) {

    switch (action.type) {
        case TODOS.ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat({ id: createNewId(state.todos), text: action.payload.text, done: false, error: action.payload.hasError }),
                notification: action.payload.hasError ? 'Unable to add to-do' : 'To-do added'
            }

        case TODOS.REMOVE_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos.slice(0, action.payload),
                    ...state.todos.slice(action.payload + 1)
                ],
                notification: 'To-do removed'
            };
        case TODOS.REMOVE_ALL_DONE:
            return {
                ...state,
                todos: state.todos.filter(function (todo) {
                    return !todo.done;
                }),
                notification: 'Removed done to-dos'

            }
        case TODOS.MARK_ALL_AS_DONE:
            return {
                ...state,
                todos: state.todos.map(function (todo) {
                    return { ...todo, done: action.payload };
                }),
                notification: ''
            }

        case TODOS.TOGGLE_SHOW_DONE:
            // Example without Spread Operator (...)

            // return Object.assign({}, state, {
            //      showDone: !state.showDone
            // });

            // Example with Spread Operator (...)
            return {
                ...state,
                showDone: !state.showDone,
                notification: ''
            }

        case TODOS.TOGGLE_DONE:
            return {
                ...state,
                todos: state.todos.map(function (todo) {
                    return todo.id === action.payload ? { ...todo, done: !todo.done } : todo;
                }),
                notification: ''
            }

        case TODOS.CLEAN_ERROR:
            return {
                ...state,
                todos: state.todos.map(function (todo) {
                    return todo.id === action.payload ? {
                        ...todo,
                        text: todo.text.concat('*'),
                        error: false
                    } : todo;
                }),
                notification: ''
            }

        case TODOS.SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        case TODOS.SET_NOTIFICATION:
            return {
                ...state,
                notification: action.payload
            }

        default:
            return state;
    }

    function createNewId(todos) {
        var newId = Math.max.apply(Math, todos.map(function (t) { return t.id; }));

        if (isNaN(parseInt(newId))) newId = 0;

        return ++newId;
    }
}
