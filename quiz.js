const prompt = require("prompt-sync")();
var points=0;
console.log("Welcome to Object Oriented Programming Fundamentals Quiz!");
const ans1= prompt("Protecting data from access by unauthorized functions is called: ");
const correct_ans1="data hiding";
if(ans1.toLowerCase()===correct_ans1) {
    points++;
    console.log("Correct Answer!");
}
else{
    console.log("Incorrect answer! Correct answer is : " + correct_ans1);
}
const ans2= prompt("Bundling data and functions together is called: ");
const correct_ans2="encapsulation";
if(ans2.toLowerCase()===correct_ans2) {
    points++;
    console.log("Correct Answer!");
}
else{
    console.log("Incorrect answer! Correct answer is : " + correct_ans2);
}

const ans3= prompt("The ability of a function or operator to act in different ways on different data types is called: ");
const correct_ans3="polymorphism";
if(ans3.toLowerCase()===correct_ans3) {
    points++;
    console.log("Correct Answer!");
}
else{
    console.log("Incorrect answer! Correct answer is : " + correct_ans3);
}

const ans4= prompt("A normal C++ operator that acts in special ways on newly defined data types is said to be: ");
const correct_ans4="overloaded";
if(ans4.toLowerCase()===correct_ans4) {
    points++;
    console.log("Correct Answer!");
}
else{
    console.log("Incorrect answer! Correct answer is : " + correct_ans4);
}

const ans5= prompt("Model entities in the real world more closely than do functions are called: ");
const correct_ans5="objects";
if(ans5.toLowerCase()===correct_ans5) {
    points++;
    console.log("Correct Answer!");
}
else{
    console.log("Incorrect answer! Correct answer is : " + correct_ans5);
}

console.log("Quiz has ended! Your score: "+ points + " out of 5 points");



