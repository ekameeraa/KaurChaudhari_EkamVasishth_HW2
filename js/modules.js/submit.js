export const submitAnswers = () => {
  const forms = document.querySelectorAll("#quiz-form .options-container");
  forms.forEach((form, index) => {
    const selectedOption = form.querySelector(
      `input[name="option-${index}"]:checked`
    );
    if (selectedOption) {
      quiz.answerQuestion(selectedOption.value);
    }
  });

  renderResult();
};
