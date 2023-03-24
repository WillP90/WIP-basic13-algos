console.log("hello world");

// #1 Print 1-255
// printall the integers from 1 to 255

function printAll(){
    // for loop to print the variable i 255 times
    for(i = 1; i <= 255; i++){
        console.log(i);
    }
}
printAll()

// #2 Print Sum 0-255
// print integers from 0 to 255, and with each integer print the sum so far

function printSum(){
    var sum = 0
    for(i = 1; i <= 255; i++){
        console.log(i);
        sum = sum + i
        console.log("The sum so far " + sum);
    }
}
printSum()