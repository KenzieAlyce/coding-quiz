
var questionIndex = 0;

var welcomeSec = document.querySelector('#welcomeSection');
var questionOne = document.querySelector('#questionOne');
var questionTwo = document.querySelector ('#questionTwo');
var questionThree = document.querySelector ('#questionThree');
var questionFour = document.querySelector ('questionFour');
var questionFive = document.querySelector ('questionFive');
var startBtn = document.querySelector('#startButton');



startBtn.addEventListener("click", startQuiz)
  
function startQuiz() {
welcomeSec.classList.add('hidden'); // hides the Welcome section
questionOne.classList.remove('hidden'); // display/shows the Quiz section
}

//function startTimer() { 
  //var timerId = setInterval(<FUNCTION TO CALL>, 1000);
  //clearInterval(timerId); // Stops the process
  
