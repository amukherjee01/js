//datetype - Array

const superHeros = ["Spiderman","Thor","IronMan","BatMan","Shaktiman"]
console.log(superHeros);
console.log(superHeros[0]);
console.log(superHeros[superHeros.length-1]);
console.log(`We have ${superHeros.length} superHeros`);

//Three methods of array

const numbers = ['one','two','three','four','five','six']

//In the start
lsString = numbers.shift()  //Remove elements from starting
lsString1 = numbers.shift()
console.log(numbers);
console.log(lsString);

numbers.unshift('seven')  //add elements in the starting of array
console.log(numbers);

//In the end
numbers.push(['Eight', 'ten'])  //append elements at the end of the array
console.log(numbers);

numbers.pop()  //Removes element at the end
console.log(numbers);

//In the middle
numbers.splice(2,2,'SOMETHING');
console.log(numbers);