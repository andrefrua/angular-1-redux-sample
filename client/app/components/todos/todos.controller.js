import TodoActions from '../../actions/todo.actions';
import { TODOS_TO_SHOW } from '../../constants/todos';

import TodoSelectors from './todos.selectors'

class TodosController {
  constructor($ngRedux) {
    this.inputTodo = '';
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TodoActions)(this);
  }

  $onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      // TODO: Remove the below line and all it's references. It's just to show the current full state
      completeState: state,

      //Directly from the state
      isLoading: state.TodosState.isLoading,
      showDone: state.TodosState.showDone,
      notification: state.TodosState.notification,
      //Gets from the selector
      noErrorTodos: TodoSelectors.getNoErrorsTodos(state),
      doneTodos: TodoSelectors.getDoneTodos(state),
      errorTodos: TodoSelectors.getErrorTodos(state),
      countAllTodos: TodoSelectors.countAllTodos(state),
      countDoneTodos: TodoSelectors.countDoneTodos(state),
      countErrorTodos: TodoSelectors.countErrorTodos(state)
    }
    //return state;
  }

  /**
   * Calls the action addTodo send the input parameter and clearing the input todo
   */
  submitTodo() {
    // Exits if it's neither a mouse click, a enter key press or the inputTodo is empty
    if ((event.type !== 'click' && event.keyCode !== 13) || !this.inputTodo) return;

    this.addTodo(this.inputTodo);
    this.inputTodo = '';
  }

  submitTodoInXSeconds(seconds) {
    this.addTodoThunk(seconds, this.inputTodo);
    this.inputTodo = '';
  }
}

TodosController.$inject = ["$ngRedux"];

export default TodosController;
