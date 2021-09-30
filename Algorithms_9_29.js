// function add(param1, param2) {
//     return param1 + param2;
// }
// console.log(add(1,2))

// function centuryFromYear(currentYear) {
//     var year =  Math.ceil(currentYear/100);
//     return year;
// }
// console.log(centuryFromYear(2001))

function checkPalindrome(inputString) {
    var re = /[^A-Za-z0-9]/g;
    var lowRegStr = inputString.toLowerCase().replace(re,'');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
console.log(checkPalindrome("racecar"));