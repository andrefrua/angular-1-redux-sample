import angular from 'angular';
import uiRouter from 'angular-ui-router';
import noreduxComponent from './noredux.component';

const noreduxModule = angular.module('noredux', [
  uiRouter
])

.component('noredux', noreduxComponent);

export default noreduxModule;
