// Code your solution in this file!
 const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
 let [returnFirstTwoDrivers, returnLastTwoDrivers] = (
  function(drivers) {
    
    return [
      function() { return drivers.slice(0,2) },
      function() { return base }
    ]
  }
)(2)
 function returnFirstTwoDrivers(drivers){
  let pos=0
   let  iterator = drivers.slice(0,2); 
   return iterator
 }
 function returnLastTwoDrivers(drivers){
   let pos=drivers.length-2
     let  iterator = drivers.slice(pos,4); 
   return iterator
 }
 function selectingDrivers(){
   
 }