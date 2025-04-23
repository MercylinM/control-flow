// A user has 3 attempts to log in.Simulate failed login attempts using while.After 3, show "Account locked".
function loginAttempts() {
    let attempts = 0;
    while (attempts < 3) {
        console.log(`Attempt ${attempts + 1}: Login failed.`);
        attempts++;
    }
    console.log("Account locked.");
}

loginAttempts();

// Users are voting on a feature.Use do...while to log each vote from an array until all votes are processed.
function voteCount(votes) {
    let i = 0;
    do {
        console.log(`Vote ${i + 1}: ${votes[i]}`);
        i++;
    } while (i < votes.length);
}

const votes = ["Yes", "No", "Yes", "Yes", "No"];
voteCount(votes);

// function dayOfTheWeek(dayNumber) {
//     switch (dayNumber) {
//         case 0: 
//             console.log("Sunday"); 
//             break;
//         case 1: 
//             console.log("Monday"); 
//             break;
//         case 2: 
//             console.log("Tuesday"); 
//             break;
//         case 3: 
//             console.log("Wednesday"); 
//             break;
//         case 4: 
//             console.log("Thursday"); 
//             break;
//         case 5: 
//             console.log("Friday"); 
//             break;
//         case 6: 
//             console.log("Saturday"); 
//             break;
//         default: 
//             console.log("Invalid day");
//             break;
//     }
// }
// const dayNumber = new Date().getDay();
// dayOfTheWeek(dayNumber);

// Loop through an array of numbers from 1–7 and use a switch to print the corresponding day name.
function dayOfTheWeek(days) {
    
    for (let i = 0; i < days.length; i++) {
        switch (days[i]) {
            case 1: 
                console.log("Sunday"); 
                break;
            case 2: 
                console.log("Monday"); 
                break;
            case 3: 
                console.log("Tuesday"); 
                break;
            case 4: 
                console.log("Wednesday"); 
                break;
            case 5: 
                console.log("Thursday"); 
                break;
            case 6: 
                console.log("Friday"); 
                break;
            case 7: 
                console.log("Saturday"); 
                break;
            default: 
                console.log("Invalid day"); 
                break;
        }
    }
};
const days = [1, 2, 3, 4, 5, 6, 7];
dayOfTheWeek(days);
    
// Given an array of password strings, use if...else to: log "Strong" if length >= 8, and "Weak" otherwise.
function passwordStrength(passwords) {
    passwords.forEach(password => {
        if (password.length >= 8) {
            console.log(`${password}: Strong`);
        } else {
            console.log(`${password}: Weak`);
        }
    });
}
const passwords = ["pass123", "strongPass1", "1234", "secure2024", "pass123.word", "Pass.Word1"];
passwordStrength(passwords);

// You're building a multilingual site. Use a switch to show greetings based on language codes. I.e "en" → "Hello", "fr" → "Bonjour", "sw" → "Habari".
function multilingualGreeting(languages) {
    languages.forEach(lang => {
        switch (lang) {
            case "en": 
                console.log("Hello"); 
                break;
            case "fr": 
                console.log("Bonjour"); 
                break;
            case "sw": 
                console.log("Habari"); 
                break;
            default: 
                console.log("Language not supported");
                break;
        }
    });
}

const languages = ["en", "fr", "sw", "de"];
multilingualGreeting(languages);

// You're building a weather dashboard. Loop through an array of temperatures and: If above 30, log "High heat alert!", else if below 15, log "Cold alert!", else, log "Normal conditions"
function temperatureAlerts(temperatures) {
    temperatures.forEach(temp => {
        if (temp > 30) {
            console.log(`${temp}: High heat alert!`);
        } else if (temp < 15) {
            console.log(`${temp}: Cold alert!`);
        } else {
            console.log(`${temp}: Normal conditions`);
        }
    });

}
const temperatures = [12, 22, 35, 30, 14, 40];
temperatureAlerts(temperatures);

// Users are queued to register.Use a while loop to remove and print each name until the queue is empty.
function printUserName(queue) {
    while (queue.length > 0) {
        let user = queue.shift();
        console.log(`${user} has been registered.`);
    }
}

let queue = ["Alice", "Bob", "Charlie", "Diana"];
printUserName(queue);

// Students retake a test until they score 50 or more. Use do...while to simulate attempts, increasing the score by 10 each time until it's >= 50.
function retakeAttempts(score, attempts) { 
    do {
        attempts++;
        score += 10;
        console.log(`Attempt ${attempts}: Score is ${score}`);
    } while (score < 50);
    console.log("Passed the test.");
}

let score = 0;
let attempts = 0;
retakeAttempts(score, attempts)



