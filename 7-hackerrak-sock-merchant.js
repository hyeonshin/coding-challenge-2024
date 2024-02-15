//Coding challenge hackerrank day (7/366)
// https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true

//first try brute force
// function sockMerchant(n, ar) {
//     // Write your code here
//     const count = {};
//     let res = 0;
//     for (let ele of ar) {
//         if (count[ele]) {
//             count[ele] += 1;
//         } else {
//             count[ele] = 1;
//         }
//     }

//     for (let ele in count) {
//         if (count[ele] % 2 != 0) {
//             count[ele] = (count[ele] - 1) / 2;
//             res += count[ele];
//         } else {
//             res += count[ele] / 2;
//         }
//     }
//     return res;
// }

//chat gpt efficient way
function sockMerchant(n, ar) {
    const count = {};
    let res = 0;

    for (let sockColor of ar) {
        count[sockColor] = (count[sockColor] || 0) + 1;
    }

    for (let countValue of Object.values(count)) {
        res += Math.floor(countValue / 2);
    }

    return res;
}
