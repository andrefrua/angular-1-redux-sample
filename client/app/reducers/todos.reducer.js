import { TODOS } from '../constants/todos';

const initialState = {
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

            if (isNaN(parseInt(newId))) newId = 0;

            newId++;

            return {
                ...state,
                allDone: false,
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
        case TODOS.MARK_ALL_AS_DONE:
            return {
                ...state,
                allDone: action.payload,
                todos: state.todos.map(function (todo) {
                    return { ...todo, done: action.payload };
                })
            }

        case TODOS.TOGGLE_SHOW_DONE:
            // Example without Spread Operator (...)

            // return Object.assign({}, state, {
            //      showDone: !state.showDone
            // });

            // Example with Spread Operator (...)
            console.log(!state.showDone);
            return {
                ...state,
                showDone: !state.showDone
            }

        case TODOS.TOGGLE_DONE:
            return {
                ...state,
                todos: state.todos.map(function (todo) {
                    return todo.id === action.payload ? { ...todo, done: !todo.done } : todo;
                })
            }
        default:
            return state;
    }
}




