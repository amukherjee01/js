let getMyGrade = function(currentMarks, totalMarks){

    if(typeof(currentMarks) == 'number' && typeof(totalMarks) == 'number'){

    let myPercent = (currentMarks/totalMarks) * 100;

    let myGrade = ''

    if(myPercent>=90){
        myGrade = 'A'
    }else if(myPercent >=70){
        myGrade = 'B'
    }else if(myPercent >=50){
        myGrade ='C'
    }else{
        myGrade = 'D'
    }
    return `Your grade is ${myGrade} and percent is ${myPercent}`

}
else{
    return `Your input ${currentMarks} and ${totalMarks} is not correct.`
}
}

console.log(getMyGrade('hello',300))

