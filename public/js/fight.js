// we used browserify so we could use node packages on the front end
var Roll = require('roll'),
  roll = new Roll();

var planes = [
  {
    'UID': 1,
    'name': 'Su-35 Flanker-E',
    'img': '/img/su-35.jpg',
    'healthMax': 100,
    'health': 100,
    'attackValueMax': 10,
    'attackValueMin': 1,
    'attack': Math.ceil(Math.random() * 10),
    'defenseValueMax': .35,
    'defenseValueMin': .5,
    'defense': Math.random() * .35,
    'criticalValue': .35,
    'critical': Math.random() * .35
  },
  {
    'UID': 2,
    'name': 'F-117 Nighthawk',
    'img': '/img/stealth-fighter.jpg',
    'healthMax': 100,
    'health': 100,
    'attackValueMax': 5,
    'attackValueMin': 1,
    'attack': Math.ceil(Math.random() * 5),
    'defenseValueMax': .8,
    'defenseValueMin': .5,
    'defense': Math.random() * .80,
    'criticalValue': .15,
    'critical': Math.random() * .15
  },
  {
    'UID': 3,
    'name': 'F-15 Eagle',
    'img': '/img/Ffifteen.jpg',
    'healthMax': 100, 
    'health': 100,
    'attackValueMax': 12,
    'attackValueMin': 8,
    'attack': Math.ceil(Math.random() * 12),
    'defenseValueMax': .3,
    'defenseValueMin': .1,
    'defense': Math.random() * .30,
    'criticalValue': .4,
    'critical': Math.random() * .40
  },
  {
    'UID': 4,
    'name': 'F-22 Raptor',
    'img': '/img/f-22.jpg',
    'healthMax': 100,
    'health': 100,
    'attackValueMax': 15,
    'attackValueMin': 10,
    'attack': Math.ceil(Math.random() * 15),
    'defenseValueMax': .9,
    'defenseValueMin': .6,
    'defense': Math.random() * .90,
    'criticalValue': .15,
    'critical': Math.random() * .15
  },
  {
    'UID': 5,
    'name': 'Su-57 PAK FA',
    'img': '/img/su-57.jpg',
    'healthMax': 100,
    'health': 100,
    'attackValueMax': 13,
    'attackValueMin': 10,
    'attack': Math.ceil(Math.random() * 13),
    'defenseValueMax': .85,
    'defenseValueMin': .6,
    'defense': Math.random() * .85,
    'criticalValue': .25,
    'critical': Math.random() * .25
  },
  {
    'UID': 6,
    'name': 'Mig-35 Fulcrum',
    'img': '/img/mig35.jpg',
    'healthMax': 100,
    'health': 100,
    'attackValueMax': 10,
    'attackValueMin': 1,
    'attack': Math.ceil(Math.random() * 10),
    'defenseValueMax': .45,
    'defenseValueMin': .2,
    'defense': Math.random() * .45,
    'criticalValue': .35,
    'critical': Math.random() * .35
  },
  {
    'UID': 7,
    'name': 'Su-27 Flanker',
    'img': '/img/su27.jpg',
    'healthMax': 100,
    'health': 100,
    'attackValueMax': 8,
    'attackValueMin': 1,
    'attack': Math.ceil(Math.random() * 8),
    'defenseValueMax': .3,
    'defenseValueMin': .1,
    'defense': Math.random() * .30,
    'criticalValue': .1,
    'critical': Math.random() * .10
  },
  {
    'UID': 8,
    'name': 'S-400 Triumph',
    'img': '/img/s400.jpg',
    'healthMax': 30,
    'health': 30,
    'attackValueMax': 50,
    'attackValueMin': 40,
    'attack': Math.ceil(Math.random() * 50 + 40),
    'defenseValueMax': .15,
    'defenseValueMin': .1,
    'defense': Math.random() * .15,
    'criticalValue': .8,
    'critical': Math.random() * .80
  },
  {
    'UID': 9,
    'name': 'MIM-104 Patriot',
    'img': '/img/Patriot.jpg',
    'healthMax': 35,
    'health': 35,
    'attackValueMax': 60,
    'attackValueMin': 40,
    'attack': Math.ceil(Math.random() * 60 + 40),
    'defenseValueMax': .5,
    'defenseValueMin': .1,
    'defense': Math.random() * .5,
    'criticalValue': .85,
    'critical': Math.random() * .85
  },
  {
    'UID': 10,
    'name': 'GF13-017NJII God Gundam',
    'img': '/img/godGundum.jpg',
    'healthMax': 500,
    'health': 500,
    'attackValueMax': 85,
    'attackValueMin': 65,
    'attack': Math.ceil(Math.random() * 85),
    'defenseValueMax': .75,
    'defenseValueMin': .4,
    'defense': Math.random() * .85 + .5,
    'criticalValue': .35,
    'critical': Math.random() * .35
  },
  {
    'UID': 11,
    'name': 'JDG-00X Devil Gundam',
    'img': '/img/DevilGundam_profile.png',
    'healthMax': 666,
    'health': 666,
    'attackValueMax': 205,
    'attackValueMin': 75,
    'attack': Math.ceil(Math.random() * 205),
    'defenseValueMax': .55,
    'defenseValueMin': .35,
    'defense': Math.random() * .55 + .35,
    'criticalValue': .5,
    'critical': Math.random() * .5
  },
  {
    'UID': 12,
    'name': 'SR-71 Blackbird',
    'img': '/img/sr71.jpg',
    'healthMax': 200,
    'health': 200,
    'attackValueMax': 5,
    'attackValueMin': 1,
    'attack': Math.ceil(Math.random() * 5),
    'defenseValueMax': .9,
    'defenseValueMin': .6,
    'defense': Math.random() * .90,
    'criticalValue': .15,
    'critical': Math.random() * .15
  },
  {
    'UID': 13,
    'name': 'Death Star',
    'img': '/img/deathstar.jpg',
    'healthMax': 10000,
    'health': 10000,
    'attackValueMax': 125,
    'attackValueMin': 75,
    'attack': Math.ceil(Math.random() * 125 + 75),
    'defenseValueMax': .0,
    'defenseValueMin': .0,
    'defense': Math.random() * .0,
    'criticalValue': .1,
    'critical': Math.random() * .10
  }
]
//Psuedo Code
// grab data from squadrons table using ajax
// loop through data and render a list in our html using jQuery
// grab the selection from the list .val()
// match plane IDs to IDS in plane array, create new array for fight engine
// render plane data and image in fight screen
// fight
// reset after match is over
var team1Choice;
var team2Choice;
var team1b = [];
var team2b = [];
var team1 = [];
var team2 = [];

function getPlanes1() {
  team1b = [];
  team1 = [];
  fetch("/api/planes")
    .then(function (response) {
      response.json().then(function (data2) {
        data2.forEach(() => {
          if (team1Choice === data2[i].Name) {
            team1b.push(data2[i].pID);
          }
        })
        team1b.forEach(() => {
          planes.forEach(() => {
            if (team1b[i] === planes[g].UID) {
              team1.push(JSON.parse(JSON.stringify(planes[g])));
            }
          });
        });
        render();
      });
    })
}

function getPlanes2() {
  team2b = [];
  team2 = [];
  fetch("/api/planes")
    .then(function (data2) {
      data2.json().then(function (data2) {
        data2.forEach(() => {
          if (team2Choice === data2[i].Name) {
            team2b.push(data2[i].pID);
          }
        })
        team2b.forEach(() => {
          planes.forEach(() => {
            if (team2b[i] === planes[g].UID) {
              team2.push(JSON.parse(JSON.stringify(planes[g])));
            }
          })
        })
        render();
      });
    })
}

function databaseConvertor() {
  $.get("/api/squadron", function (data) {
    data.forEach(() => {
      $("#squadronSelector1").append("<option>" + data[i].Name + " </option>");
      $("#squadronSelector2").append("<option>" + data[i].Name + " </option>");
    });
  });
  $("#squadronSelector1").change(function () {
    team1Choice = $("#squadronSelector1").val();
    getPlanes1();
  });
  $("#squadronSelector2").change(function () {
    team2Choice = $("#squadronSelector2").val();
    getPlanes2();
  });
}
databaseConvertor();

function hpBars1(i) {
  if ((team1[i].health / team1[i].healthMax) <= 1 && (team1[i].health / team1[i].healthMax) > .6) {
    $(".team1unitHP" + i).css("background-color", "green").css("width", "100%");
  }
  if ((team1[i].health / team1[i].healthMax)  <= .6 && (team1[i].health / team1[i].healthMax) > .30) {
    $(".team1unitHP" + i).css("background-color", "yellow").css("width", "60%");
  }
  if ((team1[i].health / team1[i].healthMax) <= .30 && (team1[i].health / team1[i].healthMax)  > .0) {
    $(".team1unitHP" + i).css("background-color", "red").css("width", "30%");
  }
}

function hpBars2(i) {
  if ((team2[i].health / team2[i].healthMax) <= 1 && (team2[i].health / team2[i].healthMax) > .6) {
    $(".team2unitHP" + i).css("background-color", "green").css("width", "100%");
  }
  if ((team2[i].health / team2[i].healthMax)  <= .6 && (team2[i].health / team2[i].healthMax) > .30) {
    $(".team2unitHP" + i).css("background-color", "yellow").css("width", "60%");
  }
  if ((team2[i].health / team2[i].healthMax) <= .30 && (team2[i].health / team2[i].healthMax)  > .0) {
    $(".team2unitHP" + i).css("background-color", "red").css("width", "30%");
  }
}

function render() {
  //remove negative numbers and replace them with 0
  team1.forEach(() => {
    if (team1[i].health < 0) {
      team1[i].health = 0;
    } else {
        planes.forEach(() => {
          if (team1[i].UID === planes[g].UID) {
            team1[i].attack = Math.ceil(Math.random() * (planes[g].attackValueMax - planes[g].attackValueMin) + planes[g].attackValueMin);
            team1[i].defense = Math.random() * (planes[g].defenseValueMax - planes[g].defenseValueMin) + planes[g].defenseValueMin;
            team1[i].critical = Math.random() * planes[g].criticalValue;
          }
        })
    }
  });

  //remove negative numbers and replace them with 0
  team2.forEach(() => {
    if (team2[i].health < 0) {
      team2[i].health = 0;
    } else {
      planes.forEach(() => {
        if (team2[i].UID === planes[g].UID) {
          team2[i].attack = Math.ceil(Math.random() * (planes[g].attackValueMax - planes[g].attackValueMin) + planes[g].attackValueMin);
          team2[i].defense = Math.random() * (planes[g].defenseValueMax - planes[g].defenseValueMin) + planes[g].defenseValueMin;
          team2[i].critical = Math.random() * planes[g].criticalValue;
        }
      })
    }
  });
  //display team 1 health and stats
  var team1Attack = 0;
  var team1Crit = 0;
  var team1CritAvg = 0;
  var team1Dodge = 0;
  var team1DodgeAvg = 0;
  var team1Health = 0;
  var team1Length = 0;
  team1.forEach(() => {
    if (team1[i].health <= 0) {
      $(".team1Stats" + i).html("<p class='kia'>" + team1[i].name + " was KIA!</p>");
    } else {
      $(".team1Stats" + i).html("<div class='teamStats'><p class='team1unitName'>"
        + team1[i].name + "</p><p class='team1unitHP" + i + "'>"
        + team1[i].health + "</p><p class='team1unit'>(Attack: "
        + team1[i].attack + ")(Evasion: "
        + (team1[i].defense * 100).toFixed(0) + "%)(Crit Hit: "
        + (team1[i].critical * 100).toFixed(0) + "%)</p></div");
      $(".t1picWrapper" + i).html("<img src='" + team1[i].img + "' width='60px' class='img'>");
    }
    if (team1[i].health > 0) {
      team1Attack = team1Attack + team1[i].attack;
      team1Crit = team1Crit + team1[i].critical;
      team1Dodge = team1Dodge + team1[i].defense;
      team1Health = team1Health + team1[i].health;
      team1Length++;
    }
    hpBars1(i);
  });
  team1CritAvg = team1Crit / team1Length;
  team1DodgeAvg = team1Dodge / team1Length;
  $(".tOneTotalAttack").html(team1Attack);  
  $(".tOneTotalDodge").html((team1DodgeAvg * 100).toFixed(0) + "%");
  $(".tOneTotalHealth").html(team1Health);
  $(".tOneTotalCrit").html((team1CritAvg * 100).toFixed(0) + "%");

  //display team 2 health and stats
  var team2Attack = 0;
  var team2Crit = 0;
  var team2CritAvg = 0;
  var team2Dodge = 0;
  var team2DodgeAvg = 0;
  var team2Health = 0;
  var team2Length = 0;
  team2.forEach(() => {
    if (team2[i].health <= 0) {
      $(".team2Stats" + i).html("<p class='kia'>" + team2[i].name + " was KIA!</p>");
    } else {
      $(".team2Stats" + i).html("<div class='teamStats'><p class='team2unitName'>"
        + team2[i].name + "</p><p class='team2unitHP" + i + "'>"
        + team2[i].health + "</p><p class='team2unit'>(Attack: "
        + team2[i].attack + ")(Evasion: "
        + (team2[i].defense * 100).toFixed(0) + "%)(Crit Hit: "
        + (team2[i].critical * 100).toFixed(0) + "%)</p></div");
      $(".t2picWrapper" + i).html("<img src='" + team2[i].img + "' width='60px' class='img'>");
    }
    if (team2[i].health > 0) {
      team2Attack = team2Attack + team2[i].attack;
      team2Crit = team2Crit + team2[i].critical;
      team2Dodge = team2Dodge + team2[i].defense;
      team2Health = team2Health + team2[i].health;
      team2Length++;
    }
    hpBars2(i);
  });
  team2CritAvg = team2Crit / team2Length;
  team2DodgeAvg = team2Dodge / team2Length;
  $(".tTwoTotalAttack").html(team2Attack);  
  $(".tTwoTotalDodge").html((team2DodgeAvg * 100).toFixed(0) + "%");
  $(".tTwoTotalHealth").html(team2Health);
  $(".tTwoTotalCrit").html((team2CritAvg * 100).toFixed(0) + "%");
}

render();
//fight engine
$(".fight").click(function (event) {
  event.preventDefault();
  // loop through team 1's units
  team1.forEach(() => {
    // generate rolls for both teams
    var t1DiceRoll = roll.roll('d20');
    var t2DiceRoll = roll.roll('d20');

    // checks to makes sure both units have health
    if (team1[i].health > 0 && team2[i].health > 0) {
      // checks to see if team1 attacks, defender does not attack
      if (t1DiceRoll.result > t2DiceRoll.result) {
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
      team2.forEach(() => {
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
      })
      // check if team 2 unit has health and team 1 has no health 
    } else if (team1[i].health <= 0 && team2[i].health > 0) {
      // find opponent that has health
      team1.forEach(() => {
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
      })
    }
  })
}); 
