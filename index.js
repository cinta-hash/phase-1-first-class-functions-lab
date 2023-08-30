// Code your solution in this file!
let arr = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (arr){
    return [arr[0],arr[1]]
}

const returnLastTwoDrivers = function(arr){
    return arr.slice(-2)
}
 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 function createFareMultiplier(int){
    return function(fare){
        return int * fare
    }
 }

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, selectingDrivers){
    return selectingDrivers(arr)
}




