
const getAllTodos = (state) => state.TodosState.todos;
const getDoneTodos = (state) => state.TodosState.todos.filter(todo => todo.done);
const getTodosNotDone = (state) => state.TodosState.todos.filter(todo => !todo.done);
const countAllTodos = (state) => state.TodosState.todos.length;
const countDoneTodos = (state) => state.TodosState.todos.filter(todo => todo.done).length;

export default { getAllTodos, getDoneTodos, getTodosNotDone, countAllTodos, countDoneTodos };

