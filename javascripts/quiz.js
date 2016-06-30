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
