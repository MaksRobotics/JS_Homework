// ДОМАШНЕЕ ЗАДАНИЕ 7

// ЗАДАНИЕ 1

function Animal(name) {
    this._name = name;
    this._animalFoodAmount = 50;
}

Animal.prototype._animalFormatFoodAmount = function() {
    return this._animalFoodAmount + ' гр.';
};

Animal.prototype.animalDailyNorm = function(animalAmount) {
    if (!arguments.length) return this._animalFormatFoodAmount();

    if (animalAmount < 30 || animalAmount > 100) {
        throw new Error("Значение должно быть больше 30 и меньше 100");
    }

    this._animalFoodAmount = animalAmount;
};

Animal.prototype.animalFeed = function() {
    console.log('Насыпать в миску ' + this.animalDailyNorm() + ' корма.');
};



function Cat(name) {
    Animal.apply(this, arguments);   
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.constructor = Cat;

Cat.prototype.animalFeed = function() {
    Animal.prototype.animalFeed.apply(this);

    this.happyCat();

    return this;
};

Cat.prototype.happyCat = function() {
    console.log('Кот доволен ^_^');
};

Cat.prototype.stroke = function() {
    console.log('Гладим кота.');

    return this;
};

var barsik = new Cat('Барсик');

// Задание 2

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

function deepCloneObj (obj) {
    var newObj = Array.isArray(obj) ? [] : {};
    
    for (var key in obj) {  
        if(typeof obj[key] === 'object' && obj[key] != null) {
            newObj[key] = deepCloneObj(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }

    return newObj;
};

var clonedObj = deepCloneObj(initialObj);

clonedObj.array.push(2);
clonedObj.object.object3.name = 'Vasya';
clonedObj.object.object2.array2[0].name = 'Maks';
clonedObj.object.object2.array2[1].age = 35;

// Задание 3

var objOne = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var objTwo = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

function deepEqualObj(obj1, obj2) {
    var arrObj1 = Object.keys(obj1);
    var arrObj2 = Object.keys(obj2);

    if (arrObj1.length !== arrObj2.length) {
        return false;
    }

    for (var key of arrObj1) {
        var prop1 = obj1[key];
        var prop2 = obj2[key];
        var areObjects = (prop1 != null) && typeof(prop1) === 'object' && 
                         (prop2 != null) && typeof(prop2) === 'object';
    
    if (typeof(prop1) === 'function' && (prop1.toString() == prop2.toString())) {
        continue;
    }
    
    if ((areObjects && !deepEqualObj(prop1, prop2)) || (!areObjects && prop1 !== prop2)) {
        return false;
        }
    }

    return true;
}

console.log(deepEqualObj(objOne, objTwo));
