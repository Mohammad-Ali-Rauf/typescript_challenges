import * as fs from 'fs';
import chalk from 'chalk';
// Read the contents of the file
fs.readFile('quotes.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    // Parse the JSON data into an array of quotes
    const quotes = JSON.parse(data);
    // Generate a random index to select a random quote from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    // Format the output with colored text
    const formattedOutput = `${chalk.yellow(randomQuote.author)} once said, "${chalk.blue(randomQuote.quote)}"`;
    // Display the formatted output to the user
    console.log(formattedOutput);
});
