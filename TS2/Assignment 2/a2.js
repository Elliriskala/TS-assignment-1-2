/* Exercise 2: Array Types

Construct an interface for a blog post. Each post should have a title, content, and an array of tags. Write a function that displays the tags of a blog post.
*/
var blogPost = {
    title: "Getting Started with TypeScript",
    content: "Learn the basics of TypeScript and its powerful features.",
    tags: ["TypeScript", "Programming", "Web Development"]
};
// Function to display tags of a blog post
function displayTags(post) {
    console.log("Tags: ".concat(post.tags.join(", ")));
}
// Display tags of the blog post
displayTags(blogPost);
