/**
 * Created by davidhoverson on 10/20/15.
 */
var app = angular.module('mainBudget', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/',{
            templateUrl:'views/home.html',
            controller: 'HomeController'
        })
        .when('/current',{
            templateUrl:'views/budget.html',
            controller: 'BudgetController'
        })
        .when('/savings', {
            templateUrl: 'views/savings.html',
            controller: 'SavingsController'
        })
        .when('/archive',{
            templateUrl:'views/archive.html',
            controller: 'ArchiveController'
        });

    $locationProvider.html5Mode(true);
});