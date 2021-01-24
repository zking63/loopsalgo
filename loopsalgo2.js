for(var j = 1; j <= 5; j++){
    if (j == 1) {
        var sum1 = j;
        console.log("Num: " + j + " Sum: " + sum1);
    } 
    else if (j > 1) {
        sum1 = j + sum1;
        console.log("Num: " + j + " Sum: " + sum1);
    }
}