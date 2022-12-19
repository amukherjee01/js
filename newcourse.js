// var fullName = "Aditya Mukherjee"

// var courseName = "React js Bootcamp"

// console.log(courseName)

// var loggedIn = false;

// var loggedCount = 10;

// console.log(loggedCount);

// var paymentMode;
// console.log(paymentMode);

// vedio3

//Operators

// var num1 = 7;
// var num2 = 10;
// console.log(num1 * num2);

// var answer = num1<num2;
// console.log(answer);
// console.log(typeof answer);

// var listingPrice = 799;
// var sellingPrice = 199;

// var price = (listingPrice - sellingPrice)/listingPrice *100
// console.log(price);

// var discountPercentage = Math.round(price);

// console.log(discountPercentage);

// let arr = new Array();
// arr.push(10);
// arr.push(14);
// arr.push(20);
// console.log(arr);
// console.log(typeof arr);


//Conditional operator

var email = true;
var facebook = false;
var gmail = false;

if (email || facebook || gmail) {
    console.log("Logged In");
}else  {
    console.log("Loggin Failed");
}

//Ternary operator

var authenticated = true;

authenticated ? console.log("Logout button") : console.log("Login button");

//Swicth case

var user = "testprep"
switch (user) {
    case "admin":
        console.log("Full Access");
        break;
    case "testprep":
        console.log("Can create/detele tests");
        break;
    case "subadmin":
        console.log("Get Access to create and delete course");
        break;
    case "user":
        console.log("Can consume the content");
        break;
    default:
        console.log("Please input valid user");
        break;
}

//Truthy and falsy values

//--Falsy values--
// undefined
// null
// 0
// ''
// NaN

var username = "2"

if (username) {
    console.log("Condition is true");
}

if (2===username) {
    console.log(`${username} is equals to 2`);
}

console.log(2+ "2");

//Function

function sayHello(name) {
    console.log(`hey there ${name}`);
}

sayHello("aditya");
sayHello("sammy");

function namastey() {
    return "hello world"
}

console.log(namastey());

//Define a function that can asnwer the role of a user
//input : getUserRole(name, role)

let getUserRole = function(name, role) {
    
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
        case "subadmin":
            return `${name} is subadmin with access to create/delete courses`;
        case "testprep":
            return `${name} is testprep with access to create/delete tests`;
        case "user":
            return `${name} is user who consumes content`;
        default:
            return `${name} access denied. Please contact admin`;
    }
}

console.log(getUserRole("Hitesh","heheh"));

//Context

//window is the global context in js in the browser. Not global context for node

// var myName = "sameeksha";

// if (myName === window.myName) {
//     console.log("This is a true statement");
// }

var s = String(10);
console.log(typeof s);

//Code hoisting

/*--
    variable declaration are scanned and made undefined---
    functions declarations are scanned and made available in global context
*/

tipper("10"); //tipper will be available 

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}


console.log(name); // undefined

var name = "shubodeep";

function sayName() {
    var name = "Mr H"
    console.log(name);
}

sayName();

console.log(name);  // Takes the name from global context

//Scope chaining

var fname = "Mukesh";

function sayFname() {
    var fname = "Mr. Girish";
    console.log(fname);
    sayFnametwo();

    function sayFnametwo() {
        var fname = "Mr. Ramesh";
        console.log(fname);
    }
}

sayFname();
console.log(fname);


//Array

var countries = ["India","USA","Rusia","Japan","Pakistan"];

var states = new Array("Rajasthan","Lucknow","Kanpur","Mumbai","Delhi");

console.log(states);
console.log(states[0]);
console.log(states.length);

states.pop();
console.log(states);

states.unshift("NEW VALUE");
 
console.log(states);

states.shift()

console.log(states);

states.splice(2,1,"hehe");

console.log(states);

console.log(states.indexOf('Lucknow'));

console.log(states.indexOf('newwyy'));

console.log(Array.from("hitesh"));

// var newName = "John";
// var newArray = new Array();
// for (let i = 0; i < newName.length; i++) {
//     newArray.push(newName[i]);
    
// }

// console.log(newArray);


//Callback and arrow function

// function isEven(n) {
//     if (n%2 === 0) {
//         return true;
//     }

//     return false;
// }


// console.log(isEvenNum(4));

var isEven = (n) => (n%2 === 0);
    

console.log(isEven(4));

// var result = [2,3,6,8,10].every(isEven);
// console.log(result);

var result = [2,3,4,6,8,10].every((element)=> element%2 === 0);

console.log(result);

//Fill and Filter and slice

var testArray = [2,3,4,5,7,5,8];

console.log(testArray.fill("h",2,5));

const myNumber = [23,24,25,55,56,78,43,21];

const result1 = myNumber.filter((num)=>(num > 55));

console.log(result1);

var testArrayNew = ["hello","hi","welcome","by","thankyou"]

console.log(testArrayNew.slice(1,4));

//Objects in js

var userobj = {
    firstname : "Aditya",
    lastname : "Mukherjee",
    role : "Admin",
    loginCount : 20,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.firstname} is enrolled in total of ${this.courseList.length} courses`
    }
}

console.log(userobj.firstname);

userobj.loginCount = 44;

console.log(userobj.loginCount);

console.log(userobj);

console.table(userobj);

userobj.buyCourse("Angular");
userobj.buyCourse("Python");
userobj.buyCourse("C#");

console.log(userobj.courseList);
console.log(userobj.getCourseCount());

userobj.buyCourse("ReactJs");
userobj.buyCourse("AWS");

console.log(userobj.getCourseCount());





// var iphoneProperty = {
//     name : "Iphone 12",
//     modelNum : "QWETYR77",
//     color : "Green",
//     Storage : "128 GB",
//     price : 70000,
// }

// console.table(iphoneProperty);



//For Loop in js
/*
*
**
***
****
*****
*/


//For of and for in loop

const names = ["youtube","instagram","facebook","amazon","netflix"]

//forof loop used with array mostly
// for (const i of names) {
//     console.log(i);
// }

const symbols = {
    ig: "instagram",
    yt: "youtube",
    fb: "facebook",
    az: "amazon",
    nt: "netflix"
}

//forin loop used with objects mostly
for(const s in symbols){
    console.log(symbols[s]);
}

//Es6 spread and rest operator

let totalsum = function(...numbers){
    console.log(numbers); //convert list into array rest operator (...numbers)
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        
    }

    return `The sum of numbers is ${sum}`
}

console.log(totalsum(100,13,45,68,70,92));

let addMoney = [12,45,67,88,54,32];

console.log(Math.max(...addMoney)); //converts array into list  spread operator (combines the list)(...addMoney)

//Spread
let namesarr = ["aditya","ajay","vivek"];

function getNames(name1,name2,name3){
    console.log(name1,name2,name3);
}

getNames(namesarr[0],namesarr[1], namesarr[2]);
getNames(...namesarr);

//Object k sath rest

 var students = {
    name : "aditya",
    age : 28,
    hobbies : ["cricket","cooking"]
}

console.log(students.age);

// const {age,hobbies} = students;  // Array destructuring
// console.log(age,hobbies);

const {age, ...rest} = students;
console.log(rest);

//set in ES6
// Note : Set stores unique values
let marvel = new Set(["Batman","IronMan","Batman"])
marvel.add('superman')
console.log(marvel);

for (const m of marvel) {
    console.log(m);
}
console.log(marvel.has('wonder women')); //checks if the set conatains it

//Getters and setters in ES6
class Uber{
    constructor(name){
        this._name = name;
    }

    get myname(){
        return this._name;
    }

    set myname(val){
        if ((val.length >5) && (typeof val === 'string')){
            this._name = val;
        }

        console.error("could not set the name")
    }

    static myfunc(){
        console.log("hii this is static function.No need to create object to call me");
    }
}

let driver = new Uber('Mukesh');
console.log(driver.myname);

driver.myname = 'Dee';
console.log(driver.myname);

Uber.myfunc(); //Static function can be called by Class itself


//Callbacks, promises, Asyn/Await

var datas = [
    {name: "Ajay", proffession: "Software Engineer"},
    {name: "Suraj", proffession: "Software Engineer"},
]

function getDatas() {
    setTimeout(() => {
        datas.forEach((data,index)=>{
            console.log(data.name);
        })
    }, 1000);
}

// function createDatas(newdata, callback) {

//     setTimeout(() => {
//         datas.push(newdata);
//         callback();
//     }, 2000);
// }


//createDatas({name:"Manoj", proffession:"Software Engineer"}, getDatas)   //passing getdatas as reference (callback)

//Promise
function createDatas(newdata) {

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            datas.push(newdata);
            let error = false;
            if (!error) {
                resolve()
            }else{
                reject("kuch to sahi nhi hai");
            }
        }, 2000);
    })
  
}

// createDatas({name:"Manoj", proffession:"Software Engineer"}).then(getDatas).catch(err => console.log("Kuch to sahi nhi hai"));
// getDatas();

//Asyn / Await


async function start() {
    await createDatas({name:"Manoj", proffession:"Software Engineer"})
    getDatas();
}

start();


//Closures in js

var sum = function (a) {
    console.log("Live Viewer " + a);
    var c = 10;
    return function (b) {
        return a+b+c;
    }
}

var res= sum(100);
console.log(res(7));

var sum1 = function (a,b,c) {
    
    return {
        getSumTwo : function(){
            return a+b;
        },

        getSumThree : function(){
            return a+b+c;
        }
    }
}


var store = sum1(12,10,15);
console.log(store.getSumTwo());
console.log(store.getSumThree());

//Call/apply and bind in js

let userDetails = {
    name : "Abhishek Sharma",
    age : 28,
    Designation  : "Software Engineer",
   
}

let printDetails = function(state, country) {
    console.log(this.name + " " + state + " " + country);
}

let userDetails2 = {
    name : "Satish Sharma",
    age : 29,
    Designation  : "Software Engineer",
}

printDetails.call(userDetails, "Delhi", "India")

//Function borrowing
// userDetails.printDetails.call(userDetails2);

printDetails.call(userDetails2, "Mumbai", "India");

//apply

printDetails.apply(userDetails, ["Pune","jaipur"]);

//Bind

let newfunc = printDetails.bind(userDetails2, "Banglore", "Hyderabad");

newfunc();

//Higher order function

/*
    forEach
    filter
    map
    sort
    reduce
*/

