// Домашнее задание 6

function Animal(name) {
  this.name = name;
  
  var animalFoodAmount = 50;
  var self = this;

  function animalFormatFoodAmount() {
    return animalFoodAmount + ' гр.';
  }

  this.animalDailyNorm = function(animalAmount) {
    if (!arguments.length) return animalFormatFoodAmount();
    
    if (animalAmount < 30 || animalAmount > 100) {
      throw new Error("Значение должно быть больше 30 и меньше 100");
    }

    animalFoodAmount = animalAmount;
  };

  this.animalFeed = function() {
    console.log('Насыпать в миску ' + self.animalDailyNorm() + ' корма.');  // swlf
  };
}

function Cat(name) {
  Animal.apply(this, arguments);
  
  var self = this;

  var parentAnimalFeed = this.animalFeed;
  this.animalFeed = function() {
    parentAnimalFeed();
    this.happyCat();
    return self;
  };

  this.happyCat = function() {
    console.log('Кот доволен ^_^');
  };

  this.stroke = function() {
    console.log('Гладим кота.');
    return self;
  };
}
  
var barsik = new Cat('Барсик');
