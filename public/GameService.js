angular.module("app")
.factory("GameService", function ($http) {
    "use strict"
    var apiUrl = "http://192.168.229.21:3000/games";
    return {
        pseudo: "tabbehim",
        getAll: function () {
            return $http.get(apiUrl)
                .then(function (response) {
                    return response.data;
                })
                .then(function (games) {
                    return games.filter(function (game) {
                        return !game.user2 ||
                        ( game.user1.pseudo === this.pseudo
                            || game.user2.pseudo === this.pseudo )
                    }.bind(this))
                }.bind(this))
        },
        get: function (id) {
            return $http.get(apiUrl + "/" + id)
                .then(function (response) {
                    return response.data
                })
        },
        join: function (game) {
            game.user2 = {
                pseudo: this.pseudo
            };
            return $http.put(apiUrl + "/" + game.id, game)
        },
        save: function (game) {
            if (!game.user1) game.user1 = {};
            game.user1.pseudo = this.pseudo;
            return $http.post(apiUrl, game)
        },
        fleetSizeValues: [
            {value:1, label:'1 bateau'}, 
			{value:2, label:'2 bateaux'},
			{value:3, label:'3 bateaux'},
			{value:4, label:'4 bateaux'},
			{value:5, label:'5 bateaux'}
        ]
    }
})