import TodoActions from '../../actions/todo.actions';
import { TODOS_TO_SHOW } from '../../constants/todos';

class WithreduxController {
  constructor($ngRedux) {

    this.todo = '';
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TodoActions)(this);
  }

  $onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return state
  }
/**
 * Should this be done like this? Or should it be done by a reducer action? I'm not changing the
 * state so...  
 */
  listTodos(todoToShow) {
    switch (todoToShow) {
      case TODOS_TO_SHOW.SHOW_ALL:
        return this.currentState.todos;

      case TODOS_TO_SHOW.SHOW_DONE:
        return this.currentState.todos.filter(function (todo) {
          return todo.done;
        });

      case TODOS_TO_SHOW.SHOW_NOT_DONE:
        return this.currentState.todos.filter(function (todo) {
          return !todo.done;
        });
    }
  }
/**
 * Should this be done like this? Or should it be done by a reducer action? I'm not changing the
 * state so...  
 */
  countTodos(todoToShow) {
    switch (todoToShow) {
      case TODOS_TO_SHOW.SHOW_ALL:
        return this.currentState.todos.length;

      case TODOS_TO_SHOW.SHOW_DONE:
        return this.currentState.todos.filter(function (todo) {
          return todo.done;
        }).length;

      case TODOS_TO_SHOW.SHOW_NOT_DONE:
        return this.currentState.todos.filter(function (todo) {
          return !todo.done;
        }).length;
    }
  }
}

WithreduxController.$inject = ["$ngRedux"];

export default WithreduxController;
