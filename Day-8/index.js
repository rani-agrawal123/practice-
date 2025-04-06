
// console.log("hei");

// function greet(){
//     console.log("hello")
//     return "yes"
// }
// console.log(greet());


// function greet(){
//     console.log("hello")
// };
// function sayhi(fn){
// fn();
// }
// sayhi(greet)



// hof
// foreach,map,filter,reduce

// var arr = [1,2,3,4,5];

// let res = arr.forEach((ele,index,arr)=>{
//   console.log(ele);
//   return ele
// });


// console.log(arr)
// console.log(res)
// let res = arr.map((ele,ind,arr)=>{
//    console.log(ele);
//    return ele
// })
// console.log(arr)
// console.log(res)

// filter
// var arr = [1,2,3,4,5];
// let res = arr.filter((ele,i,arr)=>{
// return ele%2==0
// })
// console.log(arr)
// console.log(res)



// reduce
var arr = [1,2,3,4,5];
let res = arr.reduce((curr,acc)=>{
  return acc+curr
},0)
console.log(res);