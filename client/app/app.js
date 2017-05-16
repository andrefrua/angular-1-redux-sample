// Third party dependencies
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngRedux from 'ng-redux';
import thunk from 'redux-thunk';

// Components
import AppComponent from './app.component';
import NavigationComponent from './components/navigation/navigation';
import WithreduxComponent from './components/withredux/withredux';
import NoreduxComponent from './components/noredux/noredux';

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
        WithreduxComponent.name,
        NoreduxComponent.name
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
            .state('app.withredux', {
                url: '/withredux',
                template: '<withredux></withredux>'
            })

        // // Todo page without Redux
        // .state('app.noredux', {
        //     url: '/noredux',
        //     template: '<noredux></noredux>'
        // });

        $urlRouterProvider.otherwise('/withredux');
        $ngReduxProvider.createStoreWith(RootReducer, [thunk]);
    })
    .component('app', AppComponent);
