angular.module("app")

.controller("PrepareController", function (GameService, $routeParams) {
    var prepareCtrl = this;

    prepareCtrl.battlefield = [];

    var currentBoat = {
        id: 1,
        positions: []
    };

    function initBattleField() {
        for (var i = 0; i<prepareCtrl.game.battlefieldSize.height;i++) {
            prepareCtrl.battlefield[i] = [];
            for (var j = 0; j<prepareCtrl.game.battlefieldSize.width;j++) {
                prepareCtrl.battlefield[i][j] = 0
            }
        }
    }

    GameService.get($routeParams.id).then(function (game) {
        prepareCtrl.game = game

        prepareCtrl.rows = new Array(prepareCtrl.game.battlefieldSize.height)
        prepareCtrl.cols = new Array(prepareCtrl.game.battlefieldSize.width)

        initBattleField()
    })

    prepareCtrl.reset = function () {
        currentBoat = {
            id: 1,
            positions: []
        }
        initBattleField()
    }

    prepareCtrl.add = function (i, j) {
        if (prepareCtrl.game.fleetSize < currentBoat.id) return;
        if (currentBoat.positions.length === 0) {
            prepareCtrl.battlefield[i][j] = currentBoat.id
            currentBoat.positions.push([i, j])
            return
        }
        if (currentBoat.positions.length === 2) {
            return
        }
        if (currentBoat.positions.length === 1) {
            var i0 = currentBoat.positions[0][0];
            var j0 = currentBoat.positions[0][1];
            if ((i0 === i && ( j0 === j-1 || j0 === j+1)) ||
                (j0 === j && ( i0 === i-1 || i0 === i+1))) {
                prepareCtrl.battlefield[i][j] = currentBoat.id
                currentBoat.positions.push([i, j])
                currentBoat.id++;
                currentBoat.positions = [];
                return
            }
        }
    }
	prepareCtrl.checkReady=function(){
		if(!prepareCtrl.fleet) return false;
			return prepareCtrl.fleet.every(function(boat){
				return boat.positions.length===2;
		})
	}

})
					/*if((currentBoat.positions[0][0]===i &&
					(currentBoat.positions[0][1]===j-1 ||
						currentBoat.positions[1][0]===j+1 ))
						||
					(currentBoat.positions[0][0]===i &&
					(currentBoat.positions[0][1]===j-1 ||
						currentBoat.positions[1][0]===j+1 )))
							prepareCtrl.battlefield[i][j]=currentBoat.id
							currentBoat.positions.push([i,j])
						}*/
