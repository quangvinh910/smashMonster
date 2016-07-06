class Skill {
    constructor(target, damagePercent, healthPercent, coolDown, skillCallbackFunction){
        this.target = target;
        this.damagePercent = damagePercent;
        this.healthPercent = healthPercent;
        this.coolDown = coolDown;
        this.currentCooldown = 0
        this.skillCallbackFunction = skillCallbackFunction;
    }

    select(){
        //check targetAllow to enable selection.
        skillCallbackFunc = this.callbackFunction;
    }
}