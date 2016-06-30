(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

/////***Instances of Droids***\\\\\

var HK_47 = new HKUnit();
var HK_51 = new HKUnit();
var R2_D2 = new RTwoUnit();
var R2_T9 = new RTwoUnit();
var BB_8 = new BBUnit();
var BB_11 = new BBUnit();

HK_47.name = "HK-47";
HK_51.name = "HK-51";
R2_D2.name = "R2-D2";
R2_T9.name = "R2-T9";
BB_8.name = "BB-8";
BB_11.name = "BB-11";

/////***Getters***\\\\\
var getHK47 = function(){
	return HK_47;
};
var getHK51 = function(){
	return HK_51;
};
var getR2D2 = function(){
	return R2_D2;
};
var getR2T9 = function(){
	return R2_T9;
};
var getBB8 = function(){
	return BB_8;
};
var getBB11 = function(){
	return BB_11;
};

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
//evasion chance in integer %
HK_51.evasionChance = 1;
HK_47.evasionChance = 1;
R2_D2.evasionChance = 10;
R2_T9.evasionChance = 10;
BB_8.evasionChance = 20;
BB_11.evasionChance = 20;
//miss chance in integer %
HK_51.missChance = 0;
HK_47.missChance = 5;
R2_D2.missChance = 10;
R2_T9.missChance = 10;
BB_8.missChance = 15;
BB_11.missChance = 15;
//Damage reduction
HK_51.damageReduction = 1;
HK_47.damageReduction = 0;
R2_D2.damageReduction = 5;
R2_T9.damageReduction = 5;
BB_8.damageReduction = 3;
BB_11.damageReduction = 3;
//the base weapon
HK_51.weapon = weapons.ionCannon;
HK_47.weapon = weapons.disentigrationRay;
R2_D2.weapon = weapons.taser;
R2_T9.weapon = weapons.vibroblade;
BB_8.weapon = weapons.lightsaberCheeseKnife;
BB_11.weapon = weapons.taser;

var droidArray = [];
droidArray.push(HK_47, HK_51, R2_D2, R2_T9, BB_11, BB_8); 
module.exports = {droidArray, getBB11, getBB8, getHK51, getHK47, getR2T9, getR2D2};

},{"./weapons.js":3}],2:[function(require,module,exports){
"use strict";

var droids = require("./droids.js");
console.log(droids);

var playerOneDroid = null;
var playerTwoDroid = null;
var playerOneWeapon = null;
var playerTwoWeapon = null;
var currentPlayerOneHitPoints = null;
var currentPlayerTwoHitPoints = null;

/////***Droid and weapon selection listeners***\\\\\
$("#droid__1").change(function(event){
	playerOneDroid = $(this).val(); //right now this is a string
	for(let i = 0; i < droids.droidArray.length; i++){
		let currentDroid = droids.droidArray[i];
		if(currentDroid.name === playerOneDroid){
			playerOneDroid = currentDroid; //now this is an object
			 console.log("droid 1", playerOneDroid );
		}
	}
});
$("#droid__2").change(function(event){
	playerTwoDroid = $(this).val(); //right now this is a string
	for(let i = 0; i < droids.droidArray.length; i++){
		let currentDroid = droids.droidArray[i];
		if(currentDroid.name === playerTwoDroid){
			playerTwoDroid = currentDroid; //now this is an object
			console.log("droid 1", playerTwoDroid );
		}
	}
});

},{"./droids.js":1}],3:[function(require,module,exports){
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
},{}]},{},[2])


//# sourceMappingURL=bundle.js.map
