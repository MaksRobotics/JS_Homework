// ДОМАШНЕЕ ЗАДАНИЕ 9

// ЗАДАНИЕ 1

var numbersArr = [-1, 0, 2, 34, -2],
    positiveArr = [];

positiveArr = numbersArr.filter(function(item) {
    return item > 0;
});

console.log(positiveArr);

// ЗАДАНИЕ 2

var numbersArray = [-1, 0, 2, 34, -2];

var firstPositiveNum = numbersArray.find(function(item) {
    return item > 0;
});

console.log(firstPositiveNum);

// ЗАДАНИЕ 3

str = 'шаЛаШ';

function isPalindrome(str) {
    var lowerStr = str.toLowerCase();
    var reverseStr = lowerStr.split('').reverse().join(''); 
    return lowerStr === reverseStr;
}

console.log(isPalindrome(str));

// ЗАДАНИЕ 4

var strAnagrams1 = 'Кот',
    strAnagrams2 = 'Отк';

function areAnagrams(str1, str2) {
    var strLower1 = str1.toLowerCase(),
        strLower2 = str2.toLowerCase(),
        campareArr = [];

    if (strLower1.length ===  strLower2.length) {

        for (var i = 0; i < strLower2.length; i++) {
            var index = strLower1.indexOf(strLower2[i]);

        if (index != (-1))
            campareArr[index] = strLower1[index];
        }

        return strLower1 === campareArr.join(''); 
    } else {
        return false;
    }
}

console.log(areAnagrams(strAnagrams1, strAnagrams2));

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