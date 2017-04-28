//import TodoActions from '../../actions/todo.actions';

class NoreduxController {
  constructor() {

    this.todos = [
      { text: 'First todo item', done: false },
      { text: 'Second todo item', done: false }
    ]
    this.todo = '';

    this.addTodo = function () {
      this.todos.push({ text: this.todo, done: false });
      this.todo = '';
    }

    this.deleteTodo = function (index) {
      console.log(index);
      this.todos.splice(index, 1);
    }

    this.getTotalTodos = function () {
      return this.todos.length;
    };


    this.clearCompleted = function () {
      this.todos = this.todos.filter(function (todo) {
        return !todo.done;
      })
    };

  }



}

//NoreduxController.$inject = ["$ngRedux"];

export default NoreduxController;
