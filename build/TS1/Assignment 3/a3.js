/* Assignment 3: Defining Custom Types

Create a type alias for a book with properties like title, author, and publication year.

1. Define an object using this type alias and print its details.

2. Define a type alias named Book with properties title, author, and publicationYear, each having appropriate primitive types.
Prompt the user to enter details for a book (title, author, publication year) and create an object of type Book with the entered values.

3. Display the details of the book object to the user.
*/
// TODO: Implement the promptForBook function
function promptForBook() {
    // TODO: Prompt user for book details (title, author, publication year)
    const bookTitle = prompt("Enter the title of the book: ") || "Unknown Title";
    const bookAuthor = prompt("Enter the author of the book: ") || "Unknown Author";
    const bookPublicationYear = parseInt(prompt("Enter the publication year of the book: ") || "0");
    // TODO: Create an object of type 'Book' with the entered values
    const book = {
        title: bookTitle,
        author: bookAuthor,
        publicationYear: bookPublicationYear,
    };
    return book;
}
// TODO: Call the promptForBook function to get the book details
const bookDetails = promptForBook();
// TODO: Display the details of the book object to the user
console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);
export {};
