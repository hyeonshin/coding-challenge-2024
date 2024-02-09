//Coding challenge hackerrank day (1/366)
//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

function breakingRecords(scores) {
    // Write your code here
    let records = [0,0];
    let min = scores[0];
    let max = scores[0];

    for(let i = 0; i < scores.length; i++) {
        if(scores[i] < min) {
            records[1]++;
            min = scores[i];
        }

        if(scores[i] > max) {
            records[0]++;
            max = scores[i];
        }
    }
    return records;
}

console.log(breakingRecords[10, 5, 20, 20, 4, 5, 2, 25, 1]);

