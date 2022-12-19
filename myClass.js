class User{
    constructor(firstname, lastname, credits){
        this.firstname = firstname
        this.lastname = lastname
        this.credits = credits
    }

    getFullName(){
        return`${this.firstname}  ${this.lastname} is my fullname`
    }

    editFullName(newname){
        const myname = newname.split(' ')
        this.firstname = myname[0]
        this.lastname =  myname[1]
    }
}

class Teacher extends User {
    constructor(firstname, lastname, credits, subject){
        super(firstname, lastname, credits);
        this.subject = subject
    }

    getFullName(){
        return`${this.firstname}  ${this.lastname} is my fullname and i teach ${this.subject}`
    }

    favDrink(drink){
        console.log(`My fav drink is ${drink}`)
    }
}

const john = new Teacher('John','Anderson',34, 'javascript'); 
console.log(john);
console.log(john.getFullName());
john.editFullName('aditya mukherjee')
console.log(john.getFullName());
john.favDrink('ice tea');
// const sammy = new User()
