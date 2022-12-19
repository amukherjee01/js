var john = {
    name : 'I am John',
    age : 24
}

var doe = {
    name : 'I am Doe',
    age : 25
}

var marry = {
    name : 'I am Marry',
    age : 29
}

let users = new Map()

console.log(users);
users.set('john', john)
users.set('doe', doe)
users.set('marry', marry)

console.log(users.get('john'))
console.log(users.keys())
console.log(users.values())
console.log(users.entries());
console.log(users)

for (const value of users.values()) {
    console.log(value.name)
}

for (const [key, value] of users.entries()) {
    console.log(key + '=>' + value.name)
}

console.log(users)