
// This will generate a unit for the game.
// Skill:
  // 1 = idiot.
  // 1.5 = peasant.
  // 2 = starting hero.
  // 3-400 = the more skill the better character.
// plusPoints = extra stat points.
  // I would suggest 10 for a balanced character, or more for one that is broken as heck.
function generateUnit(skill, plusPoints, name) {
  this.skill = skill;
  this.plusPoints = plusPoints;
  this.name = name;

  // Create random stats array starting point.
  this.statArray = [13, 14, 12, 12, 10, 8];
  this.statArray = arrayShuffle(this.statArray);
  // Modify points randomly either subtracting or adding them for variance.
  for (var i = 0; i < 10; i++) {
    index = Math.floor(Math.random()*this.statArray.length);
    modifier = (Math.floor(Math.random() * this.skill) == 0) ? -1 : 1;
    this.statArray[index] = this.statArray[index] + modifier;
  }
  // Add points randomly for plusPoints.
  for (var i = 0; i < plusPoints; i++) {
    index = Math.floor(Math.random()*this.statArray.length);
    this.statArray[index] = this.statArray[index] + 1;
  }


  // Create the stat array indexed properly.
  this.statArray = {
    'STR':this.statArray[0],
    'DEX':this.statArray[1],
    'CON':this.statArray[2],
    'INT':this.statArray[3],
    'WIS':this.statArray[4],
    'CHA':this.statArray[5]
  };

  //Assign a race
  this.race = Object.keys(races)[Math.floor(Math.random()*Object.keys(races).length)];

  //Modify Race attributes
  this.addAttr = races[this.race]['add'];
  this.subAttr = races[this.race]['sub'];

  this.addAttr.forEach(function(stat) {
    this.statArray[stat]++;
  });

  this.subAttr.forEach(function(stat) {
    this.statArray[stat]--;
  });

  // finalize the unit;
  units[name] = new unit();
  Object.keys(this.statArray).forEach(function(stat){
    units[name].setStat(stat, statArray[stat]);
  });
  units[name].setRace(this.race);
  units[name].setName(this.name);
}







