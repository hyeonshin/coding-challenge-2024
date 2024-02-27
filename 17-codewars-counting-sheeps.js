//Coding challenge codewars day (17/366)
//8 Kyu
// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript


//first attempt
function countSheeps(sheep) {
    // TODO
    let res = 0;
    for (let i = 0; i < sheep.length; i++) {
        console.log(sheep[i]);
        if (sheep[i] == true && sheep[i] != undefined && sheep[i] != null) {
            res++;
        }
    }
    return res;
}

//efficient
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}