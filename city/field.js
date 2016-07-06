class Field{
    constructor(game){
        this.turrets = new Array(3);
        for(var i = 0; i < 3; i++){
            this.turrets[i] = new Array(3);
        }
        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++) {
                var xPos = 500*i + 100;
                var yPos = 500*j + 100;
                var spr = game.add.sprite(xPos, yPos, 'b_turret');
                spr.inputEnabled = true;
                var sideLine = i == 2 || j == 2 ? true : false;
                this.turrets[i][j] = new Turret(game, spr, sideLine,  100, 100, 12, xPos, yPos, i, j);
            }
        }
    }

}