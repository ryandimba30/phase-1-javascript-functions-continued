// code your solution here

//Defining a Function Using Function Declaration
function razzle(lawyer = "Billy", target = "'em") {
    console.log(`${lawyer} razzle-dazzles ${target}!`);
}
razzle();
razzle("Methuselah","T'challah");
//lab
function saturdayFun(activity = 'roller-skate') {
    return 'This Saturday, I want to ${activity}!';
}
saturdayFun();

//anonymous function passed as an argument to an event listener
const button = document.getElementById("button");
button.addEventListener("click", function () {
    console.log("Yet more razzling");
});

//function declaration
const fn = function () {
    console.log("Yet more razzling");
};
fn();


//lab
function mondayWork(activity = 'go to the office') {
    return 'This Monday, I will ${activity}.';
}
mondayWork('work from home');


//Immediately-Invoked Function Expression
(function (baseNumber) {
    return baseNumber + 3
})(2);      //5

//Function-level scope
// if a function is defined inside another function, the inner function has access to all the parameters of, as well as any variables defined in, the outer function.
function outer(greeting, msg = "It's a fine day to learn") {

    const innerFunction =function (name, lang = "python") {

        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction("student", "JavaScript");
}
outer("Hello"); //=>"Hello, student! It's a fine day to learn Javascript";
// or simply
function outer(greeting, msg = "It's a fine day to learn") {
    return function (name, lang = "python") {
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
}

outer("Hello")("student", "JavaScript");
//=>"Hello, student! It's a fine day to learn JavaScript";

//defining Scope Chain
function demoChain(name) {
    const part1 = "hi";
    return function () {
        const part2 ="there";
        return function () {
            console.log(`${part1.toUpperCase()} ${part2} ${name}`);
        };
    };
}

demoChain("Engineer Ryan")()(); //=> HI there Engineer Ryan


//lab
function wrapAdjective(part1="*") {
    return function (par="a hard worker"){
        return 'You are ${Par1}${par}${par1}!' ;
    };
}
wrapAdjective("||") ("passionate in programming");
