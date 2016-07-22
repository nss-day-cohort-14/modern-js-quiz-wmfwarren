(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var droids = require("./droids.js");
var weapons = require("./weapons.js");


$("#playerOneName").keyup((event) => {
	$("#playerOneNameTag").html($("#playerOneName").val());
});
$("#playerTwoName").keyup((event) => {
	$("#playerTwoNameTag").html($("#playerTwoName").val());
});


function populateDroids(playerNum){ //add droid option values
	for(let i = 0; i < droids.droidArray.length; i++){
		let currentDroid = droids.droidArray[i];
		$(`#droid__${playerNum}`).append(`<option value="${currentDroid.name}">${currentDroid.name}</option>`);
	}
}

function populateWeapons(playerNum){ //add weapons to drop down
	for(let i = 0; i < weapons.weaponsArray.length; i++){
		let currentWeapon = weapons.weaponsArray[i];
		let currentWeaponValue = currentWeapon.name;
		let currentWeaponName = currentWeapon.name;
		currentWeaponName = currentWeaponName.charAt(0).toUpperCase() + currentWeaponName.slice(1);
		currentWeaponName = currentWeaponName.split(/(?=[A-Z])/).join(" "); 
		$(`#weapon__${playerNum}`).append(`<option value="${currentWeaponValue}">${currentWeaponName}</option>`);
	}
}

populateDroids(1);
populateDroids(2);
populateWeapons(1);
populateWeapons(2);

module.exports = {populateDroids, populateWeapons};
},{"./droids.js":2,"./weapons.js":4}],2:[function(require,module,exports){
"use strict";

var weapons = require("./weapons.js");

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
R2_D2.damageReduction = 3;
R2_T9.damageReduction = 3;
BB_8.damageReduction = 2;
BB_11.damageReduction = 2;
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

},{"./weapons.js":4}],3:[function(require,module,exports){
"use strict";

var droids = require("./droids.js");
var weapons = require("./weapons.js");
var DOMGenerator = require("./DOMGenerator.js");

var playerOneDroid = null;
var playerTwoDroid = null;
var currentPlayerOneHitPoints = null;
var currentPlayerTwoHitPoints = null;

/////***Droid and weapon selection listeners***\\\\\
$("#droid__1").change(function(event){ //droid player 1 selection
	playerOneDroid = $(this).val(); //right now this is a string
	for(let i = 0; i < droids.droidArray.length; i++){
		let currentDroid = droids.droidArray[i];
		if(currentDroid.name === playerOneDroid){
			playerOneDroid = currentDroid; //now this is an object
			$(".log").prepend(`<p class="alert">Player One's droid, ${playerOneDroid.name}, has ${playerOneDroid.hitPoints} starting HP</p>`);
			$(".log").prepend(`<p>${playerOneDroid.description}</p>`);
		}
	}
});
$("#droid__2").change(function(event){ //droid player 2 selection
	playerTwoDroid = $(this).val(); //right now this is a string
	for(let i = 0; i < droids.droidArray.length; i++){
		let currentDroid = droids.droidArray[i];
		if(currentDroid.name === playerTwoDroid){
			playerTwoDroid = currentDroid; //now this is an object
			$(".log").prepend(`<p class="alert">Player Two's droid, ${playerTwoDroid.name}, has ${playerTwoDroid.hitPoints} starting HP</p>`);
			$(".log").prepend(`<p>${playerTwoDroid.description}</p>`);
		}
	}
});
	///*Weapon selection*\\\
$("#weapon__1").change((event) => {
	weaponSelector(event, playerOneDroid);
});
$("#weapon__2").change((event) => {
	weaponSelector(event, playerTwoDroid);
});
	///*Weapon select function*\\\
function weaponSelector(event, player){
	if(event.target.value !== "default"){
		for(let i = 0; i < weapons.weaponsArray.length; i++){
			let currentWeapon = weapons.weaponsArray[i];
			if(event.target.value === currentWeapon.name){
				player.weapon = currentWeapon;
			}
		}
	}
}

/////***Attack Button Listener***\\\\\

$("#attack__1").click((event) => {
	attackOpponent(event, playerOneDroid, playerTwoDroid);
});
$("#attack__2").click((event) => {
	attackOpponent(event, playerTwoDroid, playerOneDroid);
});

	///*Attack functions*\\\
function attackOpponent(event, attacker, defender){
	if(initializer()){
		if(hitOrMissAttack(attacker) && evade(defender)){
			dealDamage(attacker, defender);
			$(".log").prepend(`<p>${defender.name} now has ${defender.hitPoints} after a BRUTAL attack by ${attacker.name}'s ${attacker.weapon.name}.</p>`);
		} else {
			$(".log").prepend(`<p class="warning">That's a miss!</p>`);
		}
	}
}
	///*Helper attack functions*\\\
function hitOrMissAttack(attacker){
	var missChance = attacker.missChance;
	var randomNum = Math.floor(Math.random() * (100) + 1 );
	if(randomNum > missChance){
		return true; //the hit hits
	} else {
		return false; //the hit missed
	}
}

function evade(defender){
	var evadeChance = defender.evasionChance + defender.weapon.bonusEvasion;
	var randomNum = Math.floor(Math.random() * (100) + 1 );
	if(randomNum > evadeChance){
		return true; //the hit hits
	} else {
		return false; //the hit missed
	}
}

function dealDamage(attacker, defender){
	var damageAmount = Math.floor(Math.random() * (attacker.weapon.damageMax - attacker.weapon.damageMin) + attacker.weapon.damageMin);
	var armor = (defender.damageReduction + defender.weapon.bonusDamageReduction);
	if (damageAmount -  armor < 0){ //if the damage would yield a negative value floor it at 1
		defender.hitPoints -= 1;
	} else {
		defender.hitPoints -= damageAmount - armor;
	}
	if(defender.hitPoints < 1){
		$(".log").prepend(`<h2 class="bold alert">${attacker.name} Wins!</h2>
			<img id="eTuBrute" src="../imgs/hesDeadJim.jpg">`);
		$("#attack__1").prop("disabled", true); //disable buttons to end the combat
		$("#attack__2").prop("disabled", true);
		$("#taunt__1").prop("disabled", true);
		$("#taunt__2").prop("disabled", true);
		$("#battle").prop("disabled", true);

	}
	return defender;
}

function initializer(){ //this function checks to make sure the weapons and droids are selected before an attack is made
	if($("#droid__1").val() === "none" || $("#weapon__1").val() === "default"){
		$(".log").prepend(`<p class="warning">Please select a droid and weapon for Player 1</p>`);
		return false;
	} else if ($("#droid__2").val() === "none" || $("#weapon__2").val() === "default"){
		$(".log").prepend(`<p class="warning">Please select a droid and weapon for Player 2</p>`);
		return false;
	} else {
		return true;
	}
}

/////***Additional events***\\\\\
	///*Taunting*\\\
$("#taunt__1").click((event) => {
	tauntOpponent(event, playerOneDroid);
});
$("#taunt__2").click((event) => {
	tauntOpponent(event, playerTwoDroid);
});

	///*Taunt function*\\\
function tauntOpponent(event, playerDroid){
	if(initializer()){
		$(".log").prepend(`<p class="bold">${playerDroid.tagLine}</p>`);
	}
}

	///*Run and automated fight*\\
$("#battle").click((event) => {
	quickBattle(playerOneDroid, playerTwoDroid);
});
	///*Quick Battle Function*\\\
function quickBattle(playerOne, playerTwo){
	if(initializer()){
		while(playerOne.hitPoints > 0 && playerTwo.hitPoints > 0){
			attackOpponent(null, playerOne, playerTwo);
			if(playerTwoDroid.hitPoints > 0){ //do not execute the line below if you are dead
				attackOpponent(null, playerTwo, playerOne);
			}
		}
	}
}

},{"./DOMGenerator.js":1,"./droids.js":2,"./weapons.js":4}],4:[function(require,module,exports){
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
},{}]},{},[3])


//# sourceMappingURL=bundle.js.map
