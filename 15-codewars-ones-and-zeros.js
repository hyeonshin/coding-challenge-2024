//Coding challenge codewars day (15/366)
//7 Kyu
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript

//first attempt, one liner
// const binaryArrayToNumber = arr => parseInt(arr.toString().replaceAll(',',''),2);

//eficient way
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);