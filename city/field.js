class Field{
    constructor(game){
        this.turrets = new Array(3);
        this.turretArray = [];
        for(var i = 0; i < 3; i++){
            this.turrets[i] = new Array(3);
        }
        for (var i = 0; i < 3; i++){
            for (var j = 0; j < 3; j++) {
                var xPos = Smash.spriteSize*i + 100;
                var yPos = Smash.spriteSize*j + 100;
                var spr = game.add.sprite(xPos, yPos, 'b_turret');
                spr.alpha = 0.5;
                spr.inputEnabled = true;
                var sideLine = i == 2 || j == 2 ? true : false;
                var turret = new Turret(game, spr, sideLine,  100, 100, 10, xPos, yPos, i, j);
                this.turrets[i][j] = turret;
                this.turretArray.push(turret);
            }
        }
    }


}