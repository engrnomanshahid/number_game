import inquirer from "inquirer";
console.log("Game: Lets guess a number between 1 & 10 in 3 tries");
let randNum = Math.floor(Math.random() * 10 + 1);
// console.log("rand num is:", randNum);
let actualAnswer = 6; //random number auto generated 
let numTries = 3;
while (numTries > 0) {
    const answers = await inquirer.prompt([
        {
            name: "myguess",
            message: "yournumber",
            type: "number",
        },
    ]);
    // console.log(answers);
    console.log(`you have ${numTries - 1} left`);
    if (answers.myguess == actualAnswer) {
        console.log(`Hurray you guessed it right. Game ended`);
        numTries = 0;
    }
    else {
        console.log(`you guessed wrong`);
    }
    numTries--; // numTries = numTries-1
}
