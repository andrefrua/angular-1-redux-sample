import TodoActions from '../../actions/todo.actions';
import { TODOS_TO_SHOW } from '../../constants/todos';



import TodoSelectors from './withredux.selectors'



class WithreduxController {
  constructor($ngRedux) {

    this.inputTodo = '';
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TodoActions)(this);
  }

  $onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      //Directly from the state
      allDone: state.TodosState.allDone, //TODO - NOT USEFULL
      showDone: state.TodosState.showDone,
      //Gets from the selector
      allTodos: TodoSelectors.getAllTodos(state),
      doneTodos: TodoSelectors.getDoneTodos(state),
      countAllTodos: TodoSelectors.countAllTodos(state),
      countDoneTodos: TodoSelectors.countDoneTodos(state)
    }
    //return state;
  }

  /**
   * Calls the action addTodo send the input parameter and clearing the input todo
   */
  submitTodo() {
    this.addTodo(this.inputTodo);
    this.inputTodo = '';
  }

 
  /**
   * Should this be done like this? Or should it be done by a reducer action? I'm not changing the
   * state so...  
   * NOW THIS IS DONE USING SELECTORS
   */
//   countTodos(todoToShow) {
//     switch (todoToShow) {
//       case TODOS_TO_SHOW.SHOW_ALL:
//         return this.allTodos.length;

//       case TODOS_TO_SHOW.SHOW_DONE:
//         return this.allTodos.filter(function (todo) {
//           return todo.done;
//         }).length;

//       case TODOS_TO_SHOW.SHOW_NOT_DONE:
//         return this.allTodos.filter(function (todo) {
//           return !todo.done;
//         }).length;
//     }
//   }
 }

WithreduxController.$inject = ["$ngRedux"];

export default WithreduxController;
