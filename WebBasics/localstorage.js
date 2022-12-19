// alert('hello')
localStorage.setItem('hero','thor')
localStorage.setItem('Todo','Buy Milk')

let myarr = [12,34,45]

let myarrstring = JSON.stringify(myarr)

localStorage.setItem('arr',myarrstring)

let getstring = localStorage.getItem('arr')
let myarrobj = JSON.parse(getstring);
console.log(myarrobj[1]);

let heroname = localStorage.getItem('hero')
console.log(heroname)

let arrname = localStorage.getItem('arr')
console.log(arrname)

localStorage.removeItem('Todo')

// localStorage.clear()

const student = {
    name: 'aditya',
    age : 24,
    isActive : true
}

let studentobjToString = JSON.stringify(student)

console.log(typeof studentobjToString);
console.log(studentobjToString);

localStorage.setItem('student', studentobjToString)

let studentjsonstring = localStorage.getItem('student')

let studentobj = JSON.parse(studentjsonstring)

console.log(studentobj.name, studentobj.age, studentobj.isActive)



