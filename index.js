// Code your solution in this file!

 const returnFirstTwoDrivers = function(arr){
        return arr.slice (0 ,2)
        }
const returnLastTwoDrivers = function(arr){
         return arr.slice(-2 )
        }
const selectingDrivers = [returnFirstTwoDrivers ,returnLastTwoDrivers]
        
        
const createFareMultiplier =  function (n) {
            return function(){return 5 * n }
        }
        
const fareDoubler = function (n) {
            return n * 2 
            
        }
const fareTripler = function (n){
            return n * 3 
        }
const selectDifferentDrivers = function (arr , fun) {
            return fun(arr)
        }
