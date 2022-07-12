// ДОМАШНЕЕ ЗАДАНИЕ 10

// ЗАДАНИЕ 1

var namesArr = ['Vasya', 'Andrey', 'Maksim', 'Anton', 'Artem'];

var newNamesArr = namesArr.map(function(nameItem) {
    return {name: nameItem};
});

console.log(newNamesArr);

//ЗАДАНИЕ 2

var timesArr = ['00', '13', '24'];

var timesStr = timesArr.reduce( function(previous, current) {
    return previous + ' : ' + current;
}, 'Текущее время');

console.log(timesStr); 

// ЗАДАНИЕ 3

var text = 'Если посмотреть «Матрицу» наоборот, то можно увидеть, как Киану Ривз слезает с наркотиков и находит стабильную работу в офисе.';

function numberOfVowels(str) {
    var count = 0, textArr = str.toLowerCase().split(""),
        vowelsArr = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

    for (var i = 0; i < textArr.length; i++) {
        for (var j = 0; j < vowelsArr.length; j++) {
            if (textArr[i] === vowelsArr[j]) {
                count++;
                break;
            }
        }
    }    

    return count;
}

console.log(numberOfVowels(text));

// ЗАДАНИЕ 4

var text = 'Привет, студент! Студент... Как дела, студент?';

function countSentencesLetters(str) {
    var reText = /[!?.]+/,
        reArr = /[,~"'-()*+. /:;<=>^_`]+/,
        textArr = str.split(reText),
        textArrForCount = [];
    
    if (textArr[textArr.length - 1] === '') {
        textArr.splice(textArr.length - 1);
    }

    for (var i = 0; i < textArr.length; i++) {
        textArrForCount[i] = textArr[i].split(reArr).join('').length;
    }
    
    for (var i = 0; i < textArr.length; i++) {
        console.log(textArr[i].trim() + ': Letters quantity is: ' +  textArrForCount[i]);
    }
}

countSentencesLetters(text);

// ЗАДАНИЕ 5*

var text = 'Вдруг Алиса очутилась перед маленьким трёхногим столом, целиком сделанным из толстого стекла! На столе не было ничего, кроме крошечного золотого ключика. Она тотчас решила, что ключ мог подойти к какой-нибудь из дверей зала. Увы, или замочные скважины были слишком велики, или ключ чересчур мал, но, как бы там ни было, он не отпирал ни одной двери. Однако, обходя зал во второй раз, она приблизилась к игрушечной занавеске, которой прежде не заметила. Занавеска скрывала дверцу около пятнадцати дюймов высоты. Алиса вложила золотой ключик в замочную скважину — и, к её величайшей радости, он подошёл!';

function mostRepeatWord(str) {
    var re = /[ ,.!?-_+-:;]/ig, 
        strArr = str.split(re),
        cleanStrArr = [],
        occurances = {},
        max = 0,
        mostRepeatedWord = '';

    cleanStrArr = strArr.filter(function(item) {
        return (item != '') && (item.length > 1);
    });

    for (var word of cleanStrArr) {

        if (occurances[word]) {
            occurances[word]++;
        } else {
            occurances[word] = 1;
        }
    }

    for (var word of cleanStrArr) {
        if (occurances[word] > max) {
            max = occurances[word];
            mostRepeatedWord = word;
        }
    }

    return 'Максимальное число повторений у слова ' + '"' + mostRepeatedWord + '" - ' + max;
}

mostRepeatWord(text);