#!/usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EURO: 0.91,
    GBP: 0.76,
    INR: 74.57,
    INDIAN_PKR: 78,
    PKR: 280
};
let user_answer = await inquirer.prompt([{
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EURO", "GBP", "INR", "INDIAN_PKR", "PKR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "EURO", "GBP", "INR", "INDIAN_PKR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
