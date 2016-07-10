// var game = new Phaser.Game(2400, 3600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });
Smash = {
    theField : undefined,
    monsterSide : undefined,
    currentSelectedPlace : {
        turrets : undefined,
        x : undefined,
        y : undefined,
        isEmpty : function(){
            return !x && !y && !place;
        }
    },
    spriteSize : 250,
    allFieldObject : []
}
Smash.Play = function (game) {
    //do nothing for now
}

Smash.Play.prototype = {
    preload : function() {
        this.game.load.image('b_turret', 'data/b_turret.png');
        this.game.load.image('b_pockitz', 'data/b_pockitz.png');
    },


    create : function(game) {
        Smash.theField = new Field(this.game);
        Smash.monsterSide = new MonsterSide(this.game);
        Smash.allFieldObject = Smash.theField.turretArray.concat(Smash.monsterSide.monsters);
        this.runTimmer();
    },


    update : function (){


        // attackField();


    },

    render : function() {


    },

    runTimmer : function(){
        Smash.allFieldObject.sort(function(obj1, obj2){
            var time1 = (1- obj1.currentTimer)/obj1.currentSpeed;
            var time2 = (1- obj2.currentTimer)/obj2.currentSpeed;
            if(time1 == time2) {
                if(obj1.speed = obj2.speed) {
                    if(obj1 instanceof Turret && obj2 instanceof Monster){
                        return 1;
                    } else if(obj2 instanceof Turret && obj1 instanceof Monster){
                        return -1;
                    } else if(obj1 instanceof Monster && obj2 instanceof Monster){
                        return obj1.fieldPos - obj2.fieldPos;
                    } else{
                        if(obj1.y == obj2.y){
                            return obj1.x - obj2.x;
                        } else {
                            return obj1.y - obj2.y;
                        }
                    }
                } else {
                    return obj1.speed - obj2.speed;
                }
            } else {
                return time1 - time2;
            }
        });
        var fastestObj = Smash.allFieldObject[0];
        var fastestObjTime = (1- fastestObj.currentTimer)/fastestObj.currentSpeed;
        for(var i = 1; i < Smash.allFieldObject.length; i++){
            Smash.allFieldObject[i].currentTimer = Smash.allFieldObject[i].currentTimer +  fastestObjTime * Smash.allFieldObject[i].currentSpeed;
            Smash.allFieldObject[i].runTimer();
        }
    }
}
