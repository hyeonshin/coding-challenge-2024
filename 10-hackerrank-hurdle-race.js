//Coding challenge hackerrank day (10/366)
// https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true

//brute force
// function hurdleRace(k, height) {
//     // Write your code here
//     let max = Math.max(...height);
//     if(k < max) {
//         return max - k;
//     }
//     else {
//         return 0;
//     }
// }

//first attempt, refactor one liner
const hurdleRace = (k, height, max = Math.max(...height)) => k < max ? max - k : 0;

//chat gpt suggest
// const hurdleRace = (k, height) => k < Math.max(...height) ? Math.max(...height) - k : 0;
