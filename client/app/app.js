import angular      from 'angular';
import uiRouter     from '@uirouter/angularjs';
import ngRedux      from 'ng-redux';

import AppComponent from './app.component';

import NavigationComponent  from './components/navigation/navigation';
import WithreduxComponent   from './containers/withredux/withredux';
import NoreduxComponent     from './containers/noredux/noredux';

import { RootReducer } from './reducers';

// import our default styles for the whole application
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

            // Dashboard page to contain our goats list page
            .state('app.withredux', {
                url: '/withredux',
                template: '<withredux></withredux>'
            })

                        // Dashboard page to contain our goats list page
            .state('app.noredux', {
                url: '/noredux',
                template: '<noredux></noredux>'
            });

        $urlRouterProvider.otherwise('/noredux');
        $ngReduxProvider.createStoreWith(RootReducer);
    })
    .component('app', AppComponent);
