function adjacentElementsProduct(inputArray) {
    var products = inputArray[0] * inputArray[1];

    for(var i = 1; i < inputArray.length - 1;i++){
        products = Math.max(products, inputArray[i]*inputArray[i+1]);
    }
    return products;
}
console.log(adjacentElementsProduct([3,6,-2,-5,7,3]));  // output for product array should be [6,12,20,30,42]


// find the pair of of adjacent elements which produce the highest product
// loop through each pair and multiple them 
// compare the the products 
// output would need the largest product 
