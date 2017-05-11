//import TodoActions from '../../actions/todo.actions';

class NoreduxController {
  constructor() {

    // // Actions
    // this.addTodo = this.addTodo;
    // this.deleteTodo = this.deleteTodo;

    // Properties
    this.todos = [
      { text: 'First todo item', done: false },
      { text: 'Second todo item', done: false }
    ];
    this.todo = '';
    this.showDone = false;
  }

  // Actions
  addTodo() {
    this.todos.push({ text: this.todo, done: false });
    this.todo = '';
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }

  toggleDone(index) {
    this.todos[index].done = !this.todos[index].done;
  }

  getTotalTodos() {
    return this.todos.length;
  }

  getTotalDoneTodos() {
    return this.todos.filter(function (todo) {
      return todo.done;
    }).length;
  }

  getAllDone() {
    return this.todos.filter(function (todo) {
      return todo.done;
    });
  }

  deleteAllDone() {
    this.todos = this.todos.filter(function (todo) {
      return !todo.done;
    });
  }

  markAllAsDone() {    
    var isAnyMarkedAsDone = this.todos.filter(function  (todo) {
      return todo.done;
    }).length > 0;    

    this.todos.map(function (t) {
      t.done = !isAnyMarkedAsDone;
    });
  }
}

export default NoreduxController;
