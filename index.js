// Code your solution in this file!
 const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
 let [returnFirstTwoDrivers, returnLastTwoDrivers] = (
  function(drivers) {
    
    return [
      function() { return drivers.slice(0,2) },
      function() { return drivers.slice(drivers.length-2,4) }
    ]
  }
)(drivers)
 function returnFirstTwoDrivers(drivers,returnFirstTwoDrivers()){
return returnFirstTwoDrivers(drivers)
 }
 function returnLastTwoDrivers(drivers){
   let pos=drivers.length-2
     let  iterator = drivers.slice(pos,4); 
   return iterator
 }
 function selectingDrivers(){
   
 }