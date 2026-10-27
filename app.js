// Exercise 1
function generateEmail(username, domain) {
   return `${username}@${domain}`;
}
console.log('Exercise 1 Result:', generateEmail("sara", "company.com"));
console.log('Exercise 1 Result:', generateEmail("ali", "example.com"));
console.log('Exercise 1 Result:', generateEmail("fatima", "school.edu"));


// Exercis 2
function greetUser(name, timeOfDay) {
   return `Good ${timeOfDay}, ${name}!`;
}
console.log('Exercise 2 Result:', greetUser("Sara", "morning"));
console.log('Exercise 2 Result:', greetUser("Ali", "afternoon"));
console.log('Exercise 2 Result:', greetUser("Fatima", "evening"));

// Exercise 3
function calculateVAT(price, vatPercentage) {
   let vat = price * (vatPercentage / 100);
   return vat;
}
console.log('Exercise 3 Result:', calculateVAT(50, 10));
console.log('Exercise 3 Result:', calculateVAT(100, 10));
console.log('Exercise 3 Result:', calculateVAT(200, 5));

// Exercise 4
function checkStock(quantity) {
   if (quantity > 0) {
       return "In stock";
   } else {
       return "Out of stock";
   }
}
console.log('Exercise 4 Result:', checkStock(10));
console.log('Exercise 4 Result:', checkStock(0));
console.log('Exercise 4 Result:', checkStock(1));


// Exercise 5
function maxOfTwoNumbers(numA, numB) {
   if (numA >= numB) {
       return numA;
   } else {
       return numB;
   }
}
console.log('Exercise 5 Result:', maxOfTwoNumbers(3, 9));
console.log('Exercise 5 Result:', maxOfTwoNumbers(15, 4));
console.log('Exercise 5 Result:', maxOfTwoNumbers(7, 7));

// Exercise 6
function isCharAVowel(char) {
   if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
       return true;
   } else {
       return false;
   }
}
console.log('Exercise 6 Result:', isCharAVowel("a"));
console.log('Exercise 6 Result:', isCharAVowel("e"));
console.log('Exercise 6 Result:', isCharAVowel("b"));
console.log('Exercise 6 Result:', isCharAVowel("y"));

// Exercise 7

function maxOfThree(numA, numB, numC) {

    if (numA >= numB && numA >= numC) {

        return numA;

    }

    else if (numB >= numA && numB >= numC) {

        return numB;

    }

    else {

        return numC;

    }

}
console.log('Exercise 7 Result:', maxOfThree(5, 10, 8)) 

console.log('Exercise 7 Result:', maxOfThree(20, 5, 10)) 

console.log('Exercise 7 Result:', maxOfThree(3, 7, 15)) 

console.log('Exercise 7 Result:', maxOfThree(8, 8, 4)) 


// Exercise 8

function convertTemperature(temperature, scale) {

    if (scale === "C") {

        return (temperature * 9 / 5) + 32;

    }

    else {

        return (temperature - 32) * 5 / 9;

    }

}
console.log('Exercise 8 Result:', convertTemperature(0, "C")) 

console.log('Exercise 8 Result:', convertTemperature(32, "C")) 

console.log('Exercise 8 Result:', convertTemperature(32, "F")) 

console.log('Exercise 8 Result:', convertTemperature(212, "F")) 


// Exercise 9

function basicCalculator(numA, numB, operation) {

    if (operation === "add") {

        return numA + numB;

    }

    else if (operation === "subtract") {

        return numA - numB;

    }

    else if (operation === "multiply") {

        return numA * numB;

    }

    else {

        return numA / numB;

    }

}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "add")) 

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract")) 

console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply")) 

console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide")) 
 
