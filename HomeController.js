angular.module("app")

.controller("HomeController", function (GameService) {
    var homeCtrl = this;

    function fetchGames() {
        GameService.getAll()
            .then(function (games) {
                homeCtrl.games = games
            })
    }
    fetchGames()

    homeCtrl.join = function (game) {
        GameService.join(game)
            .then(function () {
                fetchGames()
            })
    }

})