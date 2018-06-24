function unit() {
  this.name = '';
  this.race = '';
  this.stats = {
    'STR':0,
    'DEX':0,
    'CON':0,
    'INT':0,
    'WIS':0,
    'CHA':0
  };

  this.setStat = function(stat, value) {
    this.stats[stat] = value;
  }

  this.getStat = function(stat) {
    return this.stats[stat];
  }

  this.setName = function(name) {
    this.name = name;
  }

  this.getName = function(name) {
    return this.name;
  }

  this.setRace = function(race) {
    this.race = race;
  }

  this.getRace = function(race) {
    return this.race;
  }
}