if (3>7) {
    console.log('hello')
}else {
    console.log('Hi')
}

if (false){
    console.log('I am in if block')
}else if (true) {
    console.log('I am in else if block')
}else{
    console.log('I am in else block')
}

let whoIsHere = ''

if (whoIsHere === 'user' ) {
    console.log(`Greeting message for ${whoIsHere}`)
    console.log('Allow access to view all the courses')
}else if (whoIsHere === 'teacher') {
    console.log(`Greeting message for ${whoIsHere}`)
    console.log('Allow access to view his/her course')
}else{
    console.log('Please verify your email')
}


let grade = 10

while (grade > 0){
    console.log('grade is greater than 0.. continue')
    grade = grade - 1
}

// ls = prompt('hello')

// arr = [12,34,55,44,34,21]
