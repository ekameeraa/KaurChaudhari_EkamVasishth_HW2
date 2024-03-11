import {
  renderQuestions,
  submitAnswers,
  resetQuiz,
} from './modules.js/quiz.js';

renderQuestions();

document.querySelector('#submit-btn').onclick = () => submitAnswers();
document.querySelector('#reset-btn').onclick = () => resetQuiz();
