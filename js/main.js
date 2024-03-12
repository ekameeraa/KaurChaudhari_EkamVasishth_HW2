// main.js
import { renderQuestions, submitAnswers as originalSubmitAnswers, resetQuiz as originalResetQuiz } from "./modules.js/quiz.js";
import { animateQuestions, highlightAnswers, animateResult, animateReset } from "./modules.js/animate.js";

function submitAnswers() {
  originalSubmitAnswers();
  highlightAnswers();
  animateResult();
}

function resetQuiz() {
  originalResetQuiz();
  animateReset();
}

renderQuestions();
animateQuestions();

document.querySelector("#submit-btn").onclick = submitAnswers;
document.querySelector("#reset-btn").onclick = resetQuiz;
