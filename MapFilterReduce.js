let arr = [14,55,80, 85,90];

//Map
let newArray = arr.map((element)=>{
    return element + 1
})

console.log(newArray);

//Filter
let newFilterArray = arr.filter((element, index)=>{
    return element>50;
})

console.log(newFilterArray);


//Reduce
let newReduceArray = arr.reduce((a1, a2)=>{
    return a1 + a2;
})

console.log(newReduceArray);
