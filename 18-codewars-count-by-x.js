//Coding challenge codewars day (18/366)
//8 Kyu
// https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

//first attempt brute force
// function countBy(x, n) {

//     let z = [];
//     let c = x;
//     for (let i = 0; i < n; i++) {
//         console.log(c);
//         z.push(c);
//         c += x;
//     }

//     return z;
// }

//one liner
//   const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)

//best practice
function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}