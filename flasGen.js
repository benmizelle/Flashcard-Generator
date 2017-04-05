// inquirer npm package
var inquirer = require("inquirer");

// Constructor for basic flash card
function BasicCard(front, back) {
	this.front = front;
	this.back = back;
}

// function to ask the user a question
var askQuestion = function(count) {
  // if statement to ensure that our questions are only asked five times
  if (count < 2) {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "front",
        message: "back"
      }
    ]).then(function(answers) {
    	var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
		console.log(firstPresident.front); 

// "George Washington"
		console.log(firstPresident.back);
    });

}