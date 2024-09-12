"use strict";
/* Assignment 1: Calculating Total Cost
Write a TypeScript program that calculates the total cost of a shopping cart. The cart contains items with their prices. Use the number primitive type for prices and quantities. Start by creating the interface first. */
// Create an empty array named 'cart' to store the items
let cart = [];
// TODO: Implement a loop to prompt the user for item details
// Use 'while' loop to keep prompting until an empty item name is entered
while (true) {
    // TODO: Prompt user for item name, price, and quantity
    const itemName = prompt("Enter the item name (or press Enter to finish):");
    // Break the loop if an empty item name is entered
    if (itemName === "") {
        break;
    }
    const itemPrice = parseFloat(prompt("Enter the item price:") || "0");
    const itemQuantity = parseInt(prompt("Enter the item quantity:") || "0");
    // Create an item object and add it to the 'cart' array
    const newItem = { name: itemName, price: itemPrice, quantity: itemQuantity };
    cart.push(newItem);
}
// Calculate the total cost using the 'map' and 'reduce' functions
const totalCost = cart.map(item => item.price * item.quantity).reduce((sum, cost) => sum + cost, 0);
// Display the total cost to the user
console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
