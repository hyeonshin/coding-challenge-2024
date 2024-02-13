//Coding challenge hackerrank day (5/366)
// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true


//first try, brute force
function bonAppetit(bill, k, b) {
    // Write your code here
    const act = bill.reduce((a,b) => a+b,0);
    const res = (act - bill[k]) / 2;
    if(b == res) {
        console.log("Bon Appetit");
    }
    else {
        console.log(b - res);
    }
}