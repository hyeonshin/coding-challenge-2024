//Coding challenge hackerrank day (3/366)
// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true

//first attemp, brute force
function divisibleSumPairs(n, k, ar) {
    let result = 0;
    let sum = 0;
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            if((ar[i] + ar[j]) % k === 0) {
                result++
            }   
        }
    }
    
    return result;
}

//chatgpt clean code and readibility
// function divisibleSumPairs(n, k, ar) {
//     let result = 0;

//     for (let i = 0; i < n - 1; i++) {
//         for (let j = i + 1; j < n; j++) {
//             const pairSum = ar[i] + ar[j];
//             if (pairSum % k === 0) {
//                 result++;
//             }
//         }
//     }

//     return result;
// }


//chatgpt one liner
// const divisibleSumPairs = (n, k, ar) => ar.reduce((result, _, i) => result + ar.slice(i + 1).filter((_, j) => (ar[i] + ar[j + i + 1]) % k === 0).length, 0);
