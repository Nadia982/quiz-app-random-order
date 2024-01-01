const questionNumber = document.querySelector(".question-number");

const questionText = document.querySelector(".question-text");

const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const nextButton = document.querySelector(".next-btn");
const questionLimit = 5;

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;

// add the questions to the availableQuestions array
function setAvailableQuestions() {
  const totalQuestions = questions.length;
  for (let i = 0; i < totalQuestions; i++) {
    availableQuestions.push(questions[i]);
  }
}

//set question number, question text and answer options
function getNewQuestion() {
  nextButton.classList.add("hide");

  //set question number
  questionNumber.innerHTML = `Question ${
    questionCounter + 1
  } of ${questionLimit}`;
  //set question text
  //get random question
  const questionIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;

  // get the position of "QuestionIndex" from the "AvailableQuestions" array

  const index1 = availableQuestions.indexOf(questionIndex);

  //remove questionIndex from the ‘AvailableQuestions’ array

  availableQuestions.splice(index1, 1);

  // show question image if "img" property exists

  if (currentQuestion.hasOwnProperty("img")) {
    console.log(currentQuestion.img);
    const img = document.createElement("img");
    img.src = currentQuestion.img;
    questionText.appendChild(img);
  }

  // set options
  // get the length of the list of options
  const optionsLength = currentQuestion.options.length;

  optionContainer.innerHTML = "";

  // push options into availableOptions array

  for (let i = 0; i < optionsLength; i++) {
    availableOptions.push(i);
  }

  //create options in html
  let animationDelay = 0.1;

  for (let i = 0; i < optionsLength; i++) {
    const optionIndex =
      availableOptions[Math.floor(Math.random() * availableOptions.length)];

    //get the position of optionIndex from availableOptions

    const index2 = availableOptions.indexOf(optionIndex);

    //remove the “optionIndex” from the availableOptions so that the option does not repeat

    availableOptions.splice(index2, 1);

    const option = document.createElement("button");
    option.innerHTML = currentQuestion.options[optionIndex];
    option.id = optionIndex;
    option.style.animationDelay = animationDelay + "s";
    option.tabIndex = i + 1;
    console.log(option.tabIndex);

    animationDelay = animationDelay + 0.1;

    option.className = "option";
    optionContainer.appendChild(option);
    option.setAttribute("onclick", "getResult(this)");

    option.addEventListener("keydown", pressEnterToGetResult);

    function pressEnterToGetResult(e) {
      if (e.key == "Enter") {
        option.removeEventListener("keydown", pressEnterToGetResult);
        getResult(this);
        unclickableOptions();
      }
    }
  }
  questionCounter++;
}

function getResult(element) {
  unclickableOptions();
  const id = parseInt(element.id);
  //get the answer by comparing the id of the clicked option
  if (id === currentQuestion.answer) {
    // add green colour if user selects correct option
    element.classList.add("correct");
    //add a tick mark to the answer indicator
    updateAnswerIndicator("correct");
    correctAnswers++;

    // availableOptions.removeEventListener("keydown", pressEnterToGetResult);
  } else {
    // add red colour if user selects incorrect option
    element.classList.add("incorrect");
    //add a cross mark to the answer indicator
    updateAnswerIndicator("incorrect");

    //if answer is incorrect then show the correct answer
    const optionsLength = optionContainer.children.length;
    for (let i = 0; i < optionsLength; i++) {
      setTimeout(() => {
        if (
          parseInt(optionContainer.children[i].id) === currentQuestion.answer
        ) {
          optionContainer.children[i].classList.add("correct");
        }
      }, 400);
    }
  }
  attempt++;
  // document.addEventListener("keydown", pressEnterForNextQu);
  // next();
  nextButton.classList.remove("hide");
}

//add shortcut key for the return key to go to the next question
function pressEnterForNextQu(e) {
  if (e.key === "Enter") {
    next();
  }
}

//make other options unclickable once user has selected an option
function unclickableOptions() {
  const optionsLength = optionContainer.children.length;
  for (let i = 0; i < optionsLength; i++) {
    optionContainer.children[i].classList.add("already-answered");
    optionContainer.children[i].setAttribute("disabled", "");
  }
}

//creating answersIndicator box, and answer indicator circles for each question
function answersIndicator() {
  answersIndicatorContainer.innerHTML = "";
  const totalQuestion = questionLimit;
  for (let i = 0; i < totalQuestion; i++) {
    const indicator = document.createElement("div");
    answersIndicatorContainer.appendChild(indicator);
  }
}

function updateAnswerIndicator(markType) {
  answersIndicatorContainer.children[questionCounter - 1].classList.add(
    markType
  );
}

function next() {
  // document.removeEventListener("keydown", pressEnterForNextQu);
  if (questionCounter >= questionLimit) {
    quizOver();
  } else {
      getNewQuestion();
  }
}

function quizOver() {
  //hide quizBox
  quizBox.classList.add("hide");
  //show resultBox
  resultBox.classList.remove("hide");
  quizResult();
}

//get the quiz result
function quizResult() {
  resultBox.querySelector(".total-question").innerHTML = questionLimit;
  resultBox.querySelector(".total-attempts").innerHTML = attempt;
  resultBox.querySelector(".correct-answers").innerHTML = correctAnswers;
  resultBox.querySelector(".wrong-answers").innerHTML =
    attempt - correctAnswers;
  const percentage = (correctAnswers / questionLimit) * 100;
  resultBox.querySelector(".percent-correct").innerHTML =
    percentage.toFixed(2) + "%";
  resultBox.querySelector(".total-score").innerHTML =
    correctAnswers + "/" + questionLimit;
}

function resetQuiz() {
  questionCounter = 0;
  correctAnswers = 0;
  attempt = 0;
  availableQuestions = [];
}

function tryAgainQuiz() {
  //hide the result box
  resultBox.classList.add("hide");

  //show the quiz box
  quizBox.classList.remove("hide");

  resetQuiz();
  startQuiz();
}

function goToHome() {
  //hide result box
  resultBox.classList.add("hide");
  // show home box
  homeBox.classList.remove("hide");
  resetQuiz();
}

function startQuiz() {
  // hide home box
  homeBox.classList.add("hide");
  //hide result box
  resultBox.classList.add("hide");
  // show quiz box
  quizBox.classList.remove("hide");

  setAvailableQuestions();
  getNewQuestion();
  // to create indicator of answers
  answersIndicator();
}

window.onload = function () {
  homeBox.querySelector(".total-questions").innerHTML = questionLimit;
};
