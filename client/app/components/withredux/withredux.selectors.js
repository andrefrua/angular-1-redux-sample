import * as selectorsUtils from '../../selectors/base';

const getAllTodos = (state) => state.TodosState.todos;
const getDoneTodos = selectorsUtils.createCombinedSelector(getAllTodos, all => all.filter(todo => todo.done));
const getTodosNotDone = selectorsUtils.createCombinedSelector(getAllTodos, all => all.filter(todo => !todo.done));
const countAllTodos = selectorsUtils.createCombinedSelector(getAllTodos, all => all.length);
const countDoneTodos = selectorsUtils.createCombinedSelector(getDoneTodos, done => done.length);

export default { getAllTodos, getDoneTodos, getTodosNotDone, countAllTodos, countDoneTodos };

