// Code your solution in this file!
 function returnFirstTwoDrivers(drivers){
   let arr = [];
    arr.push(drivers[0],drivers[1])
  return arr
}

 function returnLastTwoDrivers(drivers){
   let arrlast = [];
    arrlast.push(drivers[2],drivers[3])
  return arrlast
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer){
  return function(fare){
    return integer * fare
  }
}

function fareDoubler(far){
 let  x= createFareMultiplier(2)
   return x(far)
  
}

function fareTripler(far){
  let x = createFareMultiplier(3)
   return x(far)
}

function selectDifferentDrivers(drivers , returnFirstTwoDrivers){
  return returnFirstTwoDrivers(drivers)
  
  
}
