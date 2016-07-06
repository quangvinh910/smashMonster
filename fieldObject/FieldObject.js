class FieldObject{
    constructor(game, sprite, hp, damage, speed, posX, posY) {

        this.sprite = sprite;
        
        this.timer = new PieProgress(game, posX, posY, 32);
        game.world.add(this.timer);
        game.add.tween(this.timer).to({progress: 1}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, Infinity, false);
        
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
}