
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

// let matrix = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
// ]

// for(i=0; i<matrix.length; i++){
//     let arr = [];
//     for(j=0; j<matrix[i].length; j++){
//         arr.push(matrix[i][j]);
//     }
//     console.log(arr.join(" "));
// }
// 2. Access and print the element at the second row and third column of the 2D array.

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(matrix[1][2])
// let count = 0;
// let top = 0;
// let left = 0;
// let right = matrix[0].length-1;
// let  bottom = matrix.length-1;
// let result = "";
// let total = matrix.length * matrix[0].length;

// while(count<total){
//     // second row
//     for(i=left+2; i<=right; i++){
//         result += matrix[top+1][i] + " ";
//         count++;
//     }
//     // third  column
//     for(i=0; i<=bottom-3; i++){
//      result += matrix[i][right] + " ";
//      count++;
//     }
//     console.log(result);
//     break;
// }

// 3. Write a program to calculate the sum of all elements in a 2D array.

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let sum = 0;
// for(i=0; i<matrix.length; i++){
//     for(j=0; j<matrix[i].length; j++){
//         sum += matrix[i][j];
//     }
// }
// console.log(sum);


// *Objects with Levels*
// 1. Create an object with keys: name, age, and address. Print the name.

// let obj = {
//  name : "john",
//  age : 21,
//  address : "shin chain"
// }
// console.log(obj.name);
// // console.log(obj["name"]);

// // 2. Add a new key-value pair to an object dynamically.
// obj["second"] = "doe";
// console.log(obj);

// 3. Create a nested object with two levels (e.g., person > address > city) and print the city.

// let obj = {
//     person : "sinechain",
//     address : {
//         city : "bhopal"
//     }
// }

// console.log(obj["address"]["city"]);
// console.log(obj.address.city);
// console.log(obj.address);


// ### *Intermediate Level*
// *Arrays*
// 1. Reverse an array without using the built-in reverse() method.

// function reverse(arr){
//     let temp = []
//     for(i=arr.length-1; i>=0; i--){
//         temp.push(arr[i]);
//     }
//     console.log(temp);
// }
// reverse([1,2,3,4,5,6,7,8])

// 2. Write a function to find the second largest number in an array.

// function large(arr){
//     let temp = arr[0];
//     for(i=0; i<arr.length; i++){
//      if(temp<arr[i]){
//         temp = arr[i];
//      }
//     }
//     console.log(temp);
// }
// large([2,5,8,15,5,6,7,9]);

// 3. Remove duplicate elements from an array.
//  function duplecate(arr){
//     let temp = [];
//     for(i=0; i<arr.length; i++){
//         if(arr[i] != arr[i+1]){
//             temp.push(arr[i]);
//         }
//     }
//     console.log(temp);
//  }
//  duplecate([1,3,3,4,5,7,7,7,8,9]);



// *2D Arrays*
// 1. Write a program to transpose a 2D array (convert rows to columns).
// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for(i=0; i<matrix.length; i++){
//     let arr = [];
//     for(j=0; j<matrix.length; j++){
//         arr.push(matrix[j][i]);
//     }
//     console.log(arr.join(" "));
// }

// 2. Check if a given 2D array is symmetric (i.e., the matrix equals its transpose).
// let matrix = [
//     [1,0,1],
//     [0,1,0],
//     [1,0,1]
// ]
// for(i=0; i<matrix.length; i++){
//     for(j=0; j<matrix[i].length; j++){
//         if(matrix[i][j] != matrix[j][i]){
//             console.log("NO");
//             return;
//         }
//     }
// }
// console.log("YES");   

// 3. Flatten a 2D array into a 1D array.
// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// let arr = [];
// for(i=0; i<matrix.length; i++){
//     for(j=0; j<matrix.length; j++){
//         arr.push((matrix[i][j]));
//     }
// }
// console.log(arr.join(" "));


// *Objects with Levels*
// 1. Write a function to count the number of keys in a nested object.

// 2. Create an object representing a company with departments (e.g., HR, IT), 
// where each department contains a list of employees. Access the list of employees in IT.
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








// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// for(i=0; i<arr.length; i++){
//     let temp = [];
//     let count = 0;
//     for(j=0; j<arr.length; j++){
//         if((arr[j][i])%2==1){
//             // console.log(arr[i][j]);
//             // console.log(arr[j][i]);
//             // temp.push(arr[j][i]);
//             count += arr[j][i]
//         }
//     }
//     console.log(count)
// }



// let arr = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
// ]

// let array = [];
// for(j=0; j<arr.length; j++){
//     for(i=0; i<arr.length; i++){
//         array.push(arr[i][j]);
//     }
// }
// console.log(array.join(" "))

// let array = [];
// for(i=0; i<arr.length; i++){
//     for(j=0; j<arr.length; j++){
//         array.push(arr[j][i]);
//     }
// }
// console.log(array.join(" "))

// 22 21 20
// 12 11 10
// 02 01 00


// let arr = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
// ]

// for(i=arr.length-1; i>=0; i--){
//     for(j=arr.length-1; j>=0; j--){
//     console.log(arr[i][j])
//     }
// }


// 22 12 02
// 21 11 01
// 20 10 00

// for(i=arr.length-1; i>=0; i--){
//     for(j=arr.length-1; j>=0; j--){
//         console.log(arr[j][i]);
//     }
// }



// let arr = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
// ]

// 20 21 22
// 10 11 12
// 00 01 02

// for(i=arr.length-1; i>=0; i--){
//     for(j=0; j<arr.length; j++){
//         console.log(arr[i][j])
//     }
// }

// 00 11 22
// for(i=0; i<arr.length; i++){
//     for(j=0; j<arr.length; j++){
//         if(i==j){
//             console.log(arr[i][j])
//         }
//     }
// }

// for(i=0; i<arr.length; i++){
//     console.log(arr[i][i])
// }



// let arr = [
//     [ 1, 2, 3,7 ],
//     [ 4, 5, 6,4],
//     [ 7, 8, 9,2 ],
//     [10,11,12,13]
// ]
// 02 11 20



// 00 11 22 33        03 12 21 30

// for(i=0; i<arr.length; i++){
//     console.log(arr[i][i])
// }

// for(i=0; i<arr.length; i++){
//     console.log(arr[i][arr.length-1-i])
// }



// let arr = [
//     [ 1, 2, 3,7 ],
//     [ 4, 5, 6,4],
//     [ 7, 8, 9,2 ],
//     [10,11,12,13]
// ]
// for(i=arr.length-1; i>=0; i--){
//     console.log(arr[i][i])
// }
// // 30 21 12 03

// for(i=arr.length-1; i>=0; i--){
//     console.log(arr[i][arr.length-1-i])
// }


// let arr = [
//     [ 1, 2, 3,7 ],
//     [ 4, 5, 6,4],
//     [ 7, 8, 9,2 ],
//     [10,11,12,13]
// ]

// 17 56 89 10 13

// 00 03 11 12 21 22 30 33

// for(i=0; i<arr.length; i++){
//     console.log(arr[i][i]);
//     console.log(arr[i][arr.length-1-i]);
// }


// let arr = [
//     [ 1, 2, 3,7 ],
//     [ 4, 5, 6,4],
//     [ 7, 8, 9,2 ],
//     [10,11,12,13]
// ]

// 01 02 11 12 21 22 31 32  print all mid element 

// for(i=1; i<arr.length-1; i++){
//     for(j=1; j<arr.length-1; j++){
//         console.log(arr[i][j])
//     }
// }

// 13,12,11,10,7,4,1,2,3,7,4,2

// 33 32 31 30, 20 10 00, 01 02 03, 13 23

// for(i=arr.length-1; i>=0; i--){
//         console.log(arr[arr.length-1][i])
// }

// for(i=arr.length-2; i>=0; i--){
//         console.log(arr[i][0])
// }

// for(i=1; i<arr.length; i++){
//     console.log(arr[0][i])
// }

// for(i=1; i<arr.length-1; i++){
//     console.log(arr[i][arr.length-1])
// }












// function findsum(a){
//     let sum = 0;
//     for(k=0; k<a.length; k++){
//       sum += a[k];
//     }
//     return sum;
//   }
//   function max(arr){
//     let result = 0;
//     for(i=0; i<arr.length; i++){
//       let temp = [];
//       for(j=i; j<arr.length; j++){
//         temp.push(arr[j])
//         let sum = findsum(temp);
//         if(sum>result){
//           result = sum
//         }
//       }
//     }
//     return result
//   } 
//   console.log(max([5,4,-1,7,8]))









// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let m = 3;
// let n = 3;
// for(i=0; i<m; i++){
//     let count = 0;
//     for(j=0; j<n; j++){
//         if((arr[j][i])%2==1){
//             count += arr[j][i]
//         }
//     }
//     console.log(count)
// }




function findPivotElements(arr) {
  let n = arr.length;
  let result = [];
  for (let i = 1; i < n - 1; i++) {
      let isPivot = true;
      for (let j = 0; j < i; j++) {
          if (arr[j] >= arr[i]) {
              isPivot = false;
              break;
          }
      }
      for (let j = i + 1; j < n; j++) {
          if (arr[j] <= arr[i]) {
              isPivot = false;
              break;
          }
      }
      if (isPivot) {
          result.push(arr[i]);
      }
  }

  return result;
}
let arr = [1, 3, 4, 2, 6, 9, 8, 10];
console.log(findPivotElements(arr)); 
