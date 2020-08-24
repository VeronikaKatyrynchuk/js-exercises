'use strict';

//1st exr is to swap two variables

let a = 17;
let b = 74;
[a, b] = [b, a];
console.log(a);
console.log(b);//the way by applying destructuring assigment

//2nd exr 
let lang = 'ru';
if(lang == 'ru') {
    let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
};

if(lang == 'en') {
     arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
};
console.log(arr);
// by using 2if conditional statement


let lang2 = 'ru';
switch(lang2) {
    case 'ru': 
        let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
        break;

    case 'en': 
        arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
        break;
};
console.log(arr);
//by using switch statement

let lang3 = 'ru';
let arr = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
alert(arr[lang3]);
// by using multidimensional array(многоmерный массив)

//3rd exrc

let a = 3;
let b = 6;

if(a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//4th exrc
var arr =  ['Привет, ', 'мир', '!']
var text = arr.concat();
alert(text);//by using concat

var arr1 =  ['Привет, ', 'мир', '!']
var text1 = arr1[0] + arr1[1] + arr1[2];
alert(text1); //by adding


//5th exrc
var arrr = [2, 5, 3, 9];
var result = (arrr[0]* arrr[1]) + (arr[2]* arrr[3]);
console.log(result);


//6th exrc
let d = 0;
let n = 0;
    while(d > 60) {
    d--;
    }








