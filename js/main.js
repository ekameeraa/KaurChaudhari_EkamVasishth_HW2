import {
  renderQuestions,
  submitAnswers,
  resetQuiz,
} from "./modules.js/quiz.js";

renderQuestions();

document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("submit-btn").onclick = submitAnswers;
    
    document.getElementById("reset-btn").onclick = resetQuiz;
});
