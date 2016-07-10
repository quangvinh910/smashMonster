class Turret extends FieldObject{
    constructor(game, sprite, isSideLine, hp, damage, speed, posX, posY, fieldPosX, fieldPosY){
        super(game, sprite, hp, damage, speed, posX, posY);
        this.x = fieldPosX;
        this.y = fieldPosY;
        this.sprite = sprite;
        this.sprite.alpha = 0.5;
        this.sideLine = isSideLine;
        this.sprite.events.onInputDown.add(function (spr, pointer) {
            this.chooseTurretToAttack();
        }, this);
        this.sprite.events.onInputOver.add(function (spr, pointer) {
            this.chooseTurretToAttack();
        }, this);

        this.sprite.events.onInputOut.add(function (spr, pointer) {
            this.chooseTurretToAttack();
        }, this);

        this.sprite.events.onInputUp.add(function (spr, pointer) {
            this.handleFinishChoosing();
        }, this);

    }

    chooseTurretToAttack(){
        var plc = this;
        var currentSpt = this.sprite;
        if (plc.sideLine && Smash.currentSelectedPlace.turrets == undefined) {
            currentSpt.alpha = 1;
            Smash.currentSelectedPlace.turrets = plc;
        } else if (Smash.currentSelectedPlace.turrets != undefined
            && (!plc.sideLine || (Smash.currentSelectedPlace.turrets.x == 2 && Smash.currentSelectedPlace.turrets.y == 2))
            && Smash.currentSelectedPlace.x == undefined && Smash.currentSelectedPlace.y == undefined
            && Smash.currentSelectedPlace.turrets.isAdjenct(plc)) {

            Smash.currentSelectedPlace.x = plc.x == Smash.currentSelectedPlace.turrets.x ? plc.x : undefined;
            Smash.currentSelectedPlace.y = plc.y == Smash.currentSelectedPlace.turrets.y ? plc.y : undefined;
            if (plc.x == Smash.currentSelectedPlace.turrets.x) {
                for (var k = 0; k < 3; k++) {
                    Smash.theField.turrets[plc.x][k].sprite.alpha = 1;
                }
            } else if (plc.y == Smash.currentSelectedPlace.turrets.y) {
                for (var k = 0; k < 3; k++) {
                    Smash.theField.turrets[k][plc.y].sprite.alpha = 1;
                }
            }
        }
    }

    handleFinishChoosing(){
        Smash.currentSelectedPlace.turrets = undefined;
        Smash.currentSelectedPlace.x = undefined;
        Smash.currentSelectedPlace.y = undefined;

        for(var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                Smash.theField.turrets[i][j].sprite.alpha = 0.5;
            }
        }
    }

    isAdjenct (spt){
        if(this.x == spt.x && this.y == spt.y){
            return false;
        }
        if((this.x == 2 && spt.y == this.y) || (this.y == 2 && spt.x == this.x)){
            return true;
        } else {
            return false;
        }
    }
    
}