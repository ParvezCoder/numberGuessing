#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
    name:"firstNumber",
    type:'number',
    message:'Enter Frist Number',
},
{
    name:'secondNumber',
    type:'number',
    message:'Enter Second Number',

},
{
    name:'Operator',
    type:'list',
    message:'Select one Operation',
    choices:['add','sub','mul','div']
}
]);
console.log("k")
if("add" ===answer.Operator){
    console.log(answer.firstNumber+answer.secondNumber)
}
else if( answer.Operator==='sub')
{
    console.log(answer.firstNumber-answer.secondNumber);
}
else if(answer.Operator ==='mul'){
    console.log(answer.firstNumber*answer.secondNumber);
}

else if(answer.Operator ==='div'){
    console.log(answer.firstNumber/answer.secondNumber);
}

else{
    console.log("try Again");
}
