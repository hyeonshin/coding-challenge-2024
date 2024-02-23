//Coding challenge hackerrank day (14/366)
// https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

//first attempt
function getTotalX(a, b) {
    // Write your code here
    let res = 0;

    for (let i = Math.max(...a); i >= Math.max(...a) && i <= Math.min(...b); i++) {
        if (a.every(e => i % e == 0) && b.every(e => e % i == 0)) {
            res++;
        }
    }

    return res;
}