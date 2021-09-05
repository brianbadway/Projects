//1 Countdown Create a function that accepts a number as an input. 
//Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). 
//How long is this array?
// output should be [5,4,3,2,1,0]
// function countDown(newArr){
//     let arr = []; 
//     for (let i = 0; i<=newArr; i++){
//         arr.unshift(i);
//     }
//     return arr;
// }
// console.log(countDown(5))

//2 Print and Return  Your function will receive an array with two numbers. Print the first value, and return the second.
// need a function to accept an array with two numbers 
// print the first (console.log newArr[0])
// return the second (return newArr[1])

// function printReturn(anArray){
//     console.log(anArray[0]);
//     return anArray[1];
// }

// console.log(printReturn([2,3]))

//3  First Plus Length Given an array, return the sum of the first value in the array, plus the array’s length. 
//What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

// function firstPlus(anArray){
//     add = anArray.length
//     plusLength = anArray[0] + add;
//     console.log(plusLength);
//     return anArray[1];
// }
// console.log(firstPlus([2,3]))
// console.log(firstPlus(["what?",3])) // concatenate
// console.log(firstPlus([true,3])) //does not record the true


//4  Values Greater than Second For [1,3,5,7,9,13], print values that are greater than its 2nd value. 
//Return how many values this is.

// print all values in an array greater than arr[1] 
// return the number of values that were greater than arr[1]

// function greaterSecond(anArray){
//     var newArray =[]
//     for(let i = 0; i<anArray.length; i++){
//         if (anArray[i] > anArray[1]){
//             console.log(anArray[i])
//             newArray.push(anArray[i])//create return new array 
//         } 
//     }
//     return newArray.length
// }
// console.log(greaterSecond([1,3,5,7,9,13]))

//5 Values Greater than Second, Generalized Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. 
//Print how many values this is. 
//What will you do if the array is only one element long?

// function greaterSecond(anArray){
//     var newArray =[]
//     for(let i = 0; i<anArray.length; i++){
//         if (anArray[i] > anArray[1]){
//             console.log(anArray[i])
//             newArray.push(anArray[i])//create return new array 
//         } 
//     }
//     return newArray.length
// }
// console.log(greaterSecond([1,3,5,7,9,13])) // would respond with a 0 because all calculations can not be run 

//6  This Length, That Value
//Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

//num1 = array of length
//num2 = each value 
//if x==y, then print "jinx"

// function lengthValue(someArray){
//     num1 = someArray.length;
//     console.log("This is num1 "+ num1);
//     num2 = console.log("this is num2 "+someArray);
//     if (someArray[0] == someArray[1]){
//         console.log("Jinx!");
//     }
// }
// console.log(lengthValue([4,4,5]))

//7 Fit the First Value Your function should accept an array. If value at [0] is greater than array’s length, 
//print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".


//8  Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. 
//Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent 
//temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

//9  Celsius to Fahrenheit
//Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, 
//and returns the equivalent temperature expressed in Fahrenheit degrees.
//(Optional): Do Fahrenheit and Celsius values equate at a certain number? 
//The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending),checking whether it is equal to the corresponding Fahrenheit value

