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
			console.log("droid 1", playerTwoDroid );
		}
	}
});
	///*Weapon selection*\\\
$("#weapon__1").change((event) => {
	weaponSelector(event, 1);
});
$("#weapon__2").change((event) => {
	weaponSelector(event, 2);
});

function weaponSelector(event, player){
	player === 1 ? player = playerOneDroid : player = playerTwoDroid; //set the player object based on the int provided
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



