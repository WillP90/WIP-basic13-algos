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
    var sum = 0 // variable for printing the sum of the numbers
    for(i = 1; i <= 255; i++){
        console.log(i);
        // calculation for getting sum and printing
        sum = sum + i
        console.log("The sum so far " + sum);
    }
}
printSum()

// #3 Find and Print Max
// given an array, find and print its largest element

function printMax(arr){
    var max = 0 // variable to store the max number
    // itterates through the array
    for(i = 0; i < arr.length; i++){
        // conditional loop to check if the index number is higher then the max
        // if it is, the max number is replaced with the new number
        if(arr[i] > max){
            max = arr[i]
        }
    }
    console.log("Max Number is " + max);// expecting 7
}
printMax([1, -2, 6 , 4, 2, 7, 5])

// #4 Array With Odds
// create an array with all the integers between 1 and 255(inclusive)

function printOdds(){
    var oddArr = [] // declaring empty array
    for(i = 1; i <= 255; i++){
        // using modulus to sort odds and evens
        // if odd, it pushes to the empty array
        if(i % 2 == 1){
            oddArr.push(i)
        }
    }
    console.log(oddArr);
}
printOdds()

// #5 Greater then Y
//  Given an array and a value Y, count and print the number of array values greater then Y

function greaterThen(arr, y){
    var newArr = []
    // itterate through array
    for(i = 0; i < arr.length; i++){
        // if number at index of arr bigger then y push to empty array
        if(arr[i] > y){
            newArr.push(arr[i])
        }
    }
    console.log("These numbers are greater then Y " + newArr);
}
greaterThen([-3, 2, 9, 5, 7, -1, 10], 6)

// #6 Max, Min, Average 
// Given an array, print the max, min and average values for that array

function maxMinAve(arr){
    var max = 0
    var min = 1000
    var average = 0
    var sum = 0

    for(i = 0; i < arr.length; i++){
        sum = sum + arr[i]
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    average = sum / arr.length
    console.log("Average " + average + " , " + "Max " + max + " , " + "Min " + min)
}
maxMinAve([1, 3, 5, 7, 10])

// #7 Swap String for Array Negative Values
// Replace any negative value with 'Dojo'

function swapString(arr){
    var newArr = []
    for(i=0; i< arr.length; i++){
        if(arr[i] > 0){
            newArr.push(arr[i])
        }
        if(arr[i] < 0){
            newArr.push("Dojo")
        }
    }
    console.log(arr + " becomes " + newArr);
    
}
swapString([3, -5, 9, -3, 1])