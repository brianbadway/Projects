// 1  Push Front
//Given an array and an additional value, insert this value at the beginning of the array. 
//Do this without using any built-in array methods.

// function pushToFront(arr, val){
//     var temp1 = arr[0], temp2 =arr[1];
//     for (var i = 0; i < arr.length && temp1 != undefined; i++){
//         arr[i+1] = temp1; 
//         temp1 = temp2; 
//         temp2 = arr[i+2];
//     }
//     arr[0]=val;
// }
// var myArr =[4,8,3,7,5];
// pushToFront(myArr, 2);
// console.log(myArr);

// function pushToFront2(arr, val){
//     for (var i = arr.length - 1; i >= 0; i--){
//         arr[i+1] = arr[i];
//     } 
//     arr[0] = val 
// }
// var arr1 = [4,8,3,7,5];
// pushToFront2(arr1,-30);
// console.log(arr1);

// var arr2 = [];
// pushToFront2(arr2,-30);
// console.log(arr2);

// var arr3 = [5];
// pushToFront2(arr3,-30);
// console.log(arr3);


// var arr = [1,2,3,4,5]
// console.log(arr)
//     arr.unshift(0)
// console.log(arr)

// 2 Pop Front

//Given an array, remove and return the value at the beginning of the array. 
//Do this without using any built-in array methods except pop().

// function popToFront(arr){
//     var returnVal = arr[0];
//     for (var i = 1; i < arr.length; i++){
//         arr[i-1] = arr[i];
//     }
//     arr.pop();
//     return returnVal;
// }
// var myArr =[4,8,3,7,5];
// popToFront(myArr);
// console.log(myArr);

// var arr = [1,2,3,4,5]
// console.log(arr)
//     arr.shift()
// console.log(arr)

// 3 Insert At
//Given an array, index, and additional value, insert the value into array at given index. 
//Do this without using built-in array methods. 
//You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

// function insertAt(arr, val, ind){
//         for (var i = arr.length - 1; i >=ind; i--){
//             arr[i+1] = arr[i];
//         }
//         arr[ind] = val;
//     }

//     var myArr =[4,8,3,7,5];
//     insertAt(myArr, 2,3); //4,8,3,2,7,5
//     console.log(myArr);

// var arr = [1,2,3,4,5]
// console.log(arr)
//     // arr[2] = arr.push(1)
//     arr.insert(2,1)
// console.log(arr)

// 4 Remove At (Bonus Challenge)
//Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
// function removeAt(arr, ind){
//     ind = Math.floor(ind)
//     if(ind>= arr.length || ind < 0){
//         return null;
//     }
//     var returnVal = arr[ind];
//     for (var i = ind + 1; i < arr.length; i++){
//         arr[i-1] = arr[i];
//     }
//     arr.pop();
//     return returnVal;
// }

// var myArr =[4,8,3,7,5];
// removeAt(myArr,2); //4,8,7,5
// console.log(myArr);

// 5 Swap Pairs (Bonus Challenge)
//Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.

// function swapPairs(arr) {
//     for (var i = 0; i< arr.length -1; i += 2){
//         var temp = arr[i];
//         arr[i] =arr[i+1];
//         arr[i+1] = temp;
//     }
// }
// var myArr =[4,8,3,7,5];
// swapPairs(myArr); //8,4,7,3,5
// console.log(myArr);

// 6 Remove Duplicates (Bonus Challenge)
//Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.

// function removeAt(arr, ind){
//     ind = Math.floor(ind)
//     if(ind>= arr.length || ind < 0){
//         return null;
//     }
//     var returnVal = arr[ind];
//     for (var i = ind + 1; i < arr.length; i++){
//         arr[i-1] = arr[i];
//     }
//     arr.pop();
//     return returnVal;
// }

// function removeDupesV1(arr) {
//     for (var i = 0; i < arr.length - 1; i++){
//         if (arr[i+1] == arr[i]){
//             while (arr[i+1] == arr[i]) {
//                 removeAt(arr,i+1);
//             }
//         }
//     }
// }
// var myArr =[4,3,3,7,7];
// removeDupesV1(myArr); //4,3,7
// console.log(myArr);

//Second: Solve this without using any nested loops.
// var x1 = [3, 'hello', 10.5];

// function removeDupesV2(arr) {
//     if (arr.length <= 1) { // If array is empty or has only one value, no duplicates possible
//         return;
//     }
//     var lastUniqueVal = arr[0];
//     var nextUniqueInd = 1; // The index for where the next unique value will be put in the array
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] != lastUniqueVal) {
//             lastUniqueVal = arr[i];
//             arr[nextUniqueInd] = arr[i];
//             nextUniqueInd++;
//         }
//     }
//     arr.length = nextUniqueInd; // Remove the duplicates
// }
// var myArr =[4,3,3,7,7];
// removeDupesV2(myArr); //4,3,7
// console.log(myArr);