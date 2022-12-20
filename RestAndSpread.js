//Rest Example

function addNumber(a,b,...other){
    console.log(other);
    let sum = a + b;
    for (let i = 0; i < other.length; i++) {
        sum = sum + other[i];
    }

    return sum;
}

let sum = addNumber(10,20,30,40,50);
console.log(sum);

//Spread example
let names = ["aditya", "mukesh", "ajay"];

function getNames(name1, name2, name3){
    console.log(name1, name2, name3);
}

getNames(names[0], names[1], names[2]);
getNames(names);
getNames(...names); //best way

//rest with object
let students = {
    name : "aditya",
    age : 29,
    subject : ["physics", "maths"]
}

// let age = obj.age;
// console.log(age);

const {age, ...rest} = students;
console.log(age);
console.log(rest);

//Spread example
let studentObj = {
    ...students,
    age : 30
}

console.log(studentObj);