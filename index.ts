import inquirer from "inquirer";
import chalk from "chalk";
let computerNumber =Math.floor(Math.random()*6+1);
let answer =await inquirer.prompt([{
name:"myChoise",
type:"number",
message:`${chalk.red(`Hamza Sir`)} if you want to ${chalk.green ("win the Game")}, then Guess the accurate
 Number Between ${chalk.red ("1 and 6  🤔🤔🤔")} Han Soch looo `,
}]);
if ( answer.myChoise ===computerNumber){
    console.log(`you ${chalk.blue.bold("win the game") }😭😭😭😭, because you Guess  ${chalk.red(`${answer.myChoise}`)}   and Computer Number is ${chalk.red(`${computerNumber}`)}`)


}
else{
    console.log(`you ${chalk.red.bold("loss the game") }😭😭😭😭, because you Guess  ${chalk.red(`${answer.myChoise}`)}   and Computer Number is ${chalk.red(`${computerNumber}`)}`)
}

// console.log(computerNumber);
// console.log(answer.myChoise);
