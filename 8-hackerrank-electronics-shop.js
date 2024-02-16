//Coding challenge hackerrank day (8/366)
// https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true

//first attempt, my way brute force
// function getMoneySpent(keyboards, drives, b) {
//     let max = 0;
//     let sum = 0;
//     for (let i = 0; i < keyboards.length; i++) {
//         for (let j = 0; j < drives.length; j++) {
//             sum = keyboards[i] + drives[j];
//             if (sum <= b && sum > max) {
//                 max = sum;
//             }
//         }
//     }

//     if (max === 0) {
//         return -1;
//     }
//     else {
//         return max;
//     }

// }

//chat gpt refactor to make more efficient
function getMoneySpent(keyboards, drives, b) {
    let max = -1; // Initialize max to -1, indicating no valid combination found yet

    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            const sum = keyboards[i] + drives[j];

            if (sum <= b && sum > max) {
                max = sum;
            }
        }
    }

    return max;
}

//one liner chat gpt
// const getMoneySpent = (keyboards, drives, b) => Math.max(...keyboards.flatMap(k => drives.map(d => k + d)).filter(sum => sum <= b), -1);
