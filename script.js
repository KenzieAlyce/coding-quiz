var questionIndex = 0;
var answers = document.querySelectorAll('.answer');
var welcomeSec = document.querySelector('#welcomeSection');
var quizSec = document.querySelector('#quizSection');
var startBtn = document.querySelector('#startButton');



startBtn.addEventListener("click", startQuiz), showQuestion;
function startQuiz() {
welcomeSec.classList.add('hidden'); // hides the Welcome section
quizSec.classList.remove('hidden'); // display/shows the Quiz section
}

function startTimer() { 
  //var timerId = setInterval(<FUNCTION TO CALL>, 1000);
  //clearInterval(timerId); // Stops the process
  
}

var questions = [
  {
    question: 'Commonly used datatypes do NOT include:',
    answers: ['strings', 'booleans', 'alerts', 'numbers'],
    correctAnswer: 2
  },
  {
    question: 'The condition in an if/else statement is enclosed within ___ ',
    answers: ['curly brackets', 'parenthesis', 'quotation marks', 'brackets'],
    correctAnswer: 0
  },

{
question: 'Arrays in Javascript can be used to store ____.',
answers: ['strings', 'other arrays','numbers', 'all of the above'],
correctAnswer: 3
},

{
  question: 'String values must be enclosed within ____ when being assigned to variables',
  answers: ['brackets', 'commas', 'semi-colons', 'quotation marks'],
  correctAnswer: 3
},

{
question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
answers: ['Javascript', 'console.log','for loops', 'terminal/bash'],
correctAnswer: 1

},
];






function showQuestion() {
  var questionEl = document.querySelector('.question');

  var ans1 = document.querySelector('#answer1');
  var ans2 = document.querySelector('#answer2');
  var ans3 = document.querySelector('#answer3');
  var ans4 = document.querySelector ('#answer4');

  var questionObj = questions[questionIndex];
  questionEl.textContent = questionObj.question;
  ans1.textContent = questionObj.answers[0];
  ans2.textContent = questionObj.answers [1];
  ans3.textContent = questionObj.answers [2];
  ans4.textContent = questionObj.answers [3];

  ans1.dataset('correct') = (2 === questionObj.correctAnswer)
  ans2.dataset('correct') = (0 === questionObj.correctAnswer)
  ans3.dataset('correct') = (3 === questionObj.correctAnswer)
  ans4.dataset('correct') = (3 === questionObj.correctAnswer)

  ans3.addEventListner('click', function() {
  })
  questionIndex++;
}
