var sum = function(a){
    console.log("Live viewers " + a);
    var c = 10; // a and b having lexical scope. Availabe after execution of the below function
    return function(b){
        return a + b + c;
    }
}

let store = sum(4);
console.log(store(20));

var sumFunc = function(a,b,c){
    return {
        someOfTwo : function(){
            return a + b; //a and b available inside function
        },
        someOfThree : function(){
            return a+b+c; // a , b, c available 
        }
    }
}

let result = sumFunc(10,20,30);
console.log(result.someOfTwo());
console.log(result.someOfThree());