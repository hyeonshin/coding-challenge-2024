//Coding challenge hackerrank day (6/366)
// https://www.hackerrank.com/challenges/counting-valleys/problem?isFullScreen=true

//first try brute force
function countingValleys(steps, path) {
  // Write your code here
  let h = 0;
  let res = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] == "U") {
      h++;
    } else {
      if (h == 0) {
        res++;
      }
      h--;
    }
  }

  return res;
}


//chat gpt
// function countingValleys(steps, path) {
//     let altitude = 0;
//     let valleys = 0;

//     for (let step of path) {
//         if (step === "U") {
//             altitude++;
//         } else {
//             altitude--;
//         }

//         // Check for valley entrance (going from below sea level to sea level)
//         if (step === "U" && altitude === 0) {
//             valleys++;
//         }
//     }

//     return valleys;
// }
