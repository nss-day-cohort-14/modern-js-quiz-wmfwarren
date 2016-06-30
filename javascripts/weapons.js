"use strict";

function Weapon(name, damageMin, damageMax, bonusDamageReduction, bonusEvasion){
	this.name = name;
	this.damageMin = damageMin;
	this.damageMax = damageMax;
	this.bonusDamageReduction = bonusDamageReduction;
	this.bonusEvasion = bonusEvasion;
}
/////***Weapons***\\\\\
var ionCannon = new Weapon("ionCannon", 0, 10, 0, -3);
var taser = new Weapon("taser", 4, 4, 0, 3);
var blasterPistol = new Weapon("blasterPistol", 3, 6, 0, 1);
var vibroblade = new Weapon("vibroblade", 5, 10, 1, -6);
var disentigrationRay = new Weapon("disentigrationRay", 3, 13, -1, -10);
var lightsaberCheeseKnife = new Weapon("lightsaberCheeseKnife", 7, 10, 1, -3);

var weaponsArray = [];
weaponsArray.push(ionCannon, taser, blasterPistol, vibroblade, disentigrationRay, lightsaberCheeseKnife);

module.exports = {weaponsArray, ionCannon, taser, blasterPistol, vibroblade, disentigrationRay, lightsaberCheeseKnife};