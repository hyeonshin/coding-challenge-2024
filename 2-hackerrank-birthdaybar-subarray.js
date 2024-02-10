//Coding challenge hackerrank day (2/366)
//https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true

function birthday(s, d, m) {
    // Write your code here
    let res = 0;
    //edge case #1, m > squares of chocolate
    if(m > s.length) {
        return res;
    }
    //edge case #2, month is jan, only one square of choc.
    if(s.length === 1 && m === 1){
        if (s[0] === d) {
            return 1;
        }
    }
    for(let i = 0; i < s.length - 1; i++) {
        let arr = s.slice(i, i+m);
        if(arr.length === m) {
            console.log(arr);
            let sum = arr.reduce((a,b) => a + b, 0)
            if(sum === d) {
                res++;
            }
        }
    }
    
    return res;
    
}