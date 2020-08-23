'use strict'

//first exr is to swap two variables

let a = 17;
let b = 74;
[a, b] = [b, a]
console.log(a);
console.log(b);//the way by applying destructuring assigment

//second exr 
let lang = 'ru';
if(lang == 'ru') {
    let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
};

if(lang == 'en') {
     arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
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
}
console.log(arr);
//by using switch statement

let lang3 = 'ru';
let arr = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
}
alert(arr[lang3]);
// by using multidimensional array(многосерный массив)



