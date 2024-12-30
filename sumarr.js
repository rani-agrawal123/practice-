// 1. Find the Sum of All Elements in an Array
// Problem: Write a program that takes an array as input and calculates the sum of all its elements.
// Example Input: [1, 2, 3, 4, 5]


function sum(array){
    let temp = 0;
    for(i=0; i<array.length; i++){
        temp += array[i];
    }
    console.log(temp);
}
sum([1, 2, 3, 4, 5]);