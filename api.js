const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc
console.log("Welcome to the Zelda page!")
let limit = prompt("Enter the character you want to see: ")
const url = `https://zelda.fanapis.com/api/characters?name=${limit}`
console.log()
async function fetchData(requestURL){
const response = await fetch(requestURL)
const data = await response.json()
console.log(data)
}
fetchData(url)
