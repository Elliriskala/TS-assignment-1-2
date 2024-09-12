/* Exercise 3: Tuple Types

Develop an interface for a student's exam result. Each result should include the student's name, an array of subject scores as a tuple (subject name and score), and the total score. Write a function that calculates and displays the average score.
*/
var examResult = {
    name: "Alice",
    scores: [["Math", 85], ["Science", 92], ["History", 78]],
    totalScore: 255
};
// Function to calculate and display average score
function displayAverageScore(result) {
    var totalSubjects = result.scores.length;
    var totalScore = result.totalScore;
    var averageScore = totalScore / totalSubjects;
    console.log("Average Score for ".concat(result.name, ": ").concat(averageScore.toFixed(2)));
}
// Display average score
displayAverageScore(examResult);
