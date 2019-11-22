// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers=function(driversArr){
    let arr=[];
    driversArr.forEach(function(ele,index){
        if(index==0||index==1){
            arr.push(ele);
        }
    })
    return arr;
}
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers=function (driversArr){
    let arr=[];
    driversArr.forEach(function(ele,index){
        if(index==driversArr.length-2||index==driversArr.length-1){
            arr.push(ele);
        }
    })
    return arr;
}
console.log(returnLastTwoDrivers(drivers));

let selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers];
console.log(selectingDrivers);

function createFareMultiplier(num){
    return function(fare){
        return fare*num;
    }
}
console.log(createFareMultiplier(4)(5));

const fareDoubler=function(fare){
    return createFareMultiplier(2)(fare);
};
console.log(fareDoubler(9));

const fareTripler=function(fare){
    return createFareMultiplier(3)(fare);
};
console.log(fareTripler(9));

function selectDifferentDrivers(arrDr,sel){
    return sel(arrDr);
}
console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers));