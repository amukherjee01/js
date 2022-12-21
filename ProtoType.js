
// const obj = new Object({
//     name : "aditya",
//     rollno : 2
// })

const obj = {
    name : "aditya",
    getName : function () {
        return this.name
    },
    getRoll : function(){
        return this.rollno
    }
}

const obj2 = {
    rollno : 2,
    name : "vivek",
    __proto__ : obj
}

const obj3 = {
    class : "MCA",
    __proto__ : obj2
}

console.log(obj);
console.log(obj2.name, obj2.rollno);
console.log(obj2.getName());
console.log(obj2.getRoll());
console.log(obj3.getName());

Array.prototype.show = function(){
    return this;
}

Array.prototype.ConvertIntoObject = function(){
    let newobj = {};
    this.forEach((element)=>{
        newobj[element] = element
    })

    return newobj;
}

const cities = ["varanasi"];
console.log(cities.show());
console.log(cities.ConvertIntoObject());

function MyProtoType(name){
    this.name = name;
}

MyProtoType.prototype = obj3;
const myproto = new MyProtoType("Girish");
console.log(myproto.getName());
console.log(myproto.getRoll());
console.log(myproto.class);