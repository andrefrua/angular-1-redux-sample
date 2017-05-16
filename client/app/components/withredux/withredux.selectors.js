import * as selectorsUtils from '../../selectors/base';

const getAllTodos = (state) => state.TodosState.todos;
const getNoErrorsTodos = selectorsUtils.createCombinedSelector(getAllTodos, all => all.filter(todo => !todo.error))
const getDoneTodos = selectorsUtils.createCombinedSelector(getAllTodos, all => all.filter(todo => todo.done));
const getErrorTodos = selectorsUtils.createCombinedSelector(getAllTodos, all => all.filter(todo => todo.error));
const countAllTodos = selectorsUtils.createCombinedSelector(getAllTodos, all => all.length);
const countDoneTodos = selectorsUtils.createCombinedSelector(getDoneTodos, done => done.length);
const countErrorTodos = selectorsUtils.createCombinedSelector(getErrorTodos, error => error.length);

export default { getAllTodos, getNoErrorsTodos, getDoneTodos, getErrorTodos, countAllTodos, countDoneTodos, countErrorTodos };
