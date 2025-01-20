
// console.log("hello");

// ### *Basic Level*  
// *Arrays*  
// 1. Create an array of numbers from 1 to 10 and print the first and last elements.  

// function arr(n){
//     let arr = [];
//     for(i=1; i<=n; i++){
//             arr.push(i);
//     }
//     console.log(arr[0]);
//     console.log(arr.length);
// }
// arr(10);

// 2. How do you add an element to the end of an array? 
// let arr = [1,2,3,4,5,6,7,7];
// arr.push(19)
// console.log(arr);

// 3. Write a function to calculate the sum of all elements in an array.  

// function sum(arr) {
//       let sum = 0;
//     for (i = 0; i < arr.length; i++) {
//        sum += arr[i];
//     }
//     console.log(sum)
// }
// sum([1,2,3,4,5,6,7,8]);

// *2D Arrays*
// 1. Create a 3x3 2D array of numbers.


// 2. Access and print the element at the second row and third column of the 2D array.

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let count = 0;
// let top = 0;
// let left = 0;
// let right = matrix[0].length-1;
// let  bottom = matrix.length-1;
// let result = "";
// let total = matrix.length * matrix[0].length;

// while(count<total){
//     // second row
//     for(i=left; i<=right; i++){
//         result += matrix[top+1][i] + " ";
//         count++;
//     }
//     // third  column
//     for(i=0; i<=bottom; i++){
//      result += matrix[i][right] + " ";
//      count++;
//     }
//     console.log(result);
//     break;
// }

// 3. Write a program to calculate the sum of all elements in a 2D array.

// *Objects with Levels*
// 1. Create an object with keys: name, age, and address. Print the name.
// 2. Add a new key-value pair to an object dynamically.
// 3. Create a nested object with two levels (e.g., person > address > city) and print the city.

// ---

// ### *Intermediate Level*
// *Arrays*
// 1. Reverse an array without using the built-in reverse() method.
// 2. Write a function to find the second largest number in an array.
// 3. Remove duplicate elements from an array.

// *2D Arrays*
// 1. Write a program to transpose a 2D array (convert rows to columns).
// 2. Check if a given 2D array is symmetric (i.e., the matrix equals its transpose).
// 3. Flatten a 2D array into a 1D array.

// *Objects with Levels*
// 1. Write a function to count the number of keys in a nested object.
// 2. Create an object representing a company with departments (e.g., HR, IT), where each department contains a list of employees. Access the list of employees in IT.
// 3. Write a function to merge two objects, including nested properties.

// ---

// ### *Advanced Level*
// *Arrays*
// 1. Find all subsets of a given array.
// 2. Rotate an array to the right by k positions.
// 3. Implement a function to find the longest increasing subsequence in an array.

// *2D Arrays*
// 1. Implement a program to find the largest square sub-matrix with all 1s in a binary 2D array.
// 2. Rotate a 2D array (matrix) clockwise by 90 degrees.
// 3. Given a 2D grid of numbers, find the maximum sum path from the top-left to the bottom-right.

// *Objects with Levels*
// 1. Write a function to deeply clone a nested object without using JSON.parse().
// 2. Given a nested object, write a function to access any key using a dot-separated string (e.g., "person.address.city").
// 3. Implement a program to compare two nested objects and determine if they are deeply equal.

// ---

// Let me know if you’d like solutions to any of these!