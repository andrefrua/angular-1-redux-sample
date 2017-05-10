import { TODOS } from '../constants/todos';

function addTodo(newTodo) {
    return {
        type: TODOS.ADD_TODO,
        payload: newTodo
    }
}

function removeTodo(index) {
    return {
        type: TODOS.REMOVE_TODO,
        payload: index
    };
}

function markAllAsDone(mark) {
    return {
        type: TODOS.MARK_ALL_AS_DONE,
        payload: mark
    };
}

function deleteAllDone() {
    return {
        type: TODOS.REMOVE_ALL_DONE
    };
}

function toggleShowDone() {
    return {
        type: TODOS.TOGGLE_SHOW_DONE
    }
}

function toggleDone(id) {
    return {
        type: TODOS.TOGGLE_DONE,
        payload: id
    }
}

export default { addTodo, removeTodo, markAllAsDone, deleteAllDone, toggleShowDone, toggleDone };
