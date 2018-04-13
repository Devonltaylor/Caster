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


// SERVICES
casterApp.service('cityService', function() {
    
    this.city = "Troy, MI";
    
})


// CONTROLLERS
casterApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
    
}]);

casterApp.controller('forecastController', ['$scope', 'cityService', function($scope, cityService){
    
    $scope.city = cityService.city;
    
}]);

