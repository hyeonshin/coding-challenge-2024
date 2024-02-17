//Coding challenge hackerrank day (9/366)
// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true

// first attempt, brute force
function catAndMouse(x, y, z) {
  let sumA = 0;
  let sumB = 0;

  sumA = Math.abs(z - x);
  sumB = Math.abs(z - y);

  if (sumA == sumB) {
    return "Mouse C";
  } else if (sumA < sumB) {
    return "Cat A";
  } else {
    return "Cat B";
  }
}

// //chat gpt efficient
// function catAndMouse(x, y, z) {
//   const distanceCatA = Math.abs(z - x);
//   const distanceCatB = Math.abs(z - y);

//   if (distanceCatA === distanceCatB) {
//     return "Mouse C";
//   } else {
//     return distanceCatA < distanceCatB ? "Cat A" : "Cat B";
//   }
// }


// //chat gpt one liner
// function catAndMouse(x, y, z) {
//     return Math.abs(z - x) === Math.abs(z - y) ? "Mouse C" : Math.abs(z - x) < Math.abs(z - y) ? "Cat A" : "Cat B";
// }
