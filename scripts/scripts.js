var app = angular.module('myApp', ['ngRoute']);

app.controller('FirstController', function($scope) {
    $scope.message = 'Hello from Firs    tController';
});

app.config(function($routeProvider) {
        $routeProvider
        .when('/', {
        templateUrl : '/pages/home.html',
        controller : 'HomeController'
        })
        .when('/home', {
            templateUrl : '/pages/home.html',
            controller : 'HomeController'
        })
        .when('/contact', {
            templateUrl : '/pages/contact.html',
            controller : 'HomeController'
        })
});

app.controller('HomeController', function($scope) {
});
        
    // Script to open and close sidebar
    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
      }
       
      function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
      }