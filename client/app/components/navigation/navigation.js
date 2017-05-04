import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import navigationComponent from './navigation.component';

const navigationModule = angular.module('navigation', [
  uiRouter
])

.component('navigation', navigationComponent);

export default navigationModule;
