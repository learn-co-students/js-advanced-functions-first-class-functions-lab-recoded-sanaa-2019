// Code your solution in this file!
 const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
const returnFirstTwoDrivers=function(drivers){
  return drivers.slice(0,2)
  
  
}
 
 const returnLastTwoDrivers=function(drivers){
    return drivers.slice(drivers.length-2,4)
 }
 
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num){
  return function(num){return num*num}
}
function fareDoubler(fares){
  return fares *2
}
function fareTripler(fares){
  return fares*3
}
function selectDifferentDrivers(arrayOfDrivers, function){
  

}