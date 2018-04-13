// MODULE
var casterApp = angular.module('casterApp', ['ngRoute', 'ngResource']);

// CONFIGURATION
casterApp.config(function($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl:'pages/home.html',
        controller:'homeController'
    })
    
    .when('/forecast', {
        templateUrl:'pages/forecast.html',
        controller:'forecastController'
    })
});


// CONTROLLERS
casterApp.controller('homeController', ['$scope', function($scope){
    
}]);

casterApp.controller('forecastController', ['$scope', function($scope){
    
}]);

