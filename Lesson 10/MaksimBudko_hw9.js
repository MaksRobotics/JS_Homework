// ДОМАШНЕЕ ЗАДАНИЕ 9

// ЗАДАНИЕ 1 (подредактировал)

var numbersArr = [-1, 0, 2, 34, -2];

function filterNumbersArr(numbers) {
	var positiveArr = [];
	
	positiveArr = numbers.filter(function(item) {
		return item > 0;
	});
	
	return positiveArr;
}	

console.log(filterNumbersArr(numbersArr));

// ЗАДАНИЕ 2 (подредактировал)

var numbersArr = [-1, 0, 22, 34, -2];

function firstPositiveNumber(numbers) {
	var firstPositiveNum;
	
	firstPositiveNum = numbers.find(function(item) {
		return item >0;
	});
	
	return firstPositiveNum;
}	

console.log(firstPositiveNumber(numbersArr));

// ЗАДАНИЕ 3 (подредактировал)

str = 'шаЛаШ';

function isPalindrome(str) {

    return str.toLowerCase() === str.toLowerCase().split('').reverse().join(''); 
}

console.log(isPalindrome(str));

// ЗАДАНИЕ 4 (подредактировал)

var str1 = 'Кот', str2 = 'ОТК';

function anagramFunction(str1, str2) {

    if (str1.length ===  str2.length) {
        var strForCampare1 = str1.toLowerCase().split('').sort().join(''),
            strForCampare2 = str2.toLowerCase().split('').sort().join('');

        for (var i = 0; i < strForCampare1.length; i++) {
            if (strForCampare1[i] != strForCampare2[i]) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    } 
}

console.log(anagramFunction(str1, str2));

// ЗАДАНИЕ 5

var arrayForDevide = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sizeSubArray = 4;

function divideArr(arr, size) {
    var newArray = [], i = 0, length = arr.length;

    if (size == 0 || size > length) {
        return arr;
    } else {
        while (i < length) {
            newArray.push(arr.slice(i, i += size));
        }
        return newArray;
    }
}

console.log(divideArr(arrayForDevide, sizeSubArray));

// ЗАДАНИЕ 6 *

function powOfTwo(num) {
    return (Math.log(num)/Math.log(2)) % 1 === 0;
}

console.log(powOfTwo(1024));