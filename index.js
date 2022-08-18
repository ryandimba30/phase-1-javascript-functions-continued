// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}  

function wrapAdjective(emphatic){
    return function (worker) {
        return `You are ${emphatic}${worker}${emphatic}!`;
    }
}
console.log(wrapAdjective('||'));
