//Coding challenge codewars day (8/366)
//7 Kyu
//https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

//brute force, first attempt
// function friend(friends) {
//     //   your code here
//     let res = [];
//     for (let x in friends) {
//         if (friends[x].length === 4) {
//             res.push(friends[x]);
//         }
//     }
//     return res;
// }

//one liner vers + chatgpt
// const friend = friends => Object.values(friends).filter(friend => friend.length === 4);

//one liner simple, forum vers
const friend = friends => friends.filter(friend => friend.length == 4);