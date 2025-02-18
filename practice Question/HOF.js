
// function x(){
//     console.log("Namaste");
// }

// function y(x){
//     x();
// }


// const radius = [3,2,1,4];;
// const area  = function(radius){
//   return Math.PI * radius*radius;
// }

// const calculate = function (radius,logic){
//  const output = [];
//  for(let i=0; i<radius.length; i++){
//     output.push(logic(radius[i]));
//  }
//  return output;
// }
// console.log(calculate(radius, area));





// HOF methods 

// map filter and reduce

// map 
// let arr = [1,4,5,7]
// function binary(x){
//     return x.toString(2);
// }

// let res = arr.map(binary)
// console.log(res);

// let res = arr.map((x)=> x.toString(2));;
// console.log(res)



// filter
// let arr = [1,4,5,7,9,6,13];
// this is called implicit method for function
// let res = arr.filter((x) => x>4);
// console.log(res)




// reduce
// let arr = [1,4,5,3,2];

// let output = arr.reduce(function (acc,curr){
//     res = acc+curr;
//     return res;
// },0);
// console.log(output);


// let out = arr.reduce(function (max,curr){
//     if(curr > max){
//         max = curr;
//     }
//     return max;
// },0);
// console.log(out)


// let objArray = [
//     {firstname : "asdf", lastname : "hjkl", age:19},
//     {firstname : "wfre", lastname : "abc", age:5},
//     {firstname : "asdf", lastname : "hjkl", age:19},
//     {firstname : "asdf", lastname : "abc", age:19}
// ]

// let res = objArray.filter((oa) => oa.lastname === "abc");
// console.log(res)


// let res = objArray.reduce(function (index, ele){
//     if(index[ele.age]){
//         index[ele.age] = ++index[ele.age];
//     }
//     else{
//         index[ele.age] = 1;
//     }
//     return index;
// },{});
// console.log(objArray)


// let arr = [1,2,3,4,5,6,7,8,9];

// let res = arr.map((x) => x+3);
// // let res = arr.filter((x) => x>3);

// console.log(res)



// let num = [1,2,3];
// let res = num.reduce(function (acc,curr){
//     return acc+curr;
// },0)
// console.log(res)

// let num = [1,2,3,4];
// let res = num.reduce((acc,curr) => acc+curr,0);
// console.log(res)









// json 
// let users = [
//     {id:1, name:"alice", department : "hr"},
//     {id:3, name:"ice", department : "it"},
//     {id:2, name:"al", department : "hr"},
// ];
// console.log(users);

// let json = JSON.stringify(users);
// console.log(json);

// let parse = JSON.parse(json);
// console.log(parse)

// let users = [
//     {id:1, name:"alice", department : "hr"},
//     {id:3, name:"ice", department : "it"},
//     {id:2, name:"al", department : "hr"},
// ];

// users.forEach(users =>{
//     users.active = true;
// })
// console.log(users) 

// const updat = users.map((users) =>{
//     if(users.department == "hr"){
//         return {...users, department : "ca"}
//     }
//      return users;
// })
// console.log(updat)

// let filter  = users.filter((ele)=>{
//     if(users.name == "alice"){
//         return users.name;
//     }
// })

// console.log(filter)


// let arr = [1,2,3,4,5];
// console.log(arr.slice(2,-1));
// console.log(arr);
// // console.log(arr.slice(2,-1));

// // arr.splice(startindex,deleteindex,item)

// let res = arr.splice(2,2);
// console.log(arr.splice(2,2,9));
// console.log(arr)





// call aplly bind

// let student ={
//     firstName : "alice",
//     lastName : "doe",
//     age:20,
// }
// let teacher ={
//     firstName : "al",
//     lastName : "doe",
//     age:20,

// }
// let child ={
//     firstName : "shin",
//     lastName : "chin",
//     age:20,

// }

// function getmail(){
//     return `${this.firstName} ,${this.lastName} @test`;
// }
// console.log(getmail.call(teacher));
// console.log(getmail.call(child))

// function choose(sub1,sub2){
//  return [sub1,sub2]
// } 

// console.log(choose.call(teacher,"math","english"))
// console.log(choose.apply(teacher,["math","english"]))
// console.log(student.getmail());





// Async js
// console.log("one")
// setTimeout(()=>{
//     console.log("hello")
// },4000)
// console.log("two")
// console.log("two")


// function sum(a,b){
//     console.log(a+b);
// }
// function fun(a,b,callback){
//     callback(a,b);
// }
// fun(2,3,sum);


// function getdata(data,next){ 
//     setTimeout(()=>{
//         console.log("data",data);
//         if(next) next();
//     },3000)
// }
// getdata(1,()=>{
//     getdata(2, ()=>{
//         getdata(3, ()=>{
//             getdata(4)
//         })
//     })
// })



// function sum(a,b,next){
//     setTimeout(()=>{
//      console.log(a+b);
//      if(next) next()
//     },2000)
// }

// sum(1,2,()=>{
//     console.log("get data 2.....")
//     sum(2,3,()=>{
//         console.log("get data 3.....")
//         sum(3,4)
//     })
// })

// function getdata(data,next){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",next);
//             resolve("success")
//             if(next) next()

//         },3000)
//     })
// }
// getdata(123)



// const getpromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am promise");
//         // resolve("success");
//         resolve("reject");
//     })
// };

// let promise = getpromise();
// promise.then(()=>{
//     console.log("fulfild")
// })

// promise.catch(()=>{
// console.log("reject")
// })







// function async(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//            console.log("some data");
//            res("success");
//         },4000);
//     })
// }

// async(1)




// async function hello(){
//     console.log("hello")
// }

// hello();

// function getdata(data){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("data",data);
//             res("success");
//         },2000);
//     })
// }

// async function get(){
//     await getdata(1);
//     await getdata(3);
//     await getdata(4);
//     await getdata(5);
//     await getdata(6);
//     await getdata(9);
// }
// get()







//  factory function 
// function create(name,dob){
//     return {
//         name:name,
//         birdath:dob,
//         calculate:function(){
//             return ` ${this.name} and age is ${2024-this.birdath}`;
//         },
//     };
// }
// let res = create("tushar",2000)
// console.log(res.calculate())

// function create(name,date){
//     return {
//         name :name,
//         date : date,
//         calculate:function(){
//             return `${this.name} age is ${2024-this .date}`
//         },
//     }
// }
// let res = create("rani",2003);
// console.log(res.calculate())

// function phone(model,storage,color){
//     return {
//         model : model,
//         storage : storage,
//         color : color,
//         getinfo : function(){
//             return `${this.model} , ${storage} , ${color}`
//         },
//     }
// }
// let res = phone("15 pro max",256,"black");
// console.log(res.getinfo())


// function Fun(name,dob){
//     this.name = name,
//     this.dob = dob,
//     this.calculate = function (){
//        return `${this.name} , ${dob}`
//     }
// }
// let s1 = new Fun("heha",20);
// console.log(s1.calculate())


// function Phone(model, storage, color) {
//     this.model = model,
//         this.storage = storage,
//         this.color = color,
//         this.getinfo = function () {
//             return `${model} , ${storage} , ${color}`
//         }
// }
// let res = new Phone("15 pro max", 256, "black");
// console.log(res.getinfo())



// let animal = {
//     eats : true,
//     walk : function(){
//         console.log("Animal Walk");
//     }
// };

// let rabbit = Object.create(animal);
// rabbit.jumps = true;

// console.log(rabbit.eats);
// rabbit.walk();

// console.log(rabbit.__proto__ === animal)



// let nums = [10,20,30,40];
// console.log(nums.__proto__);


// function Person(name,dob){
//     this.name = name;
//     this.dob = dob;
// }

// // prototype object
// Object.prototype.getfullNAme = function(){
//     return this.name + " "+ this.dob;
// }
// let person1 = new Person("john",20);
// console.log(person1)


// Object.prototype.getfullname = function(){
//     return this.name+" "+this.dob;
// }
// let person1 = new Person("john",50);
// console.log(person1)

// object create
// const prottype = {
//     getfullname(){
//         return this.name+" "+this.dob;
//     },
// }

// Person.prototype = Object.create(prottype)

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
  person.fullName.call(person1);