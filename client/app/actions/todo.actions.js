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

function removeDone(id) {
    return {
        type: TODOS.REMOVE_DONE,
        payload: id
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

export default { addTodo, removeTodo, removeDone, markAllAsDone, deleteAllDone };
