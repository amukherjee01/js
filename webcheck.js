let userEmail = 'abc123uhyer'
let password = '1234'


let userChecker = function(mystring){
    if((mystring.includes(123)) && (mystring.lenght > 6)){
        return true
    }
    return false
}

console.log(userChecker(userEmail));