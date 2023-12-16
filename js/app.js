const questionNumber = document.querySelector(".question-number");

const questionText = document.querySelector(".question-text");

const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];

// add the questions to the availableQuestions array
function setAvailableQuestions() {
  const totalQuestions = questions.length;
  for (let i = 0; i < totalQuestions; i++) {
    availableQuestions.push(questions[i]);
  }
}

//set question number, question text and answer options
function getNewQuestion() {
  //set question number
  questionNumber.innerHTML = `Question ${questionCounter + 1} of ${
    questions.length
  }`;
  //set question text
  //get random question
  const questionIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  questionText.innerHTML = questionIndex.q;

  // get the position of "QuestionIndex" from the "AvailableQuestions" array

  const index1 = availableQuestions.indexOf(questionIndex);

  //remove questionIndex from the ‘AvailableQuestions’ array

  availableQuestions.splice(index1, 1);
  console.log(
    `The index of the randomly selected available question is ${index1}`
  );

  // set options
  // get the length of the list of options
  const optionsLength = questionIndex.options.length;

  optionContainer.innerHTML = "";

  // push options into availableOptions array

  for (let i = 0; i < optionsLength; i++) {
    availableOptions.push(i);
  }

  console.log(availableOptions);

  //create options in html
  let animationDelay = 0.1;

  for (let i = 0; i < optionsLength; i++) {
    const optionIndex =
      availableOptions[Math.floor(Math.random() * availableOptions.length)];

    //get the position of optionIndex from availableOptions

    const index2 = availableOptions.indexOf(optionIndex);

    //remove the “optionIndex” from the availableOptions so that the option does not repeat

    availableOptions.splice(index2, 1);

    console.log(optionIndex);

    console.log(availableOptions);

    const option = document.createElement("div");
    option.innerHTML = questionIndex.options[optionIndex];
    option.id = optionIndex;
    option.style.animationDelay = animationDelay + "s";

    animationDelay = animationDelay + 0.1;

    option.className = "option";
    optionContainer.appendChild(option);
  }

  // CHECK THAT THE FUNCTION ABOVE WORKS IN THE BROWSER CONSOLE

  questionCounter++;
}

function next() {
  if (questionCounter === questions.length) {
    console.log("Quiz over");
  } else {
    getNewQuestion();
  }
}

window.onload = function () {
  setAvailableQuestions();
  getNewQuestion();
};
