import template from './todos.html';
import controller from './todos.controller';
import './todos.scss';

let todosComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  transclude: true
};

export default todosComponent;