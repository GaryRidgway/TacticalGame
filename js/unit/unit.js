function unit() {
  this.stats = {
    'STR':0,
    'DEX':0,
    'CON':0,
    'INT':0,
    'WIS':0,
    'CHA':0
  };

  this.setStat = function(stat, value) {
    this.stats.stat = value;
  }

  this.getStat = function(stat) {
    return this.stats.stat;
  }
}