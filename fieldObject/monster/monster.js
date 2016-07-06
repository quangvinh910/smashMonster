
class MonsterSide{
    constructor(game){
        this.monsters = [];
        for (var i = 0; i < 3; i++){
            var xPos = 500*i + 100;
            var yPos = 1800;
            var spr = game.add.sprite(xPos, yPos, 'b_pockitz');
            this.monsters[i] = new Monster(game, spr,  20000, 1000, 10,  xPos, yPos, i);
        }
    }
}

class Monster extends FieldObject{
    //insert Skill to monster
    constructor(game, sprite, hp, damage, speed, posX, posY, fieldPos){
        super(game, sprite, hp, damage, speed, posX, posY);
        this.fieldPos = fieldPos;
    }

}
