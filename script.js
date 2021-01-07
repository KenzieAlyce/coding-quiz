
var questionIndex = 0;
var answers = document.querySelectorAll('.answer');
var welcomeSec = document.querySelector('#welcomeSection');
var questionOne = document.querySelector('#questionOne');
var startBtn = document.querySelector('#startButton');



startBtn.addEventListener("click", startQuiz),
function startQuiz() {
questionOne.classList.add('hidden'); // hides the Welcome section
quizSec.classList.remove('hidden'); // display/shows the Quiz section
}

//function startTimer() { 
  //var timerId = setInterval(<FUNCTION TO CALL>, 1000);
  //clearInterval(timerId); // Stops the process
  
