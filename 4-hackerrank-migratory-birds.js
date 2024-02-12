//Coding challenge hackerrank day (4/366)
// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true

//brute force, first attempt
// function migratoryBirds(arr) {
//     // Write your code here
//     let t1 = 0;
//     let t2 = 0;
//     let t3 = 0;
//     let t4 = 0;
//     let t5 = 0;

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === 1) {
//             t1++;
//         }
//         else if(arr[i] === 2) {
//             t2++;
//         }
//         else if(arr[i] === 3) {
//             t3++;
//         }
//         else if(arr[i] === 4) {
//             t4++;
//         }
//         else {
//             t5++;
//         }
//     }
//     let A = {t1,t2,t3,t4,t5};
//     let max = solution(A);
//     if(max == "t1") {
//        return 1; 
//     }
//     else if(max == "t2") {
//        return 2; 
//     }
//     else if(max == "t3") {
//        return 3; 
//     }
//     else if(max == "t4") {
//        return 4; 
//     }
//     else {
//         return 5;
//     }
// }

// function solution(A) {
//     return Object.keys(A).reduce((prev, cur) => A[prev] >= A[cur] ? prev : cur);
// }

//chat gpt efficient and readble mode
function migratoryBirds(arr) {
    const birdCount = Array(6).fill(0);

    arr.forEach(bird => birdCount[bird]++);

    const mostFrequentBird = birdCount.indexOf(Math.max(...birdCount.slice(1)));

    return mostFrequentBird;
}
