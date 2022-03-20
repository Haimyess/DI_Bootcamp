// Exercise 1

const favoriteFood = "lasagna";
let = favoriteMealOfTheDay = "Launch";

console.log(`I eat ${favoriteFood} at every ${favoriteMealOfTheDay}`);


// Exercise 2 

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;

let myWatchedSeriesSentence = myWatchedSeries;


console.log(`I watched ${myWatchedSeriesLength} serie: ${myWatchedSeriesSentence}.`);

// Part II

myWatchedSeries[2] = "Friends";
myWatchedSeries.push("The Witcher");
myWatchedSeries.unshift("Game of Thrones");
myWatchedSeries.splice(0, 1);

console.log(myWatchedSeries);


// Exercise 3

let celcius = 30;
let fahrenheit = (celcius / 5) * 9 + 32;

console.log(fahrenheit);


// Exercise 4

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction:23
// Actual: 23


// Exercise 5

typeof(15)
// Prediction: Number
// Actual: Number

typeof(5.5)
// Prediction: Number
// Actual: Number

typeof(NaN)
// Prediction: NaN 
// Actual: Number

typeof("hello")
// Prediction: String
// Actual:

typeof(true)
// Prediction: Boolean
// Actual:Boolean

typeof(1 != 2)
// Prediction: Boolean 
// Actual: Boolean

"hamburger" + "s"
// Prediction: Hamburgers
// Actual: Hamburgers

"hamburgers" - "s"
// Prediction: Error
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: error
// Actual: -2

"johnny" + 5
// Prediction: Johnny5
// Actual:  johnny5

"johnny" - 5
// Prediction: Error
// Actual: NaN

99 * "hello"
// Prediction: error
// Actual: NaN

1 != 1
// Prediction: False
// Actual: False

1 == "1"
// Prediction: true
// Actual: True

1 === "1"
// Prediction: False
// Actual: False


// Exercise 6
// Exercise 6



5 + "34"
// Prediction: 534
// Actual: "534"

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 2
// Actual: 0

5 % 10
// Prediction: --
// Actual: 5

"Java" + "Script"
// Prediction: "JavaScript"
// Actual: "Javascript"

" " + " "
// Prediction: --
// Actual:' '

" " + 0
// Prediction: '0'
// Actual: ' 0'

true + true
// Prediction: --
// Actual: 2

true + false
// Prediction:--
// Actual: 1

false + true
// Prediction: 1
// Actual:1

false - true
// Prediction: --
// Actual: -1

!true
// Prediction: False
// Actual: False

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: NaN
// Actual: Nan









// // Exercise 1

// let addressNumber = 27;
// let addressStreet = "Yaffe Nof";
// let country = "Israel";

// let globalAddress = `I live in ${addressStreet} ${addressNumber}, ${country}.`;

// console.log(globalAddress);


// // Exercise 2

// let birthYear = 1993;
// let futureYear = 2030;

// // Testing

// // let age = (futureYear - birthYear);
// // console.log(age);

// // To make a substraction between 2 variables, instead of putting them into the curly braces separated, we do it this way. the 2 variables inside one pair of curly braces and we put before the first curly brace a dollar sign. 
// let myAgeInThefuture = `I will be ${futureYear - birthYear} in ${futureYear}.` ;

// console.log(myAgeInThefuture)

// // Exercise 3 

