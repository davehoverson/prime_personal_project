/**
 * Created by davidhoverson on 10/20/15.
 */
var app = angular.module('mainBudget', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home',{
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

}]);

