//Coding challenge codewars day (20/366)
//8 Kyu
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

//first attempt, brute force
// const rps = (p1, p2) => {
//     const p = ["rock", "paper", "scissors"];
    
//     if(p1 == p[0] && p2 == p[0]) {
//       return "Draw!";
//     }
//     else if(p1 == p[1] && p2 == p[1]) {
//       return "Draw!";
//     }
    
//     else if(p1 == p[2] && p2 == p[2]) {
//       return "Draw!";
//     }
//     else if(p1 == p[0] && p2 == p[2]) {
//       return "Player 1 won!";
//     }
//     else if(p1 == p[1] && p2 == p[0]) {
//       return "Player 1 won!";
//     }
//     else if(p1 == p[2] && p2 == p[1]) {
//       return "Player 1 won!";
//     }
//     else {
//       return "Player 2 won!";
//     }
//   };


  //best practice
  const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };