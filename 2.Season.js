// 2.  Write a program that determines the season based on the month (spring, summer, autumn, or winter).

//Spring --> March to May
//Summer --> June to August
//Autumn --> September to October
//Winter --> November to February


function determineSeason(month) {
    month = month.toLowerCase();
    switch (month)
    {
        case 'december':
        case 'january':
        case 'february':
            return 'Winter';
        case 'march':
        case 'april':
        case 'may':
            return 'Spring';
        case 'june':
        case 'july':
        case 'august':
            return 'Summer';
        case 'september':
        case 'october':
        case 'november':
            return 'Autumn';
        default:
            return 'Invalid month entered!';
    }
}


const prompt = require('prompt-sync')({ sigint: true })
const month = prompt("Enter the month:");
const season = determineSeason(month);
console.log(`The season is: ${season}`);
