var team1 = [
	{
		name: "B-1 Lancer (General)",
		health: 350,
		attack: Math.ceil(Math.random() * 40 + 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "F-15 Eagle",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "F-15 Eagle",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "F-15 Eagle",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "F-15 Eagle",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "F-15 Eagle",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "F-15 Eagle",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "F-15 Eagle",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "F-15 Eagle",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "F-15 Eagle",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	}
];

var team2 = [
	{
		name: "Tu-160 White Swan (General)",
		health: 350,
		attack: Math.ceil(Math.random() * 40 + 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "Su-35 Flanker-E",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "Su-35 Flanker-E",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "Su-35 Flanker-E",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "Su-35 Flanker-E",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "Su-35 Flanker-E",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "Su-35 Flanker-E",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "Su-35 Flanker-E",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "Su-35 Flanker-E",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	},
	{
		name: "Su-35 Flanker-E",
		health: 100,
		attack: Math.ceil(Math.random() * 10),
		defense: Math.random() * .9,
		critical: Math.random() * .35
	}
];
function hpBars(i) {
	if (team1[i].health <= 100 && team1[i].health > 60) {
		$(".team1unitHP" + i).css("background-color", "green").css("width", "100%");
	}
	if (team1[i].health <= 60 && team1[i].health > 30) {
		$(".team1unitHP" + i).css("background-color", "yellow").css("width", "60%");
	}
	if (team1[i].health <= 30 && team1[i].health > 0) {
		$(".team1unitHP" + i).css("background-color", "red").css("width", "30%");
	}


	if (team2[i].health <= 100 && team2[i].health > 60) {
		$(".team2unitHP" + i).css("background-color", "green").css("width", "100%");
	}
	if (team2[i].health <= 60 && team2[i].health > 30) {
		$(".team2unitHP" + i).css("background-color", "yellow").css("width", "60%");
	}
	if (team2[i].health <= 30 && team2[i].health > 0) {
		$(".team2unitHP" + i).css("background-color", "red").css("width", "30%");
	}

	//Team 1 General HP bar
	if (team1[0].health <= 350 && team1[0].health > 210) {
		$(".team1unitHP0").css("background-color", "green").css("width", "100%");
	}
	if (team1[0].health <= 210 && team1[0].health > 126) {
		$(".team1unitHP0").css("background-color", "yellow").css("width", "60%");
	}
	if (team1[0].health <= 126 && team1[0].health > 0) {
		$(".team1unitHP0").css("background-color", "red").css("width", "30%");
	}

	//Team 2 General HP bar
	if (team2[0].health <= 350 && team2[0].health > 210) {
		$(".team2unitHP0").css("background-color", "green").css("width", "100%");
	}
	if (team2[0].health <= 210 && team2[0].health > 126) {
		$(".team2unitHP0").css("background-color", "yellow").css("width", "60%");
	}
	if (team2[0].health <= 126 && team2[0].health > 0) {
		$(".team2unitHP0").css("background-color", "red").css("width", "30%");
	}

}
function render() {
	//remove negative numbers and replace them with 0
	for (let i = 0; i < team1.length; i++) {
		if (team1[i].health < 0) {
			team1[i].health = 0;
		} else {
			team1[i].defense = Math.random() * .9;
			team1[i].critical = Math.random() * .35;
		}
	}

	//remove negative numbers and replace them with 0
	for (let i = 0; i < team2.length; i++) {
		if (team2[i].health < 0) {
			team2[i].health = 0;
		} else {
			team2[i].defense = Math.random() * .9;
			team2[i].critical = Math.random() * .35;
		}
	}

	//display team 1 health
	var team1Attack = 0;
	var team1Crit = 0;
	var team1CritAvg = 0;
	var team1Dodge = 0;
	var team1DodgeAvg = 0;
	var team1Health = 0;
	for (let i = 0; i < team1.length; i++) {
		if (team1[i].health <= 0) {
			$(".team1Stats" + i).html("<p class='kia'>" + team1[i].name + " was KIA!</p>");  
		} else {
			$(".team1Stats" + i).html("<div class='teamStats'><p class='team1unitName'>"
                + team1[i].name + "</p><p class='team1unitHP" + i + "'>"
                + team1[i].health + "</p><p class='team1unit'>(Attack: "
                + team1[i].attack + ")(Block: "
                + (team1[i].defense * 100).toFixed(0) + "%)(Crit Hit: "
                + (team1[i].critical * 100).toFixed(0) + "%)</p></div");
			// $(".team1unit" + i).html(team1[i].name + " | health: " + team1[i].health + " <br>(Attack: " + team1[i].attack + ")(Block: " + (team1[i].defense * 100).toFixed(0) + "%)(Crit Hit: " + (team1[i].critical * 100).toFixed(0) + "%)");

		}		
		team1Attack = team1Attack + team1[i].attack;
		team1Crit = team1Crit + team1[i].critical;
		team1Dodge = team1Dodge + team1[i].defense;
		team1Health = team1Health + team1[i].health;
        

		hpBars(i);
	}
	team1CritAvg = team1Crit / team1.length;
	team1DodgeAvg = team1Dodge / team1.length;
	$(".tOneTotalAttack").html(team1Attack);
	$(".tOneTotalCrit").html((team1CritAvg * 100).toFixed(0) + "%");
	$(".tOneTotalDodge").html((team1DodgeAvg * 100).toFixed(0) + "%");
	$(".tOneTotalHealth").html(team1Health);

	//display team 2 health
	var team2Attack = 0;
	var team2Crit = 0;
	var team2CritAvg = 0;
	var team2Dodge = 0;
	var team2DodgeAvg = 0;
	var team2Health = 0;
	for (let i = 0; i < team2.length; i++) {
		if (team2[i].health <= 0) {            
			$(".team2Stats" + i).html("<p class='kia'>" + team2[i].name + " was KIA!</p>");            
		} else {
			$(".team2Stats" + i).html("<div class='teamStats'><p class='team2unitName'>"
                + team2[i].name + "</p><p class='team2unitHP" + i + "'>"
                + team2[i].health + "</p><p class='team2unit'>(Attack: "
                + team2[i].attack + ")(Block: "
                + (team2[i].defense * 100).toFixed(0) + "%)(Crit Hit: "
                + (team2[i].critical * 100).toFixed(0) + "%)</p></div");
			// $(".team2unit" + i).html(team2[i].name + " | health: " + team2[i].health + " <br>(Attack: " + team2[i].attack + ")(Block: " + (team2[i].defense * 100).toFixed(0) + "%)(Crit Hit: " + (team2[i].critical * 100).toFixed(0) + "%)");
		}
		team2Attack = team2Attack + team2[i].attack;
		team2Crit = team2Crit + team2[i].critical;
		team2Dodge = team2Dodge + team2[i].defense;
		team2Health = team2Health + team2[i].health;
		hpBars(i);
	}
	team2CritAvg = team2Crit / team2.length;
	team2DodgeAvg = team2Dodge / team2.length;
	$(".tTwoTotalAttack").html(team2Attack);
	$(".tTwoTotalCrit").html((team2CritAvg * 100).toFixed(0) + "%");
	$(".tTwoTotalDodge").html((team2DodgeAvg * 100).toFixed(0) + "%");
	$(".tTwoTotalHealth").html(team2Health);


}

render();
//fight engine
$(".fight").click(function (event) {
	event.preventDefault();
	// loop through team 1's units
	for (let i = 0; i < team1.length; i++) {
		// generate rolls for both teams
		let t1DiceRoll = Math.ceil(Math.random() * 6);
		let t2DiceRoll = Math.ceil(Math.random() * 6);

		// checks to makes sure both units have health
		if (team1[i].health > 0 && team2[i].health > 0) {
			// checks to see if team1 attacks, defender does not attack
			if (t1DiceRoll > t2DiceRoll) {
				if (Math.random() < team2[i].defense) {
					// team 2 defends attack
					team2[i].health = team2[i].health - 1;
				} else {
					if (Math.random() < team2[i].critical) {
						// team 1 unit attacks team 2 unit with critical hit
						team2[i].health = team2[i].health - (team1[i].attack + 25);
					} else {
						// team 1 unit attacks team 2 unit
						team2[i].health = team2[i].health - team1[i].attack;
					}
				}
				render();
				// checks to see if team2 attacks, defender does not attack
			} else {
				if (Math.random() < team1[i].defense) {
					//team 1 defends attack
					team1[i].health = team1[i].health - 1;
				} else {
					if (Math.random() < team1[i].critical) {
						//team 2 unit attacks team 1 unit with critical attack
						team1[i].health = team1[i].health - (team2[i].attack + 25);
					} else {
						//team 2 unit attack team 1 unit
						team1[i].health = team1[i].health - team2[i].attack;
					}
				}
			}
			render();
			// check if team 1 unit has health and team 2 has no health
		} else if (team1[i].health > 0 && team2[i].health <= 0) {
			// find opponent that has health
			for (let b = 0; b < team2.length; b++) {
				if (team2[b].health > 0) {
					// if team 1 roll is greater than team 2, team 1 attacks team 2
					if (t1DiceRoll > t2DiceRoll) {
						if (Math.random() < team2[i].defense) {
							// team 2 defends attack
							team2[i].health = team2[i].health - 1;
						} else {
							if (Math.random() < team2[i].critical) {
								// team 1 unit attacks team 2 unit with critical hit
								team2[i].health = team2[i].health - (team1[i].attack + 25);
							} else {
								// team 1 unit attacks team 2 unit
								team2[i].health = team2[i].health - team1[i].attack;
							}
						}
						render();
					} else {
						if (Math.random() < team1[i].defense) {
							//team 1 defends attack
							team1[i].health = team1[i].health - 1;
						} else {
							if (Math.random() < team1[i].critical) {
								//team 2 unit attacks team 1 unit with critical attack
								team1[i].health = team1[i].health - (team2[i].attack + 25);
							} else {
								//team 2 unit attack team 1 unit
								team1[i].health = team1[i].health - team2[i].attack;
							}
						}
					}
					render();
				}
			}
			// check if team 2 unit has health and team 1 has no health 
		} else if (team1[i].health <= 0 && team2[i].health > 0) {
			// find opponent that has health
			for (let c = 0; c < team1.length; c++) {
				if (team1[c].health > 0) {
					// if team 1 roll is greater than team 2, team 1 attacks team 2
					if (t2DiceRoll > t1DiceRoll) {
						if (Math.random() < team1[i].defense) {
							//team 1 defends attack
							team1[i].health = team1[i].health - 1;
						} else {
							if (Math.random() < team1[i].critical) {
								//team 2 unit attacks team 1 unit with critical attack
								team1[i].health = team1[i].health - (team2[i].attack + 25);
							} else {
								//team 2 unit attack team 1 unit
								team1[i].health = team1[i].health - team2[i].attack;
							}
						}
						render();
						// display health of team 1 unit

					} else {
						if (Math.random() < team2[i].defense) {
							// team 2 defends attack
							team2[i].health = team2[i].health - 1;
						} else {
							if (Math.random() < team2[i].critical) {
								// team 1 unit attacks team 2 unit with critical hit
								team2[i].health = team2[i].health - (team1[i].attack + 25);
							} else {
								// team 1 unit attacks team 2 unit
								team2[i].health = team2[i].health - team1[i].attack;
							}
						}
						// display health of team 2 unit
					}
					render();
				}
			}
		}
	}

}); 
