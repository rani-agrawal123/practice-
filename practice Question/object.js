// ternary operator
// codition ? true : false

// let age = 16;
// let isage = age>=18 ? "yes" : "no";
// console.log(isage)


// let score = 1000;
// let grade = score>=90 ? "A":
//             score>=80 ? "b":
//             score>=70 ? "c"
//              : "f";
//              console.log(grade)


// let obj = {
//     name : "rani",
//     age : 21,
//     class : "a"
// }
// obj.setion = "c"
// console.log(obj)

// delete obj.class;
// console.log(obj)

// function sayhi(){
//     return "hi";
// }

// function sayhel(){
//     return "hello";
// }

// let messag =false
// let result = messag ? sayhi() : sayhel();
// console.log(result)

// let student = {
//     name : "neha",
//     age : 21,
//     grade : "a",
//     place : true
// };

// for(let key in student){
//     console.log(typeof student[key])
//     if(typeof student[key] == "string"){
//           console.log(key)
//     }
// }
//     if(typeof student[key] == "boolean"){
//         console.log(student[key])
//     }
// }

// let price = {
//     bread : 2,
//     milk : 1.5,
//     cheese : 5,
// };

// for(let key in price){
//    price[key] = price[key]*0.9;
    
// }

// console.log(price)

// function accur(s){
//     let obj = {};
//     for(i=0; i<s.length; i++){
//         if(obj[s[i]] == undefined){
//             obj[s[i]] = 1;
//         }
//         else{
//             obj[s[i]]++
//         }
//     }
//     console.log(obj);
//     for(let key in obj){
//         if(obj[key]==1){
//             console.log(key);
//         }
//     }
// }
// accur("abbbccs")


// let person = {
//     name : "john",
//     age : 25,
//     greet : function(){
//         console.log("welcome");
//     },
// };

// person.greet()

// let obj = {
//     name : "john",
//     age : 21,
//     getDetails : function(){
//         // console.log("hello everyone");
//         return this.name + this.age
//     }
// }
// console.log(obj.getDetails())


// let a = 10; 
// let b =20;
// let objj = {
//     a:1,
//     b:2,
//     sum:function(){
//         console.log(this.a+this.b);
//     },
//     diff:function(){
//         console.log(a-b);
//     }
// }
// objj.sum();
// objj.diff()

// l = 10;
// b = 30
// let obj = {
//     l : 20,
//     b : 10,
//     perimeter : function(){
//         console.log(2*(this.l+this.b));
//     }
// }
// obj.perimeter()

// let obj = {
//     accoun : "abj",
//     balance : 1000,
//     deposit : function(amount){
//         let res =  this.balance + amount;
//         console.log(res)
//     },

//     withdrow: function(amount){
//         res = this.balance - amount;
//         console.log(res)
//     }
// }
// console.log(obj.deposit(2000));
// console.log(obj.withdrow(500))

// var num1 = 20;
// var num2 = 100;
// function sum(x,y){
//     var res = x*y;
//     return res;
// }
// console.log(sum(num1,num2))


// function multiply(a,b){
//     return a*b;
// }
// function calculate(x,y){
//     return multiply(x,y);
// }

// var result = calculate(4,3);
// console.log(result);

// function outer(){
//     inner();
//     function inner(){
//         console.log(outerVariable);
//     }
// }
// var outerVariable = 99;
// outer();

// let x = 10;
// function f(){
//     var y = 20;
//     function g(){
//         var z = 30;
//         console.log(x+y+x);
//     }
//     g();
// }
// f()



// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// // let out = add(1);
// // let res = out(2);
// // console.log(res(3))


// let out = add(2)(3)(1);
// console.log(out)
