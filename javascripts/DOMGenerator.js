"use strict";

var droids = require("./droids.js");
var weapons = require("./weapons.js");

function populateDroids(playerNum){
	for(let i = 0; i < droids.droidArray.length; i++){
		let currentDroid = droids.droidArray[i];
		$(`#droid__${playerNum}`).append(`<option value="${currentDroid.name}">${currentDroid.name}</option>`);
	}
}

function populateWeapons(playerNum){
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