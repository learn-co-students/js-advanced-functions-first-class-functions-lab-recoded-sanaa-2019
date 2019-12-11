// Code your solution in this file!
 const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
 let [first, returnLastTwoDrivers] = (
  function(thingToAdd) {
    let base = 3
    return [
      function() { return base + thingToAdd },
      function() { return base }
    ]
  }
)(2)
 function returnFirstTwoDrivers(drivers){
  let pos=0
   let  iterator = drivers.slice(pos,2); 
   return iterator
 }
 function returnLastTwoDrivers(drivers){
   let pos=drivers.length-2
     let  iterator = drivers.slice(pos,4); 
   return iterator
 }
 function selectingDrivers(){
   
 }