"use strict";

var weapons = require("./weapons.js");
console.log("weps", weapons );
function Droid() {
	this.alive = false;
}
/////***Types of Droids***\\\\\
function HKUnit() {
	this.type = "Hunter-Killer";
}
HKUnit.prototype = new Droid();

function RTwoUnit() {
	this.type = "Astromech";
}
RTwoUnit.prototype = new Droid();

function BBUnit() {
	this.type = "Astromech";
}
BBUnit.prototype = new Droid();

function ProtocolUnit(){
	this.type = "Protocol";
}
ProtocolUnit.prototype = new Droid();
/////***Instances of Droids***\\\\\

var HK_47 = new HKUnit();
var HK_51 = new HKUnit();
var R2_D2 = new RTwoUnit();
var R2_T9 = new RTwoUnit();
var BB_8 = new BBUnit();
var BB_11 = new BBUnit();
var C3_P0 = new ProtocolUnit();

HK_47.name = "HK-47";
HK_51.name = "HK-51";
R2_D2.name = "R2-D2";
R2_T9.name = "R2-T9";
BB_8.name = "BB-8";
BB_11.name = "BB-11";
C3_P0.name = "C3-P0";

HK_47.description = "This is the original Old Republic Killing Machine! Great choice meatbag!";
HK_51.description = "A tougher mass producer model of the model 47. No personality, tough.";
R2_D2.description = "Memory wipe? Not for this droid with the institutional memory of a god.";
R2_T9.description = "This one is purple....";
BB_8.description = "This lil' dude is the ultimate in gyroscopic-stabilization! Fast and furious.";
BB_11.description = "Don't let the name fool you, this knock-off BB-8 is a cut below the rest!";
C3_P0.description = "So you think you can dodge? This droid has seen some stuff and some things but rarely gets shot!";

HK_47.tagLine = "Would you like me to vaporize that, meatbag?";
HK_51.tagLine = "Yes, Master.";
R2_D2.tagLine = "Beep bleep beep boop!!!";
R2_T9.tagLine = "Blop...";
BB_8.tagLine = "Wheeeeee whirrrrrrrr beep bop!";
BB_11.tagLine = "Blip blop bup, boop!";
C3_P0.tagLine = "Oh my!";

/////***Adding properties to droid instances***\\\\\

var HitPointGenerator = function(min, max) {
	 return Math.floor(Math.random() * (max - min + 1)) + min;
};

HK_47.hitPoints = HitPointGenerator(75, 100);
HK_51.hitPoints = HitPointGenerator(85, 110);
R2_T9.hitPoints = HitPointGenerator(90, 110);
R2_D2.hitPoints = HitPointGenerator(90, 100);
BB_8.hitPoints = HitPointGenerator(70, 95);
BB_11.hitPoints = HitPointGenerator(75, 100);
C3_P0.hitPoints = HitPointGenerator(30, 60);
//evasion chance in integer %
HK_51.evasionChance = 1;
HK_47.evasionChance = 1;
R2_D2.evasionChance = 10;
R2_T9.evasionChance = 10;
BB_8.evasionChance = 20;
BB_11.evasionChance = 20;
C3_P0.evasionChance = 60;
//miss chance in integer %
HK_51.missChance = 0;
HK_47.missChance = 5;
R2_D2.missChance = 10;
R2_T9.missChance = 10;
BB_8.missChance = 15;
BB_11.missChance = 15;
C3_P0.missChance = 25;
//Damage reduction
HK_51.damageReduction = 1;
HK_47.damageReduction = 0;
R2_D2.damageReduction = 5;
R2_T9.damageReduction = 5;
BB_8.damageReduction = 3;
BB_11.damageReduction = 3;
C3_P0.damageReduction = 0;
//the base weapon
HK_51.weapon = weapons.ionCannon;
HK_47.weapon = weapons.disentigrationRay;
R2_D2.weapon = weapons.taser;
R2_T9.weapon = weapons.vibroblade;
BB_8.weapon = weapons.lightsaberCheeseKnife;
BB_11.weapon = weapons.taser;
C3_P0.weapon = weapons.taser;

var droidArray = [];
droidArray.push(HK_47, HK_51, R2_D2, R2_T9, BB_11, BB_8, C3_P0); 
module.exports = {droidArray};
