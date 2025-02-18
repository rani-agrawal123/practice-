
// function x(){
//     let a = 7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// let s = x();
// console.log(s)
// s();

// function x(){
//     var a = 900;
//     function y(){
//         let b = 100;
//     function z(){
//             console.log(a+b);
//         }
//        return z
//     }
//     a = 600;
//     return y
// }
// x()()()




// function add(a){
//     return function (b){
//        return function (c){
//         return a+b+c
//        }
//     }
// }
// console.log(add(2)(3)(2))




// function diff(a){
//     return function (b){
//         return function (c){
//             return function (d){
//                 return a-b-c-d;
//             }
//         }
//     }
// }

// console.log(diff(100)(90)(20)(10))


// function sendEmail(to){
//     return function (subject){
//         return function (body){
//             console.log(`send Email to ${to} with subject ${subject} with body ${body}`)
//         }
//     }
// }

// // let step1 = sendEmail("rani@2003");
// // let step2 = step1("school");
// // // step2()
// // step2("say hello");

// let ste1 = sendEmail("rani@2003")("ashish")("school")



// with arraow function
// let add = (a) => (b) => (c ) => a+b+c;
// console.log(add(1)(2)(3))




// Arrow funcion 
// const add = (a,b)=>{
//     console.log(a+b);
// }
// add(3,9);


// //  if we have single parameter so we don't need to use bracketes 
// const square = x =>{
//     return x*x;
// }
// console.log(square(5))




// js is allow to return a implicite return its  remove a return
//  keyword and perentheses
// implicite function is a arrow function without a return keyword
// const add = (a,b) => a+b;
// console.log(add(3,3))




// Examples
// normal
// function greet(name){
//     return `hello, ${name}`;
// }
// console.log(greet("Alice"));

// // arrow
// const greets = name =>{
//     return `hello, ${name}`;
// }
// console.log(greets("Alice"));

// // implicit
// const say = name => `hello, ${name}`;
// console.log(say("Alice"))

// normal 
// function ispositive(num){
//     return num>0;
// }
// console.log(ispositive(7));

// // arrow
// const positive = num =>{
//     return num>0;
// }
// console.log(positive(7));

// // impliite
// const positive2 = num => num>0;
// console.log(positive(7))

// // normal 
// function max(a,b){
//     return a>b ? a : b;
// }
// console.log(max(14,7));

// // arrow
// const max2 = (a,b) => {
//     return a>b ? a: b;
// }
// console.log(max2(3,8));

// // implicite
// const maxx = (a,b) => a>b ? a : b;
// console.log(maxx(2,7))









// destructuring
// var obj = {
//     a : 100,
//     b : 50, 
//     c : 30,
// }
// // console.log(obj["a"])
// var{a,b,c} = obj;
// console.log(a,b,c)

// var arr = [10,20,30];
// var [first,,third,] = arr;
// console.log(third)  

// array destructure
// var arr = [1,2,3,4,5];
// var [a,,c,,d,e=10] = arr;
// console.log(a,c,d,e);

// // object destructure
// var person = {
//     name : "johan",
//     age : 21
// }
// // var {age,name} = person
// // console.log(age,name)

// // rename
// var {name:username,age:userage} = person;
// console.log(userage, username);


// nested array 
// var nested = [ 1, [ 2, 3 ], 4 ];
// var [ first, [ one, second ], third ] = nested;
// console.log(first, second, third, one);

// nested obj
// var nestedobj = {
//     person: {
//         name: "johan",
//         address: {
//             city: "new yark",
//             zip: 1001
//         },
//     },
// };
// var {
//     person : {name,address:{city,zip}},
// } = nestedobj;
// console.log(name,city,zip);



// swapping
// var a = 1;
// var b = 2;
// var [x,y] = [b,a];
// console.log(x,y)

// function getuser(){
//     return {id:1,name:"john",age:34};
// }
// var {id,name} = getuser();
// console.log(id)


// passing argument to function using object des.
// function display(user){
//     var{age,name} = user;
//     console.log(`Name : ${name}, Age: ${age}`)
// }
// var user = {name : "Alice", age : 30};
// display(user)


// var book = {
//     title : "Book",
//     auther : "Auther",
//     year : 2020
// }
// var {title,auther} = book;
// console.log(title,auther)



// var user = {
//     profile : {
//         name : "jane",
//         address : {
//             city : "Los Angel",
//             state : "ca",
//         },
//     },
// };

//  var {profile:{name,address:{city,state}}} = user;
//  console.log(name, city)



 
// spread and rest

// this is spread operator
// var arr1 = [1,2,3];
// var arr2 = [4,5,6];
// var add = [...arr1, ...arr2];
// console.log(add);

// var obj1 = {
//     a : 1,
//     b : 2
// };
// var obj2 = {
//     c : 3,
//     b : 4,
// };

// var merge = {...obj1,...obj2};
// console.log(merge)

// var copy = {
//     ...obj1,
// }
// console.log(copy)


// var nestedObj = {
//     a:1,
//     b:{
//         c : 2,
//     },
// }

// var copy = {
//     ...nestedObj,
// }
// copy.b.c = 2000;;
// console.log(copy);
// console.log(nestedObj)


// var nums = [1,2,3];
// var newnum = [...nums,4,5];
// console.log(newnum);









// rest perameter
// function sum(...num){
//     console.log(num);
// }
// sum(1,2,4,3,5,6);
// sum(1,2,4,3,5,6,8,9,6);
// sum(1,2,4,3,5,6);
// this is given a output as a array 

// sum of all number
// function add(...nums){
//     let total = 0;
//     for(let num of nums){
//         total += num;
//     }

//     return total;
// }
// console.log(add(1,3,4,5,6))

// var [,first,...restElement] = [10,30,40,50];
// console.log(first, restElement)

// var obj = {a:1,b:2,c:3};
// var {a,...rest} = obj;
// console.log(a,rest)


// function multi(factor, ...num){
//     var result = factor;
//     for(i=0; i<num.length; i++){
//         result = result*num[i]
//     }
//     return result;
// }
// console.log(multi(4,10,12,13))


// nullish coalescing
// var input = inputFromApi ?? defaultValue






// function sum(...num){
//     console.log(num);
// }
// sum(1,2,3,4,4,5);
// sum(1,2,3,4,4,5,9,3,8);

// function sum(...num){
//     let total = 0;
//     for(let nums of num){
//         total += nums;
//     }
//     return total;
// }

// console.log(sum(2,3,4,5,6,7,8))


// let arr = [1,2,3,4,5,6,7,9];

// let [a,b,,,c,d,s] = arr;
// console.log(a,b,s,d,c)

// var [,a,b,,,...res] = arr;
// console.log(a,b,res)


// var obj = {a:1, b:2, c:3, d:6};
// var {a,b, ...res} = obj;
// console.log(a,b,res)

// var input = 10;
// var output = input ?? "default";
// console.log(output);