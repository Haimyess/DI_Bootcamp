
// Exercise 1


// Create 2 variables, x and y. Each of them should have a different numeric value.
// Write an if/else statement that checks which number is bigger.

let x = 5;
let y = 12;

if (y > x) {
    console.log("y is the biggest number")
} else {
    console.log("x is the bigger number")

}

// Exercise 2
// Exercise 2

// 1. Create a variable called newDog where it’s value is “Chihuahua”.

let newDog = "Chihuahua"
// 2. Check and display how many letters are in newDog.
console.log(newDog.length);
// 3. Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
console.log(newDog.toUpperCase())
// 4. Check if the variable newDog is equal to “Chihuahua”
console.log(newDog);
// 5. if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’

if (newDog == "Chihuahua") {
    console.log("I love Chihuahuas, it's my favorite dog breed")
} 
// else, console.log ‘I dont care, I prefer cats’
else {
    console.log("I don't care, I prefer cats")
}


// Exercise 3
// Exercise 3
// 1. Prompt the user for a number and save it to a variable.
let userNumber = prompt("Tell me your number")

// 2. Check whether the variable is even or odd.
// 3. If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// 4. If it is odd, display: “x is an odd number”. Where x is the actual number the user chose. 

if (userNumber % 2 == 0) {
    console.log(`${userNumber} is an even number` )
}
else {
    console.log(`${userNumber} is an odd number` )
}


// Exercise 4
// Exercise 4


// 1. Using the array above, console.log the number of users that are connected to the group chat based on the following rules:

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];


// 2. If there is no users (the users array is empty), console.log “no one is online”.

if (users.length == 0) {
    console.log("no one is online")

// 3. If there is 1 user, console.log “<name_user> is online”.

} else if (users.length == 1) 
    console.log(`${users[0]} is online`)

// 4. If there are 2 users, console.log “<name_user1> and <name_user2> are online”.

    else if (users.length == 2) 
        console.log(`${users[0]} and ${users[1]} are online`) 

// 5. If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.

     else if (users.length >= 2) 
        console.log(`${users[0]}, ${users[1]} and  ${users.length-2} are online`)

else {
    console.log("A lot of people it's connected to the platform!")
}





// // ExerciseS INCLASS

// let userCart = {
// 	username : "John",
// 	password: 1234,
// 	isUserSignedIn : true,
// 	cart : {
// 		apple : 2,
// 		banana : 1,
// 		pear : 5,
// 	},
// 	prices : {
// 		apple : 0.5,
// 		banana : 0.8646466363,
// 		pear : 0.2
// 	}
// };

// part 1

// userCart["lastname"] = "Smith"

// Part 2
// userCart["prices"]["pear"] = userCart["prices"]["pear"]* 1.17; 
// Same as:
// userCart["prices"]["pear"] *= 1.17; 



// console.log(userCart);


// Part 3

// let userFruit = prompt("What fruit do you want: Apple, Banana or Pear?")
// let userFruitLower = userFruit.toLocaleLowerCase();

// alert(userFruitLower);

// let userFruit = prompt("What fruit do you want: Apple, Banana or Pear?").toLocaleLowerCase();
// console.log(userFruit)

// 1. Add the lastname Smith to the object

// 2. Change the price of the pear, so it will contain the Taxes. 17%

// 3. Ask the user for the fruit he wants between Apple, Banana and Pear.
// Make sure that your code accept all type of strings,
// for example "Banana" or "banana" or "BaNaNA"

// 4. Console.log the price for the specific fruit the user wants

// console.log(userCart["prices"][userFruit]);
// console.log(`The price is ${userCart["prices"][userFruit]}`);

