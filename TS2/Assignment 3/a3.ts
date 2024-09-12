/* Exercise 3: Tuple Types

Develop an interface for a student's exam result. Each result should include the student's name, an array of subject scores as a tuple (subject name and score), and the total score. Write a function that calculates and displays the average score.
*/

// TODO: Define the interface ExamResult with name, subject scores tuple, and total score
interface ExamResult {
    name: string;
    scores: [string, number][];
    totalScore: number;
}

const examResult: ExamResult = {
  name: "Alice",
  scores: [["Math", 85], ["Science", 92], ["History", 78]],
  totalScore: 255
};

// Function to calculate and display average score
function displayAverageScore(result: ExamResult): void {
  const totalSubjects = result.scores.length;
  const totalScore = result.totalScore;
  const averageScore = totalScore / totalSubjects;
  console.log(`Average Score for ${result.name}: ${averageScore.toFixed(2)}`);
}

// Display average score
displayAverageScore(examResult);
