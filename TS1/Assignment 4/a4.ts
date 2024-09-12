/* Assignment 4: Combinations of Types
Define a type alias for a product that can be either an electronic device with brand and model or a book with title and author. Create instances of this type alias for different products.

Define a type alias named Product that can represent either an ElectronicDevice or a Book.
Implement instances of the Product type for a sample electronic device and a book, prompting the user for details.
Display the details of each product, including the properties specific to the chosen type.
*/

export {}; // hack to ignore Book from task 3

// TODO Define the 'ElectronicDevice' interface (or type)
type ElectronicDevice = {
    type: 'electronic';
    brand: string;
    model: string;
};

// Define the 'Book' interface (or type)
type Book = {
    type: 'book';
    title: string;
    author: string;
};

// Define the 'Product' type alias that can represent either 'ElectronicDevice' or 'Book'
type Product = ElectronicDevice | Book;

// Implement instances of the 'Product' type
function createElectronicDevice(): ElectronicDevice {
    // TODO: Prompt user for electronic device details (brand and model)
    const brand = prompt("Enter the brand of the electronic device") || "Unknown Brand";
    const model = prompt("Enter the model of the electronic device") || "Unknown Model";
    // TODO: return object containing brand and model
    return { type: 'electronic', brand, model };
}

function createBook(): Book {
    // TODO: Prompt user for book details (title and author)
    const title = prompt("Enter the title of the book: ") || "Unknown Title";
    const author = prompt("Enter the author of the book: ") || "Unknown Author";
    // TODO: return object containing title and author
    return { type: 'book', title, author };
}

// Create instances of 'Product'
function createProduct(): Product {
    const userInput = prompt("Enter the type of product (electronic or book): ");
    if (userInput === 'electronic') {
        const electronicProduct = createElectronicDevice();
        return electronicProduct;
    } else {
        const bookProduct = createBook();
        return bookProduct;
    }
}

// Display the details of each product
function displayProductDetails(product: Product) {
    console.log(`Product Type: ${product.type}`);
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    } else {
        console.log(`Title: ${product.title}`);
        console.log(`Author: ${product.author}`);
    }
}

const product = createProduct();
console.log("Product Details:");
displayProductDetails(product);
