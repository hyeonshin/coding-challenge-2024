//Coding challenge hackerrank day (12/366)
// https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true

//brute force
// function addDays(date = new Date()) {
//     date.setDate(date.getDate() + 255);

//     return date;
// }

// function dayOfProgrammer(year) {
//     if (year === 1918) {
//         // Transition year (Russia switched from the Julian to the Gregorian calendar)
//         return `26.09.${year}`;
//     } else if ((year < 1918 && year % 4 === 0) ||
//         (year > 1918 && ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)))) {
//         // Leap year
//         return `12.09.${year}`;
//     } else {
//         const date = new Date('01.01.' + year);

//         const result2 = addDays(date);
//         const originalDate = new Date(result2);

//         // Extract day, month, and year from the Date object
//         const day = originalDate.getUTCDate();
//         const month = originalDate.getUTCMonth() + 1; // Months are zero-based, so add 1
//         const yy = originalDate.getUTCFullYear();

//         // Create a new formatted date string
//         const formattedDateString = `${day.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${yy}`;

//         console.log(formattedDateString); // Output: 13.09.2017
//         return (formattedDateString);
//     }
// }

//forum solution js
function dayOfProgrammer(year) {
    if (year == 1918) {
      // Corner case
      return `26.09.${year}`; 
    } else if (year > 1918) {
      // Calculating Leap year in Gregorian Calendar
      const isLeapYear = (year % 4 == 0) && (year % 100 != 0) || year % 400 == 0;
      return `${isLeapYear ? 12 : 13}.09.${year}`;
    } else {
      // Calculating Leap year in Julian Calendar
      return `${year % 4 == 0 ? 12 : 13}.09.${year}`;
    }
  }
  
  // dayOfProgrammer(2000) // leap year -> 12...
//   dayOfProgrammer(1700); // leap year > 13..
  // dayOfProgrammer(1800) // NOT leap year -> 12-9-1800
  // dayOfProgrammer(2016) // leap year -> 13-9-2016
  // dayOfProgrammer(2017) // NOT leap year -> 12-9-2017