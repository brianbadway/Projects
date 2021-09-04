//1 myNumber to 42 
// let myNumber = 42
// let myName = 'Brian'
// // swamp myNumber and myName
// myNumber= ['Brian'];
//myName = 42;


// console.log(myNumber)
// console.log(myName)

//2 print integers -52 t0 1066 using a for loop

// for (let x=-52; x < 1066; x++) {
//     console.log(x)
// }

//3 Dont worry, be Happy 
// create beCheerful(). Within console.log string "good morning!"
//Call it 98 times 
// const beCheerful = 'good Morning!';
// console.log(beCheerful.repeat(98));

//4 Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
// for (var x=-300; x <-6; x= x+3) {
//     console.log(x)
// }

//5Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.
// var num = 2000
// while (num < 5281){
//     console.log(num)
//     num = num +1
// }
// console.log("We are done. Goodbye world!");

//6  If 2 given numbers represent your birth month and day in either order, 
//log "How did you know?", else log "Just another day...." 
// function myBirthday(myDay,myMonth){
//     if (myDay == 7 && myMonth == 10) {    
//         console.log("How did you know");
// }
//     else {    
//         console.log("Just another day...");
// }
// }
// console.log(myBirthday(7,10))

//7 Leap Year
// Write a function that determines whether a given year is a leap year. 
// If a year is divisible by four, it is a leap year, 
// unless it is divisible by 100. However, if it is divisible by 400, 
// then it is.
// function leapYear(curYear){
//     if (curYear % 4 ==0)
//         return true;
//     if (curYear % 100 == 0)
//         return false;
//     else 
//         return false;
// }
// console.log(leapYear(1999))

// //8 Print and Count
// Print all integer multiples of 5, from 512 to 4096. 
// Afterward, also log how many there were.
// var printCount = 515
// counter = 1
// while (printCount < 4096){
//     console.log(printCount)
//     printCount = printCount +5;
//     counter = counter + 1;
// }
// //find a way to count the iterations in a while loop 
// console.log(printCount);
// console.log(counter)

// 9 Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.

// var numBysix = 6
// while (numBysix < 60001){
//     console.log(numBysix)
//     numBysix = numBysix +6
// }
// console.log("We are done. Goodbye world!");

// 10 
// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. 
// If by 10, also print " Dojo".

// for (var dojoWay= 1; dojoWay < 100; dojoWay++) {
//     console.log(dojoWay)
//     if (dojoWay % 5 ==0)
//         console.log("Coding")
//     if (dojoWay % 10 ==0)
//         console.log("Dojo")
// }
// console.log(dojoWay)

// 11 What Do You Know?
// Your function will be given an input parameter incoming. 
// Please console.log this value.

// var someParameter;
// someParameter = "Hello Ninjas!"
    
// console.log(someParameter)

// 12 Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. 
// Is there a shortcut?

// for(var oddAdd=-300000; oddAdd<=300000; oddAdd++){
//     if(oddAdd % 2)
//     console.log(oddAdd)
// }
// function addTheOdd(){
//     var odd = 0 
//     for (var oddAdd=-300001; oddAdd<=300000; oddAdd+=2){
//         odd = oddAdd + odd;
//     }
//     return odd
// }
// console.log(addTheOdd())

// 13 Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), 
// without a FOR loop.

// var downByfour = 2016
// while (downByfour > 0){
//     console.log(downByfour)
//     downByfour = downByfour -4
// }
// console.log("We are done. Goodbye world!");

// 14 Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, 
// print multiples of mult from highNum down to lowNum, using a FOR. 
// For (2,9,3), print 9 6 3 (on successive lines).

// lowNum = 2
// highNum = 9
// Mult = 3
// for(let countFour = 9; countFour>=2; countFour-=1){
//     if(countFour % 3 ==0) 
//     console.log(countFour)
// }

// 15 The Final Countdown
// This is based on “Flexible Countdown”. 
// The parameter names are not as helpful, 
// but the problem is essentially identical; don’t be thrown off! 
// Given 4 parameters (param1,param2,param3,param4), print the multiples of 
// param1, starting at param2 and extending to param3. One exception: 
// if a multiple is equal to param4, then skip (don’t print) it. 
// Do this using a WHILE. Given (3,5,17,9), print 6,12,15 
// (which are all of the multiples of 3 between 5 and 17, and 
// excluding the value 9)

// param1 = 3
// param2 = 5
// param3 = 17
// param4 = 9
// for (let finalCount = 6; finalCount<=17; finalCount+=3){
//     if(finalCount == 9) {
//     continue;
//     }
//     console.log(finalCount)
// }
