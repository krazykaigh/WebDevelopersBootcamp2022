/*jshint esversion: 8 */
function talkToMe() {
    console.log('What do you want me to say?');
    console.log('I am only programmed to say...');
    console.log('this!');
}

talkToMe();

function tellMeWhatToSay(whatToSay, whatElseToSay){
    console.log(`You told me to say this: ${whatToSay} and this: ${whatElseToSay}`);
}

tellMeWhatToSay('Hello', 'Goodbye');
tellMeWhatToSay('','');

// DEFINE YOUR FUNCTION:
function rant(message) {
    for (let i = 0; i<3; i++) {
        console.log(message.toUpperCase());
    }
}

rant('I hate beets');

function repeet(word, number) {
    for (let i = 1; i<= number; i++){
        console.log(`${i}: ${word}`);
    }
}

repeet("Word", 4);

function add(num1, num2)  {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }
    return(num1 + num2);
}

let total= add(add(7,2),13);
console.log(total);

// DEFINE YOUR FUNCTION BELOW:
function lastElement(anArray){
    if (anArray.length == []){
        return null;
    }
    return(anArray[anArray.length-1]);
}

console.log(lastElement([1,2,3,'a','t',4,"y"]));
console.log(lastElement([]));

// DEFINE YOUR FUNCTION BELOW:
function returnDay (doyOfWeek){
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (doyOfWeek < 1 || doyOfWeek >7) {
        return null;
    }
    return (weekdays[doyOfWeek-1]);
}

console.log(returnDay(1));
console.log(returnDay(7));
console.log(returnDay(4));
console.log(returnDay(0));

const creature = "Common Sea Dragon";
 
function scubaDive(){
    const creature = "Spanish Dancer"; //A type of sea slug
    console.log(creature);
}
 
scubaDive();

const addThem = function (x,y) {
    return x + y;
};
console.log (addThem(3,543));

// Here we begin covering functions calling functions
const callTwice = function(func) {
    func();
    func();
};

// NOT SURE WHAT IS HAPPENING HERE
function rollDie() {
    return function(dice){
        console.log(Math.floor(Math.random() * dice) + 1);
    };
}

const rollIt = rollDie();
rollIt(100);
//callTwice(rollDie);

// RETURN FUNCTION AS VALUE
// Then call the returned function

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    };
}

const isChild = makeBetweenFunc(0,20);
console.log(isChild(45));
console.log(isChild(15));

// Functions as Object Methods
const myMath = {
    PI: 3.14159,
    square: function (num){
        return num * num;
    },
    cube: function (num) {
        return num **3;
    },
    //shorthand syntax for object functions
    power (num, pow) {
        return num ** pow;
    }
};

console.log(`myMath PI property = ${myMath.PI}`);
console.log(`myMath Square method: Using 9 -> returns ${myMath.square(9)}`);
console.log(`myMath Power method: Using 3 ^ 3 -> returns ${myMath.power(3,3)}`);

const cat = {
    name : 'Blue Steele',
    color: 'grey',
    breed: 'Scottish Fold',
    meowMew () {
        return 'MEOW MEW MEW';
    },
    meow () {
        return 'Just MEOW';
    },
    myColor () {
        return this.color;
    },
    this () {
         console.log(this);
    }
};

console.log(`My cat says ${cat.meow()}`);
console.log(`My cat's name is ${cat.name}`);
console.log(`%s %s`,`My cat's color is`, cat.myColor());
console.log(`%s %s`,`My cat's color is`, cat.color);
console.log(`My cat's this is`);
cat.this();

// On the project tester this failed but has the output desired
const hen = {
    name :  'Helen',
    eggCount: 0,
    layAnEgg () {
        this.eggCount++;
        return "EGG";
    }
};

console.log(hen.name); //"Helen"
console.log(hen.eggCount); // 0
console.log(hen.layAnEgg()); //"EGG"
console.log(hen.layAnEgg()); //"EGG"
console.log(hen.eggCount); // 2
hen.name = 'Maria';
console.log(hen.name);

