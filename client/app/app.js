// Third party dependencies
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';

// Components
import AppComponent from './app.component';
import NavigationComponent from './components/navigation/navigation';
import TodosComponent from './components/todos/todos';

// TODO - Put the directive into a separate file
// Directives
// import AppDirectives from './directives/app.directives';

// Reducers
import { RootReducer } from './reducers';

// Imports the default styles for all the application
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

angular
    .module('app', [
        uiRouter,
        ngRedux,

        NavigationComponent.name,
        TodosComponent.name,
    ])
    .config(($locationProvider, $stateProvider, $urlRouterProvider, $ngReduxProvider) => {
        "ngInject";

        // Define our app routing, we will keep our layout inside the app component
        // The layout route will be abstract and it will hold all of our app views
        $stateProvider
            .state('app', {
                url: '',
                abstract: true,
                template: '<app></app>'
            })

            // Todo page with Redux
            .state('app.todos', {
                url: '/todos',
                template: '<todos></todos>'
            })

        $urlRouterProvider.otherwise('/todos');
        $ngReduxProvider.createStoreWith(RootReducer, [thunk]);
    })
    .component('app', AppComponent);
