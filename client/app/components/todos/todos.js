import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import todosComponent from './todos.component';

const todosModule = angular.module('todos', [
  uiRouter
])

.component('todos', todosComponent);

export default todosModule;
