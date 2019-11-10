// Code your solution in this file!
const returnFirstTwoDrivers= function(drivers){
  let Firstow=[];
  for(let i=0;i<=1;i++)
  {
    Firstow.push(drivers[i])
  }
  return Firstow;
}
const returnLastTwoDrivers=function(drivers){
  let lastTwo=[];
    for(let i= drivers.length-2 ; i <=drivers.length-1; i++)
  {
    lastTwo.push(drivers[i])
  }
  return lastTwo;
}
const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier(fare){
  return function()
  {
    return fare*fare;
  }
}
const fareDoubler=function(fare){
  return fare*2;
};
const fareTripler=function(fare){
  return fare*3;
}


function selectDifferentDrivers(arrayOfDrivers,returnLastTwoDrivers){
  return  returnLastTwoDrivers(arrayOfDrivers);
  
}