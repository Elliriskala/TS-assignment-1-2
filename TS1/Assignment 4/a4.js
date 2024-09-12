"use strict";
/* Assignment 4: Combinations of Types
Define a type alias for a product that can be either an electronic device with brand and model or a book with title and author. Create instances of this type alias for different products.

Define a type alias named Product that can represent either an ElectronicDevice or a Book.
Implement instances of the Product type for a sample electronic device and a book, prompting the user for details.
Display the details of each product, including the properties specific to the chosen type.
*/
// Object.defineProperty(exports, "__esModule", { value: true });
// Implement instances of the 'Product' type
function createElectronicDevice() {
    // TODO: Prompt user for electronic device details (brand and model)
    var brand = prompt("Enter the brand of the electronic device") || "Unknown Brand";
    var model = prompt("Enter the model of the electronic device") || "Unknown Model";
    // TODO: return object containing brand and model
    return { type: 'electronic', brand: brand, model: model };
}
function createBook() {
    // TODO: Prompt user for book details (title and author)
    var title = prompt("Enter the title of the book: ") || "Unknown Title";
    var author = prompt("Enter the author of the book: ") || "Unknown Author";
    // TODO: return object containing title and author
    return { type: 'book', title: title, author: author };
}
// Create instances of 'Product'
function createProduct() {
    var userInput = prompt("Enter the type of product (electronic or book): ");
    if (userInput === 'electronic') {
        var electronicProduct = createElectronicDevice();
        return electronicProduct;
    }
    else {
        var bookProduct = createBook();
        return bookProduct;
    }
}
// Display the details of each product
function displayProductDetails(product) {
    console.log("Product Type: ".concat(product.type));
    if (product.type === 'electronic') {
        console.log("Brand: ".concat(product.brand));
        console.log("Model: ".concat(product.model));
    }
    else {
        console.log("Title: ".concat(product.title));
        console.log("Author: ".concat(product.author));
    }
}
var product = createProduct();
console.log("Product Details:");
displayProductDetails(product);
