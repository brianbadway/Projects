// 1 Reverse
//Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, 
//with existing elements moved to other indices so that order of elements is reversed. 
//Working 'in-place' means that you cannot use a second 
//array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

// function reverseArray(arr){
//     for(var i = 0; i < arr.length / 2; i++) {
//         var temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i]; 
//         arr[arr.length - 1 - i] = temp; 
//     }
// }
// var myArr = [1,2,3,4,5];
// reverseArray(myArr);
// console.log(myArr);

// 2  Rotate
//Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 
//'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: 
//given ([1,2,3],1), 
//change the array to [3,1,2]. Don't use built-in functions.
//Second: allow negative shiftBy (shift L, not R).
//Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
//Fourth: minimize the touches of each element.

// function rotateArr(arr, moveBy){
//     // increase efficency
//     var actualMovements 
//     if (moveBy > 0){
//         actualMovements = moveBy % arr.length;
//     }else{
//         actualMovements = Math.abs(moveBy) % arr.length;
//     }
//     if (moveBy > 0) {
//         for (var i = 0; i < actualMovements; i++ ){
//             var temp = arr[arr.length - 1];

//             for (var k = arr.length -2; k >= 0; k--){
//                 arr[k+1] = arr[k];
//             } 
//             arr[0] = temp;
//         }
//     } else {
//         for (var i = 0; i < actualMovements; i++ ){
//             var temp = arr[0];
    
//             for (var k = 1; k < arr.length; k++){
//                 arr[k-1] = arr[k];
//             } 
//             arr[arr.length - 1] = temp 
//     }
// }
// }
// var myArr = [1,2,3,4,5];
// rotateArr(myArr, -2);
// console.log(myArr);

// 3  Filter Range
//Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. 
//Given arr and values min and max, retain only the array values between min and max. Work in-place: 
//return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr, min, max){
    // we need to filter out any value in the array which is out side the min-max range
    // we will need to loop through array 
    for(var i = 0; i < arr.length; i++){
        // if not in between min and max 
        if(arr[i] < min || arr[i] > max){
            // move everything that comes after to left one place 
            for (var k = 1; k < arr.length; k++){
                arr[k-1] = arr[k];
            }
            // arr.length--;
            i--;
        }
    }
}
var myArr = [1,2,3,4,5,6,7];
filterRange(myArr, 2,6);
console.log(myArr);

// 4 Concat
//Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. 
//Return a new array containing the first array's elements, 
//followed by the second array's elements. Do not alter the original arrays. 
//Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].