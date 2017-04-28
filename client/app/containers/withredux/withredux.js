import angular from 'angular';
import uiRouter from 'angular-ui-router';
import withreduxComponent from './withredux.component';

const withreduxModule = angular.module('withredux', [
  uiRouter
])

.component('withredux', withreduxComponent);

export default withreduxModule;
