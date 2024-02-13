//Coding challenge codewars day (5/366)
//7 Kyu
// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript


//first code, brute force
function bmi(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    if (bmi <= 18.5) {
        return "Underweight";
    }
    else if (bmi <= 25.0) {
        return "Normal";
    }
    else if (bmi <= 30.0) {
        return "Overweight";
    }
    else {
        return "Obese";
    }
}

//one liner
const bmi = (w, h, bmi = w/h/h) => bmi <= 18.5 ? "Underweight" :
                                   bmi <= 25 ? "Normal" :
                                   bmi <= 30 ? "Overweight" : "Obese";