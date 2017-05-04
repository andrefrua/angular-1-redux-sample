import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import noreduxComponent from './noredux.component';

const noreduxModule = angular.module('noredux', [
  uiRouter
])

.component('noredux', noreduxComponent);

export default noreduxModule;
