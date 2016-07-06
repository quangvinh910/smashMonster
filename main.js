var game = new Phaser.Game(2400, 3600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('b_turret', 'data/b_turret.png');
    game.load.image('b_pockitz', 'data/b_pockitz.png');
    // game.load.image('field', 'data/field.png');


}


var rectangle;
var theField;
var monsterSide;
var currentSelectedPlace = {
    turrets : undefined,
    x : undefined,
    y : undefined,
    isEmpty : function(){
        return !x && !y && !place;
    }
};
function create() {


    theField = new Field(game);
    monsterSide = new MonsterSide(game);


    // game.input.addMoveCallback(moving, this);

}

function moving(pointer, x, y){
}


function attackField() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var plc = theField.turrets[i][j];
            var currentSpt = theField.turrets[i][j].sprite;
            if (game.input.activePointer.leftButton.isDown && currentSpt.input.pointerOver()) {
                if (plc.sideLine && currentSelectedPlace.turrets == undefined) {
                    currentSpt.alpha = 1;
                    currentSelectedPlace.turrets = plc;
                } else if (currentSelectedPlace.turrets != undefined
                    && (!plc.sideLine || (currentSelectedPlace.turrets.x == 2 && currentSelectedPlace.turrets.y == 2))
                    && currentSelectedPlace.x == undefined && currentSelectedPlace.y == undefined
                    && currentSelectedPlace.turrets.isAdjenct(plc)) {

                    currentSelectedPlace.x = plc.x == currentSelectedPlace.turrets.x ? plc.x : undefined;
                    currentSelectedPlace.y = plc.y == currentSelectedPlace.turrets.y ? plc.y : undefined;
                    if (plc.x == currentSelectedPlace.turrets.x) {
                        for (var k = 0; k < 3; k++) {
                            theField.turrets[plc.x][k].sprite.alpha = 1;
                        }
                    } else if (plc.y == currentSelectedPlace.turrets.y) {
                        for (var k = 0; k < 3; k++) {
                            theField.turrets[k][plc.y].sprite.alpha = 1;
                        }
                    }
                    console.log("x:" + currentSelectedPlace.x + "y:" + currentSelectedPlace.y);
                }
            }
        }
    }
    if(game.input.activePointer.leftButton.isUp){
        currentSelectedPlace.turrets = undefined;
        currentSelectedPlace.x = undefined;
        currentSelectedPlace.y = undefined;

        for(var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                theField.turrets[i][j].sprite.alpha = 0.5;
            }
        }
    }
}
function update() {



    attackField();


}

function render () {


}