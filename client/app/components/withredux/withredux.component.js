import template from './withredux.html';
import controller from './withredux.controller';
import './withredux.scss';

let withreduxComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  transclude: true
};

export default withreduxComponent;  
