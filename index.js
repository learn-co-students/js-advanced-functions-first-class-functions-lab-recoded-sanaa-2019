// Code your solution in this file!

function returnFirstTwoDrivers(array){

    let x=[]
    x=[array[0],array[1]]
    return x;
}

// array=[1,2,3,4,5,6]
// returnFirstTwoDrivers(array)
// console.log(returnFirstTwoDrivers(array))

function returnLastTwoDrivers(array){
    let y=[]
     y=[array[2],array[3]]
     return y
}
// returnLastTwoDrivers(array)


let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

// console.log(selectingDrivers[0])

function createFareMultiplier(int){

   return function multiplier(fare){
       return int*fare
   }
}

function fareDoubler(doub){
    const x=createFareMultiplier(2)

    return x(doub)
}

function fareTripler(tripl){

    const x=createFareMultiplier(3)

    return x(tripl)
}

function selectDifferentDrivers(array,selectDifferentDrivers){
    return selectDifferentDrivers(array)
}