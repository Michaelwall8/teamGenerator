
//--------------------------------------------------------\ Const for project /----------------------------------------------------------
// CLasses
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// In
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require('util')

// Path
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Promisify
const writeFileP = util.promisify(fs.writeFile)

// Render html
const render = require("./lib/htmlRenderer");


