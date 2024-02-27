//Coding challenge codewars day (19/366)
//8 Kyu
// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript

//first attempt, brute force
// function paperwork(n, m) {
//   if(n < 0 || m < 0) {
//     return 0;
//   }
//   else {
//     return n*m;
//   }
// }

//refactor one liner
const paperwork = (n,m) => n < 0 || m < 0 ? 0 : n*m;


