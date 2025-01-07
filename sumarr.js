// 1. Find the Sum of All Elements in an Array
// Problem: Write a program that takes an array as input and calculates the sum of all its elements.
// Example Input: [1, 2, 3, 4, 5]

// function sum(array){
//     let temp = 0;
//     for(i=0; i<array.length; i++){
//         temp += array[i];
//     }
//     console.log(temp);
// }
// sum([1, 2, 3, 4, 5]);


// 2. Find the Maximum Element in an Array
// Problem: Write a function that finds the largest element in a given array.
// Example Input: [3, 1, 4, 1, 5, 9]

// function max(arr){
//     let num = arr[0];
//     for(i=1; i<arr.length; i++){
//         if(arr[i]>num){
//             num = arr[i];
//         }
//     }
//     console.log(num);
// }
// max([3, 1, 4, 1, 5, 9]);


// 3. Reverse an Array
// Problem: Write a function that reverses the elements of an array in place.
// Example Input: [1, 2, 3, 4]

// function EvenOdd(arr){
//     let even = 0; 
//     let odd = 0;
//      for(i=0; i<arr.length; i++){
//         if(arr[i]%2==0){
//             even++;
//         }
//         else{
//             odd++;
//         }
//      }
//      console.log(`even : ${even}  odd : ${odd}`);
// }
// EvenOdd([1, 2, 3, 4, 6])


// 4. Reverse an Array
// Problem: Write a function that reverses the elements of an array in place.
// Example Input: [1, 2, 3, 4]

// function reverse(arr){
//     let temp = [];
//    for(i=arr.length-1; i>=0; i--){
//     temp.push(arr[i]);
//     }
// console.log(temp);
// }
// reverse([1, 2, 3, 4]);


// 5. Find the Index of a Target Element
// Problem: Write a program that returns the index of a target element in an array. If the element is not found, return -1.
// Example Input: Array: [10, 20, 30], Target: 20

// function target(arr,target){
//     let temp = [];
//     for(i=0; i<arr.length; i++){
//         if(arr[i]===target){
//             temp.push(i)
//         }
//     }
//     if(temp.length == 0){
//         console.log(-1);
//     }
//     else{
//         console.log(temp);
//     }
// }
// target([10, 20, 30], 20);


// 6. Check if an Array is Sorted
// Problem: Write a function to check whether a given array is sorted in ascending order.
// Example Input: [1, 2, 3, 4, 5]

// function short(arr){
//     for(i=0; i<arr.length; i++){
//             if(arr[i]>arr[i+1]){
//                console.log("False");
//                return;
//             }   
//         }     
//         console.log("True");
// }
// short([1,2,3,4,5]);


// 7.Remove Duplicates from an Array
// Problem: Write a function to remove duplicate elements from an array.
// Example Input: [1, 2, 2, 3, 4, 4]

// function duplicat(arr){
//     let temp = [];
//     let num = arr[0];
//     for(i=0; i<arr.length; i++){
//         if(arr[i]!==arr[i+1])
//         temp.push(arr[i]);
//     }
//     console.log(temp);
// }
// duplicat([1, 2, 2, 3, 4, 4])



// 8. Find the Second Largest Element
// Problem: Write a program to find the second largest number in an array.
// Example Input: [5, 1, 9, 3, 7]

// function larger(arr){
//     let temp = arr[0];
//     for(i=0; i<arr.length; i++){
//        if(arr[i]>temp)
//         temp = arr[i];
// }
// console.log(temp);
// }
// larger([5, 1, 9, 3, 7])



// 9. Rotate an Array ******************************
// Problem: Write a function to rotate an array by k positions to the right.
// Example Input: Array: [1, 2, 3, 4, 5], k = 2
// Output: [4, 5, 1, 2, 3]

// function rotate(arr,k){
//     let temp = "";
//     for(i=0; i<arr.length; i++){
//         temp += arr[i];
//     }
//     console.log(temp);
// }
// rotate([4, 5, 1, 2, 3],2)




// 10. Merge Two Sorted Arrays
// Problem: Write a function to merge two sorted arrays into one sorted array.
// Example Input: Array1: [1, 3, 5], Array2: [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]

// function merge(arr1,arr2){
//     let result1 = [];
//     let result2 = [];
//     for(i=0; i<arr1.length; i++){
//         if(arr1[0]<=arr1[i]){
//             result1.push(arr1[i]);
//         }
//     }
//     for(i=0; i<arr2.length; i++){
//         if(arr2[0]<=arr2[i]){
//             result2.push(arr2[i])
//         }
//     }
//     let sum = result1.concat(result2);
//     sum.sort();
//     console.log(sum);
// }
// merge([1, 3, 5],[2, 4, 6])




// 11. Find the Frequency of Each Element ***********************
// Problem: Write a program that finds the frequency of each element in an array.
// Example Input: [1, 2, 2, 3, 3, 3]
// Output: {1: 1, 2: 2, 3: 3}

// function frequency(arr){
//     let temp1 = "";
//     let temp2 = arr[0];
//     let sum = 0;
//     for(i=0; i<arr.length; i++){
//         if(temp2 === arr[i]){
        
//         }
//         else{
//             sum += 1;
//         }
//         console.log(sum);
//     }
// }
// frequency([1, 2, 2, 3, 3, 3])


// 12. Find All Pairs with a Given Sum ****************************************
// Problem: Write a program to find all pairs of numbers in an array whose sum equals a given target.
// Example Input: Array: [1, 2, 3, 4], Target: 5
// Output: [[1, 4], [2, 3]]

// function pair(arr,target){
//     let temp = [];
//     for(i=0; i<arr.length; i++){
//         for(j=i+1; j<arr.length; j++){
//             if((arr[i]+arr[j])==target){
//               temp.push(arr[i]);
//               temp.push(arr[j]);
//             }
//         }
//     }
//     console.log(temp);
// }
// pair([1, 2, 3, 4],5)




// 13. Find the Difference Between Min and Max
// Problem: Write a function that finds the difference between the largest and smallest numbers in an array.
// Example Input: [8, 2, 5, 1, 9]
// Output: 8 (9 - 1)

// function difference(arr){
//     let temp1 = "";
//     let temp2 = "";
//     for(i=0; i<arr.length; i++){
//         if(arr[0]<arr[i]){
//             temp1 = arr[i];
//         }
//     }
//     for(i=0; i<arr.length; i++){
//         if(arr[0]>arr[i]){
//             temp2 = arr[i];
//         }
//     }
//     let result = temp1-temp2;
//      console.log(`${result} (${temp1} - ${temp2})`);
// }
// difference([8, 2, 5, 1, 9])




// 14. Shift All Zeros to the End *********************************************************
// Problem: Write a program that shifts all zeros in an array to the end while maintaining the order of other elements.
// Example Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// function sift(arr){
//     let temp1 = [];
//     let temp2 = [];
//     for(i=0; i<arr.length; i++){
//         if(arr[i]!=0){
//             temp1.push(arr[i]);
//         }      
//     }
//     for(i=0; i<arr.length; i++){
//         if(arr[i]==0){
//             temp2.push(arr[i]);
//         }      
//     }
//     console.log(temp1.concat(temp2));
// }
// sift([0, 1, 0, 3, 12])




// 15. Find the Missing Number
// Problem: Given an array of size n containing numbers from 1 to n+1, find the missing number.
// Example Input: [1, 2, 4, 5]
// Output: 3

