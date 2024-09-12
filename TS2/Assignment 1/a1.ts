/* Exercise 1: Optional Properties

Create an interface for representing a user profile. The user profile should have a username, email, and an optional bio. Write a function that displays the user's information, including the bio if provided.
*/

// TODO: Define the interface User with username, email, and optional bio

interface User {
    username: string;
    email: string;
    bio?: string;
}

// TODO: Create a user object using the defined interface. Add all properties

const user: User = {
    username: 'elli',
    email: 'ellinor@metropolia.fi',
    bio: 'elli123',
};

// TODO: Create another user object using the defined interface. Don't add bio

const user2: User = {
    username: 'joel',
    email: 'joel@metropolia.fi'
};

// Function to display user information
function displayUserInfo(user: User): void {
  // TODO: console log all properties of a user separately. Example: console.log(user.email)
    console.log('Username:', user.username);
    console.log('Email:', user.email)
    if (user.bio) {
        console.log('Bio:', user.bio);
    }
}

// Display user information
displayUserInfo(user);
displayUserInfo(user2);
