//Coding challenge hackerrank day (11/366)
// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=true

//first attempt, brute force
// function designerPdfViewer(h, word) {
//     let sum = word.length;
//     let max = 0;
//     for (let i = 0; i < word.length; i++) {
//         let alpha = word[i].charCodeAt(0) - 97;
//         max = max < h[alpha] ? h[alpha] : max;
//     }
//     return sum * 1 * max;
// }

//chat gpt efficient way
function designerPdfViewer(h, word) {
    const max = Math.max(...word.split('').map(char => h[char.charCodeAt(0) - 97]));
    return word.length * max;
}
