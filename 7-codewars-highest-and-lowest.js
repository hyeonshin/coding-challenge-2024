//Coding challenge codewars day (7/366)
//7 Kyu
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

//first try brute force
// function highAndLow(numbers) {
//     const arr = numbers.split(" ");
//     let res = [];
//     res[0] = arr.reduce((a, b) => Math.max(a, b), -Infinity);
//     res[1] = Math.min(...arr);
//     return res.join(" ");
// }

// chat gpt efficient
// function highAndLow(numbers) {
//     const arr = numbers.split(" ").map(Number);
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     return `${max} ${min}`;
// }

//one liner
const highAndLow = numbers => `${Math.max(...numbers.split(" ").map(Number))} ${Math.min(...numbers.split(" ").map(Number))}`;
