import TodoActions from '../../actions/todo.actions';

class WithreduxController {
  constructor($ngRedux) {

    this.todo = '';
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TodoActions)(this);
  }

  submitTodo() {
    this.addTodo(this.todo);
    this.todo = '';
  }

  alertCurrentTodo() {
    alert(this.listTodo());
  }

  $onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis(state) {
    return {
      todos: state.todos
    };
  }
}

WithreduxController.$inject = ["$ngRedux"];

export default WithreduxController;
