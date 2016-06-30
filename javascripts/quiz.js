"use strict";

var droids = require("./droids.js");
var weapons = require("./weapons.js");
console.log(droids);

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
			$(".log").prepend(`<p>Player One's droid, ${playerOneDroid.name}, has ${playerOneDroid.hitPoints} starting HP</p>`);
			console.log("droid 1", playerOneDroid );
		}
	}
});
$("#droid__2").change(function(event){ //droid player 2 selection
	playerTwoDroid = $(this).val(); //right now this is a string
	for(let i = 0; i < droids.droidArray.length; i++){
		let currentDroid = droids.droidArray[i];
		if(currentDroid.name === playerTwoDroid){
			playerTwoDroid = currentDroid; //now this is an object
			$(".log").prepend(`<p>Player Two's droid, ${playerTwoDroid.name}, has ${playerTwoDroid.hitPoints} starting HP</p>`);
			console.log("droid 1", playerTwoDroid );
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

				console.log("droid with weapon", player );
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
	if(hitOrMissAttack(attacker) && evade(defender)){
		dealDamage(attacker, defender);
		$(".log").prepend(`<p>${defender.name} now has ${defender.hitPoints} after a BRUTAL attack by ${attacker.name}</p>`);
	} else {
		$(".log").prepend(`<p>That's a miss!</p>`);
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
	defender.hitPoints -= damageAmount;
	return defender;
}




