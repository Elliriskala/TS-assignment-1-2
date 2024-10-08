/* Assignment 6: Generics
Write a generic function that reverses the elements of an array. Test the function with arrays of numbers, strings, and other types.

Create a TypeScript function named reverseArray that takes an array as a parameter with a generic type parameter T.
Inside the function, reverse the elements of the array using a loop or the reverse method.
Return the reversed array.
Call the reverseArray function for each array type and display the reversed arrays.
*/

// Test the function with arrays of different types

const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ["apple", "banana", "cherry", "date"];
const mixedArray: (string | number | boolean)[] = [true, 42, "hello", false];

// Use console log to print the result. Desired result:
// Reversed Array of Numbers: [ 5, 4, 3, 2, 1 ]
// Reversed Array of Strings: [ 'date', 'cherry', 'banana', 'apple' ]
// Reversed Mixed Array: [ false, 'hello', 42, true ]

const reverseArray = <T>(array: T[]) => {
    return array.reverse();
};

console.log(reverseArray<number>(numberArray));
console.log(reverseArray<string>(stringArray));
console.log(reverseArray<string | number | boolean>(mixedArray));
