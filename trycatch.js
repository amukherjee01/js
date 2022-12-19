const dollorToRs = (dollor) => {
    if(typeof dollor === 'number'){
        return dollor * 64
    }
    else {
        throw Error('Amount must be in ruppes')
    }
}


try {
    let amountinRs = dollorToRs('five')
    console.log(amountinRs)    
} catch (error) {
    console.log(error)
}

console.log('I will not run if there is crash')

let myobj = {
    'name': 'marry',
    'age' : 24
}

let myobj1 = '{"name" : "aditya", "age" : 45}'

let jsonobj = JSON.parse(myobj1)

console.log(typeof jsonobj)



let strob = JSON.stringify(myobj)
console.log(typeof strob)