/* Assignment 5: Union Types + Type Guard

Write a function that takes a string or number and returns its length if it's a string or the square of the number if it's a number. Use union types to handle both cases.

Prompt the user to enter a value as either a string or a number.
Define a TypeScript function that takes a parameter of type string | number.
Use a type guard to check the actual type of the parameter.
If the parameter is a string, display its length. If it's a number, display its square.
*/

// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value: string | number): number {
    // TODO: Use a type guard to check the actual type of 'value'
    if (typeof value === 'string') {
        // if type is string, retrurn the length of the string
        return value.length;
    } else if (typeof value === 'number') {
        // if type is number return the square of the number
        return value * value;
    } else {
        throw new Error('Invalid input');
    }
}

// Prompt the user to enter a value as either a string or a number
const userInput = prompt("Enter a value as either a string or a number: ");

let parsedValue: string | number;
// Convert user input to a number or keep it as a string
    if (userInput === null) {
        console.log('Invalid input');
        parsedValue = '';
    } else {
        const num = Number(userInput);
        parsedValue = isNaN(Number(num)) ? userInput : Number(num);
    }

// Call the lengthOrSquare function
const result = lengthOrSquare(parsedValue);
console.log(typeof parsedValue);
console.log(result);
