const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
function returnFirstTwoDrivers(driversArray){
    return driversArray.slice(0,2);
}
function returnLastTwoDrivers(driversArray){
    return driversArray.slice(2,4)

}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = operand => {
    return (input) => input * operand;
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = (arrayOfDrivers, func) => func(arrayOfDrivers);