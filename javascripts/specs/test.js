"use strict";

const test = require("tape");
const droids = require("../droids.js");
const weps = require("../weapons.js");
const quiz = require("../quiz.js");

for (let i = 0; i < droids.droidArray.length ; i++){
	test("Droids: ", function (t) {
		let newDroid = droids.droidArray[0];

		t.equal(newDroid.alive, false, `${droids.droidArray[i].name} should be false.`);
		t.notEqual(newDroid.hitPoints, undefined, `${droids.droidArray[i].name} shouldn't have undefined HP.` );
		t.notEqual(newDroid.missChance, undefined, `${droids.droidArray[i].name} shouldn't have undefined Miss Chance.` );
		t.notEqual(newDroid.damageReduction, undefined, `${droids.droidArray[i].name} shouldn't have undefined DR.` );
		t.notEqual(newDroid.evasionChance, undefined, `${droids.droidArray[i].name} shouldn't have undefined evasionChance.` );

		t.equal(typeof newDroid.name, "string", `${droids.droidArray[i].name} should have a name.`);
		t.equal(typeof newDroid.tagLine, "string", `${droids.droidArray[i].name} should have a tag line.`);
		t.equal(typeof newDroid.description, "string", `${droids.droidArray[i].name} should have a description.`);
		t.end();
	});
}

for (let i = 0; i < weps.weaponsArray.length; i++ ){
	test("Weapons: ", function(t){
	let newWep = weps.weaponsArray[0];

	t.equal(typeof newWep.name, "string", ` ${weps.weaponsArray[i].name} should have a name.` )
	t.equal(typeof newWep.damageMin, "number", ` ${weps.weaponsArray[i].name} should have a min damage.` )
	t.equal(typeof newWep.damageMax, "number", ` ${weps.weaponsArray[i].name} should have a max damage.` )
	t.equal(typeof newWep.bonusDamageReduction,  "number", ` ${weps.weaponsArray[i].name} should have a damage reduction.` )
	t.equal(typeof newWep.bonusEvasion, "number", ` ${weps.weaponsArray[i].name} should have an evasion chance.` )

	t.end();
	});
}


