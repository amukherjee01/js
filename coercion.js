console.log('5'-5)
console.log('5' + 5)

let getType = typeof (undefined)
console.log(getType)

const adder = true + 5
console.log(adder)

const loginDetails = ' '  // interprets as true

loginID = loginDetails[0]

if (loginDetails) {
    console.log('Allow user to login')
}else{
    console.log('Invalid logins')
}

// Things interpreted as false in js
// false
// 0
// ''
// undefined
// null
