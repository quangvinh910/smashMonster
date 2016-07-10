class FieldObject{
    constructor(game, sprite, hp, damage, speed, posX, posY) {

        this.sprite = sprite;
        this.game = game;
        
        this.timer = new PieProgress(game, posX, posY, 32);
        game.world.add(this.timer);
        // game.add.tween(this.timer).to({progress: 1}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
        
        this.currentTimer = 0;
        this.hp = hp;
        this.currentHp = hp;
        this.damage = damage;
        this.currentDamage = damage
        this.speed = speed;
        this.currentSpeed = speed
        this.slowRemain = 0;
        this.status = [];
    }
    
    runTimer(){
        this.game.add.tween(this.timer).to({progress: this.currentTimer}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 0, false);
    }
}