// Third party dependencies
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngRedux from 'ng-redux';

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

            // Dashboard page to contain our goats list page
            .state('app.withredux', {
                url: '/withredux',
                template: '<withredux><p>Extra stuff to test transclude</p></withredux>'
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

// TODO - Put the directive into a separate file
angular.module('app')
    .directive('ngEnter', function () { //a directive to 'enter key press' in elements with the "ng-enter" attribute

        return function (scope, element, attrs) {

            element.bind("keydown keypress", function (event) {

                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    })
