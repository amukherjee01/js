let iAmGlobal = 'someValue'

if (true) {
    var iAmLocal = 'someMoreValue'
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

console.log(iAmLocal);
console.log('Hey i am Global ' + iAmGlobal);