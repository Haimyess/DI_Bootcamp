// 1. Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”. For example, “The movie is not that bad, I like it”.

let sentence = "The movie is not that bad, i like it!"
// let array = sentence.split(' ');


// 2. Create a variable called wordNot where it’s value is the first appearance of the substring “not” (from the sentence variable).
let wordNot = sentence.indexOf("not");

// 3. Create a variable called wordBad where it’s value is the first appearance of the substring “bad” (from the sentence variable).

let wordBad = sentence.indexOf("bad");

let sen1 = sentence.substring(0, wordNot)
console.log(sen1);



let sen2 = sentence.substring(wordBad+3, sentence.length)

console.log(sen1 + "good" + sen2);


if (wordBad > wordNot) {
    console.log(sen1 + "good" + sen2)
} else {
    console.log(sentence)
}
// 4. If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result. 
// if (wordBad > wordNot) {
//     console.log(`${sentence.replace("not that bad, good")}`);
// } else {
//     console.log(sentence)
// }

// For example, the result here should be : “The movie is good, I like it”



// 5. If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.