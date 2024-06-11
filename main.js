#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("=".repeat(50)));
console.log(chalk.bold.magentaBright("\t <<< Welcome to Adventure Game >>> \t"));
console.log(chalk.yellowBright("=".repeat(50)));
// classes player & oponent:
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
// player name & oponent selection:
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.bold.blueBright("Please Enter your Name:"),
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: chalk.bold.yellowBright("select your opponent"),
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);
// gather data:
let P1 = new Player(player.name);
let O1 = new Opponent(opponent.select);
do {
    // Skeleton: 
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Select your oponent:",
                choices: ["Attack", "Drink Portion", "Run For your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.gray(`${O1.name} fuel is ${O1.fuel}`));
                if (P1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("you Loose, Better Luck Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.green(`${O1.name} fuel is ${O1.fuel}`));
                if (O1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win!"));
                    process.exit();
                }
            }
        }
        else if (ask.opt == "Drink Portion") {
            P1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you drink Health Portion your fuel is ${P1.fuel}`));
        }
        else {
            console.log(chalk.red.bold.italic("you Loose, Better Luck Next Time!"));
            process.exit();
        }
    }
    // Alien:
    else if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Select your oponent:",
                choices: ["Attack", "Drink Portion", "Run For your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.gray(`${O1.name} fuel is ${O1.fuel}`));
                if (P1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("you Loose, Better Luck Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.green(`${O1.name} fuel is ${O1.fuel}`));
                if (O1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win!"));
                    process.exit();
                }
            }
        }
        else if (ask.opt == "Drink Portion") {
            P1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you drink Health Portion your fuel is ${P1.fuel}`));
        }
        else {
            console.log(chalk.red.bold.italic("you Loose, Better Luck Next Time!"));
            process.exit();
        }
    }
    // Zombie:
    else {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "Select your oponent:",
                choices: ["Attack", "Drink Portion", "Run For your Life.."]
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecrease();
                console.log(chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.gray(`${O1.name} fuel is ${O1.fuel}`));
                if (P1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("you Loose, Better Luck Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecrease();
                console.log(chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
                console.log(chalk.bold.green(`${O1.name} fuel is ${O1.fuel}`));
                if (O1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win!"));
                    process.exit();
                }
            }
        }
        else if (ask.opt == "Drink Portion") {
            P1.fuelIncrease();
            console.log(chalk.bold.italic.green(`you drink Health Portion your fuel is ${P1.fuel}`));
        }
        else {
            console.log(chalk.red.bold.italic("you Loose, Better Luck Next Time!"));
            process.exit();
        }
    }
} while (true);
