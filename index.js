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
  return num*num
}