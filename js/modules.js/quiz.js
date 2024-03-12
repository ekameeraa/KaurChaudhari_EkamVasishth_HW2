class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.totalQuestions = this.questions.length;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  answerQuestion(selectedOption) {
    const currentQuestion = this.getCurrentQuestion();
    if (selectedOption === currentQuestion.correct_option) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }

  isQuizFinished() {
    return this.currentQuestionIndex === this.totalQuestions;
  }

  resetQuiz() {
    console.log("reset quiz called");
    this.currentQuestionIndex = 0;
    this.score = 0;
  }
}

const quizData = [
  {
    question: 'Who is known as "The Rock" in WWE?',
    options: [
      "John Cena",
      "Dwayne Johnson",
      "Stone Cold Steve Austin",
      "Randy Orton",
    ],
    correct_option: "Dwayne Johnson",
  },
  {
    question: 'Which WWE superstar is known as "The Deadman"?',
    options: ["John Cena", "The Undertaker", "Triple H", "Roman Reigns"],
    correct_option: "The Undertaker",
  },
  {
    question: "Who is the longest-reigning WWE Champion of the modern era?",
    options: ["John Cena", "CM Punk", "Brock Lesnar", "Randy Orton"],
    correct_option: "CM Punk",
  },
  {
    question: 'Which WWE event is known as "The Grandest Stage of Them All"?',
    options: ["WrestleMania", "Royal Rumble", "SummerSlam", "Survivor Series"],
    correct_option: "WrestleMania",
  },
  {
    question: "Who holds the record for the most Royal Rumble match victories?",
    options: [
      "Stone Cold Steve Austin",
      "Hulk Hogan",
      "Shawn Michaels",
      "The Rock",
    ],
    correct_option: "Stone Cold Steve Austin",
  },
  {
    question: 'Which WWE superstar is known as "The Beast Incarnate"?',
    options: ["Roman Reigns", "John Cena", "Brock Lesnar", "Randy Orton"],
    correct_option: "Brock Lesnar",
  },
  {
    question:
      "Who is the only wrestler to win the WWE Championship, Intercontinental Championship, and Tag Team Championship in their debut match?",
    options: ["Kurt Angle", "Brock Lesnar", "The Rock", "Randy Orton"],
    correct_option: "Kurt Angle",
  },
  {
    question: "Who was the first-ever WWE Universal Champion?",
    options: ["Roman Reigns", "Seth Rollins", "Finn Bálor", "Kevin Owens"],
    correct_option: "Finn Bálor",
  },
  {
    question: 'Which WWE superstar is known as "The Viper"?',
    options: ["Randy Orton", "Edge", "John Cena", "Triple H"],
    correct_option: "Randy Orton",
  },
  {
    question: 'Who is known as "The Phenom" in WWE?',
    options: ["John Cena", "The Undertaker", "Shawn Michaels", "Triple H"],
    correct_option: "The Undertaker",
  },
];

const quiz = new Quiz(quizData);

export function renderQuestions() {
  const questionsContainer = document.querySelector("#questions-container");
  questionsContainer.innerHTML = "";

  quizData.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `
          <p>${index + 1}. ${question.question}</p>
          <div class="options-container">
            ${question.options
        .map(
          (option, optionIndex) => `
              <input type="radio" id="option-${index}-${optionIndex}" name="option-${index}" value="${option}">
              <label for="option-${index}-${optionIndex}">${option}</label><br>
            `
        )
        .join("")}
          </div>
        `;
    questionsContainer.appendChild(questionElement);
  });

  document.querySelector("#submit-btn").style.display = "block";
}

export function submitAnswers() {
  const forms = document.querySelectorAll("#quiz-form .options-container");
  forms.forEach((form, index) => {
    const question = quiz.questions[index];
    const selectedOption = form.querySelector(`input[name="option-${index}"]:checked`);
    const questionContainer = form.parentElement;

    // Remove existing correct answer display
    const existingCorrectAnswerDisplay = questionContainer.querySelector(".correct-answer");
    if (existingCorrectAnswerDisplay) {
      existingCorrectAnswerDisplay.remove();
    }

    if (selectedOption) {
      quiz.answerQuestion(selectedOption.value);
      const selectedLabel = form.querySelector(`label[for="${selectedOption.id}"]`);

      if (selectedOption.value !== question.correct_option) {
        // Indicate the selected option is incorrect
        selectedLabel.classList.add("incorrect");
        // Display the correct answer below the options
        const correctAnswerDisplay = document.createElement("div");
        correctAnswerDisplay.classList.add("correct-answer");
        correctAnswerDisplay.textContent = `Correct Answer: ${question.correct_option}`;
        correctAnswerDisplay.style.color = "green";
        questionContainer.appendChild(correctAnswerDisplay);
      } else {
        selectedLabel.classList.add("correct");
      }
    }
  });

  renderResult();
}


function renderResult() {
  const resultContainer = document.querySelector("#result-container");
  resultContainer.style.display = "block";
  resultContainer.textContent = `Score: ${quiz.score}/${quiz.totalQuestions}`;

  document.querySelector("#submit-btn").style.display = "none";

  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.checked = false;
  });
  quiz.resetQuiz();
}

export function resetQuiz() {
  // Reset the quiz data
  quiz.resetQuiz();
  // Reset the UI
  document.querySelectorAll("#quiz-form label").forEach(label => {
    label.style.backgroundColor = "";
  });
  renderQuestions();
  document.querySelector("#submit-btn").style.display = "block";
  // Hide the result container since the quiz is starting over
  const resultContainer = document.querySelector("#result-container");
  resultContainer.style.display = "none";
}
