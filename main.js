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
    spriteSize : 300
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

    },


    update : function (){


        // attackField();


    },

    render : function() {


    }
}
