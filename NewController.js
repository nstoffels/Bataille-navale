angular.module("app")

.controller("NewController", function (GameService, $location) {
    var newCtrl = this;

    newCtrl.save = function (form) {
        if (form.$invalid) return;
        GameService.save(newCtrl.game)
            .then(function () {
                $location.path("/")
            })
    }

})