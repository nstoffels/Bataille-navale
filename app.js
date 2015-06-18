angular.module("app", ["ngRoute"])

.config(function ($routeProvider) {

    $routeProvider

    .when("/", {
      templateUrl: "/home.html",
      controller: "HomeController",
      controllerAs: "homeCtrl"
    })


    .when("/new", {
      templateUrl: "/new.html",
      controller: "NewController",
      controllerAs: "newCtrl"
    })


    .when("/prepare/:id", {
      templateUrl: "/prepare.html",
      controller: "PrepareController",
      controllerAs: "prepareCtrl"
    })


    .otherwise({
      redirectTo: "/"
    });

})

.controller("main", function ($scope) {
  $scope.bonjour = function () {
    console.log("Bonjour")
  }

})