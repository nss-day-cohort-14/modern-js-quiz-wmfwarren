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
	defender.hitPoints -= damageAmount;
	if(defender.hitPoints < 1){
		$(".log").prepend(`<img id="eTuBrute" src="../imgs/hesDeadJim.jpg">`);
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
$("#taunt__1").click((event) => {
	tauntOpponent(event, playerOneDroid);
});
$("#taunt__2").click((event) => {
	tauntOpponent(event, playerTwoDroid);
});

	///*Taunt function*\\\
function tauntOpponent(event, playerDroid){
	$(".log").prepend(`<p class="bold">${playerDroid.tagLine}</p>`);
}


