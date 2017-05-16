/**
 * To-do actions
 * Handles the information sent from the application to the Redux store
 */

/**
 * Importing the required files
 */
import { TODOS } from '../constants/todos';

/**
 * Adds a new Todo to the list, clean or with an error
 * @param {String} newTodo - Text to be added for the newly created To-do
 * @param {Boolean} hasError - Informs if there is an error or not
 */
function addTodo(newTodo, hasError) {
    return {
        type: TODOS.ADD_TODO,
        payload: {
            text: newTodo,
            hasError: hasError
        }
    }
}
/**
 * Removes the To-do with the received Id
 * @param {Number} id - Id of the To-do to be removed
 */
function removeTodo(id) {
    return {
        type: TODOS.REMOVE_TODO,
        payload: id
    };
}
/**
 * Marks or Unmarks all To-dos as done
 * @param {Boolean} mark - Flag informing if all To-do should be marked as done
 */
function markAllAsDone(mark) {
    return {
        type: TODOS.MARK_ALL_AS_DONE,
        payload: mark
    };
}
/**
 * Deletes all the To-dos that are marked as done
 */
function deleteAllDone() {
    return {
        type: TODOS.REMOVE_ALL_DONE
    };
}
/**
 * Toggle the option to see done To-dos on the main list
 */
function toggleShowDone() {
    return {
        type: TODOS.TOGGLE_SHOW_DONE
    }
}
/**
 * Toggles the done flag of the specigied to-do
 * @param {Number} id - Id of the To-do to toggle the done flag
 */
function toggleDone(id) {
    return {
        type: TODOS.TOGGLE_DONE,
        payload: id
    }
}
/**
 * Removes the error flag from the to-do with the received id
 * @param {Number} id - Id of the To-to do be cleaned
 */
function cleanError(id) {
    return {
        type: TODOS.CLEAN_ERROR,
        payload: id
    }
}
/**
 * Sets or removes the loading flag from the state
 * @param {Boolean} loading - Flag informing if the state should be loading or not
 */
function setLoading(loading) {
    return {
        type: TODOS.SET_LOADING,
        payload: loading
    }
}
/**
 * Sets the notification message
 * @param {String} message - Message to be set as the notification
 */
function setNotification(message) {
    return {
        type: TODOS.SET_NOTIFICATION,
        payload: message
    }
}

/**
 * Action simulating an Async request using thunk - It will call addTodo to actually create the 
 * to-do
 * @param {*} secsToDelay - Amount of time to delay the operation in seconds
 * @param {*} newTodo - Text to add to the new to-do
 */
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

/**
 * Exports the function so that they can be used as actions
 */
export default {
    addTodo,
    removeTodo,
    markAllAsDone,
    deleteAllDone,
    toggleShowDone,
    toggleDone,
    cleanError,
    setLoading,
    addTodoThunk
};
