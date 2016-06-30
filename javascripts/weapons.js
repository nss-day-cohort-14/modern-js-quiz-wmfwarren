"use strict";

function Weapon(damageMin, damageMax, bonusDamageReduction, bonusEvasion){
	this.damageMin = damageMin;
	this.damageMax = damageMax;
	this.bonusDamageReduction = bonusDamageReduction;
	this.bonusEvasion = bonusEvasion;
}
/////***Weapons***\\\\\
var ionCannon = new Weapon(0, 10, 0, -3);
var taser = new Weapon(4, 4, 0, 3);
var blasterPistol = new Weapon(3, 6, 0, 1);
var vibroblade = new Weapon(5, 10, 1, -6);
var disentigrationRay = new Weapon(3, 13, -1, -10);
var lightsaberCheeseKnife = new Weapon(7, 10, 1, -3);

module.exports = {ionCannon, taser, blasterPistol, vibroblade, disentigrationRay, lightsaberCheeseKnife};