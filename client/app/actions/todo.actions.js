import { TODOS } from '../constants/todos';

function addTodo(newTodo, hasError) {
    return {
        type: TODOS.ADD_TODO,
        payload: {
            text: newTodo,
            hasError: hasError
        }
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

function cleanError(id) {
    return {
        type: TODOS.CLEAN_ERROR,
        payload: id
    }
}

function setLoading(loading) {
    return {
        type: TODOS.SET_LOADING,
        payload: loading
    }
}

function setNotification(message) {
    return {
        type: TODOS.SET_NOTIFICATION,
        payload: message
    }
}

// Thunk action example
function addTodoThunk(secsToDelay, newTodo) {

    return function (dispatch) {
        // First dispatch: Updates the app state to isLoading = true;
        dispatch(setLoading(true));

        setTimeout(function () {
            new Promise(function (resolve, reject) {
                var randomNumber = Math.floor((Math.random() * 10) + 1);
                // If the random number is greater to 5 the todo is added to the errors list
                if (randomNumber <= 5) {
                    dispatch(addTodo(newTodo, false));
                    resolve('To-do created');
                } else {
                    dispatch(addTodo(newTodo, true));
                    reject('Invalid to-do');
                }
            }).then(function (result) {
                dispatch(setLoading(false));                
            }).catch(function (error) {
                dispatch(setLoading(false));
            });
        }, secsToDelay * 1000);

    }
}

export default { addTodo, removeTodo, markAllAsDone, deleteAllDone, toggleShowDone, toggleDone, cleanError, setLoading, addTodoThunk };
