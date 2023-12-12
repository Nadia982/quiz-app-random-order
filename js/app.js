const questionNumber = document.querySelector(".question-number");

const questionText = document.querySelector(".question-text");

const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];

// add the questions to the availableQuestions array
function setAvailableQuestions() {
  const totalQuestions = questions.length;
  for (let i = 0; i < totalQuestions; i++) {
    availableQuestions.push(questions[i]);
  }
}

//set question number, question text and answer options
function getNewQuestion(){
    //set question number
    questionNumber.innerHTML = `Question ${questionCounter + 1} of ${questions.length}`;
    //set question text
    //get random question
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    questionText.innerHTML = questionIndex.q;

    questionCounter++;
}

function next() {
    if(questionCounter === questions.length) {
        console.log("Quiz over");
    }
    else{getNewQuestion();
}
}

window.onload = function () {
  setAvailableQuestions();
  getNewQuestion();
};