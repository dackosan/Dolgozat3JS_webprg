//Middle Character
function getMiddle(s) {
    let lenght = s.length;

    let middle = Math.floor(lenght/2);
    if(lenght % 2 != 0){
        return s[middle];
    }
    else{
        return `${s[middle-1]}${s[middle]}`;
    }
}

//A square of squares
function isSquare(n){
    if (n < 0) return false;

    const sqrt = Math.sqrt(n);
    return Number.isInteger(sqrt); 
}

//string clean
function stringClean(s){
    return s.replace(/[0-9]/g, '');
}

//BMI
function bmi(weight, height){
    let BMI = weight / (height*height);
    
    if(BMI <= 18.5) return "Underweight";
    else if(BMI <= 25.0) return "Normal";
    else if(BMI <= 30.0) return "Overweight";
    else if(BMI > 30) return "Obese";
}