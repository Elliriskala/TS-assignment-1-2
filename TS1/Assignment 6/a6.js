/* Assignment 6: Generics
Write a generic function that reverses the elements of an array. Test the function with arrays of numbers, strings, and other types.

Create a TypeScript function named reverseArray that takes an array as a parameter with a generic type parameter T.
Inside the function, reverse the elements of the array using a loop or the reverse method.
Return the reversed array.
Call the reverseArray function for each array type and display the reversed arrays.
*/
// Test the function with arrays of different types
var numberArray = [1, 2, 3, 4, 5];
var stringArray = ["apple", "banana", "cherry", "date"];
var mixedArray = [true, 42, "hello", false];
// Use console log to print the result. Desired result:
// Reversed Array of Numbers: [ 5, 4, 3, 2, 1 ]
// Reversed Array of Strings: [ 'date', 'cherry', 'banana', 'apple' ]
// Reversed Mixed Array: [ false, 'hello', 42, true ]
var reverseArray = function (array) {
    return array.reverse();
};
console.log(reverseArray(numberArray));
console.log(reverseArray(stringArray));
console.log(reverseArray(mixedArray));
