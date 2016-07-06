/**
 * Created by USER on 6/29/2016.
 */
class Turret extends FieldObject{
    constructor(game, sprite, isSideLine, hp, damage, speed, posX, posY, fieldPosX, fieldPosY){
        super(game, sprite, hp, damage, speed, posX, posY);
        this.x = fieldPosX;
        this.y = fieldPosY;
        this.sprite = sprite;
        this.sideLine = isSideLine;
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