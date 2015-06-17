angular.module("app", ["ngRoute"])

.config(function ($routeProvider) {

    $routeProvider

    .when("/", {
      templateUrl: "views/home.html",
      controller: "HomeController",
      controllerAs: "homeCtrl"
    })

    .when("/new", {
      templateUrl: "views/new.html",
      controller: "NewController",
      controllerAs: "newCtrl"
    })

    .when("/test/:id", {
      template: "ici",
      controller: function ($routeParams) {
        console.log($routeParams.id)
      },
      controllerAs: "newCtrl"
    })

    .otherwise({
      redirectTo: "/"
    });

})