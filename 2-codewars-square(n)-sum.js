//Coding challenge codewars day (1/366)
//8 Kyu
// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

//brute force
// function squareSum(numbers){
//   let arr = [];
//   for(let i = 0; i < numbers.length; i++) {
//     arr.push(Math.pow(numbers[i],2));
//     console.log(arr);
//   }
//   return arr.reduce((a,b) => a+b, 0);
// }

//map force
// function squareSum(numbers) {
//   const squaredNumbers = numbers.map((number) => Math.pow(number, 2));
//   console.log(squaredNumbers);

//   const sum = squaredNumbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );
//   return sum;
// }

//one liner
// const squareSum = numbers => numbers.map(number => Math.pow(number, 2)).reduce((a,b) => a+b,0);

//one liner more efficient
const squareSum = numbers => numbers.reduce((a, b)=> a + b**2, 0);