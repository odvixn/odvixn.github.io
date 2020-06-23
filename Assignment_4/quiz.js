// Base code from https://github.com/CodeExplainedRepo/Multiple-Choice-Quiz-JavaScript
// questions were inspired from http://www.joyfulheartfoundation.org/blog/quiz-how-much-do-you-know-about-consent


// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz-set");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const qNext = document.getElementById("qNext");
const qRestart = document.getElementById("qRestart");
let userChoice;

// create questions
let questions = [
    {
        question : "What is consent?",
        choiceA : "A conversation between partners about sexual preferences and desires.",
        choiceB : "An agreement between people to engage in sexual activity.",
        choiceC : "A verbal contract outlining exactly what sexual activities will take place.",
        correct : "B"
    },{
        question : "Which of the following statements indicates that consent has been given?",
        choiceA : "Yes, I want to",
        choiceB : "Maybe, I'm not sure",
        choiceC : "I guess if you really want to",
        correct : "A"
    },{
        question : "When should you ask for consent?",
        choiceA : "Every time you engage in intercouse.",
        choiceB : "First time you engage with a new partner.",
        choiceC : "If you are in a public place.",
        correct : "A"
    }
];

// create some variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// checkAnwer
function checkAnswer(answer){
    if (userChoice) return;
    userChoice = document.getElementById(answer);
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    // reveal correct answer
    solution = document.getElementById(questions[runningQuestion].correct);
    solution.className += " solution";

    // deactivate hover effect
    choiceA.className = choiceA.className.replace("choice", "Choice-deactivated");
    choiceB.className = choiceB.className.replace("choice", "Choice-deactivated");
    choiceC.className = choiceC.className.replace("choice", "Choice-deactivated");

    count = 0;
    if(runningQuestion < lastQuestion){
        qNext.style.display = "block";
    }else{
        // end the quiz and show the score
        // scoreRender();
        qRestart.style.display = "block";
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0a0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#a00";

    // color wrong answer
    userChoice.className += " wrong-answer";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "resources/quiz_5.png" :
              (scorePerCent >= 60) ? "resources/quiz_4.png" :
              (scorePerCent >= 40) ? "resources/quiz_3.png" :
              (scorePerCent >= 20) ? "resources/quiz_2.png" :
              "resources/quiz_1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}

// next question
function qProgress() {
    qClearChoices();
    qNext.style.display = "none";
    runningQuestion++;
    renderQuestion();
}

// restart
function qReset() {
    qClearChoices();
    progress.innerHTML = "";
    runningQuestion = 0;
    count = 0;
    score = 0;
    renderQuestion();
    renderProgress();
    scoreDiv.style.display = "none";
    qRestart.style.display = "none";
}

function qClearChoices() {
    choiceA.className = choiceA.className.replace("Choice-deactivated", "choice");
    choiceB.className = choiceB.className.replace("Choice-deactivated", "choice");
    choiceC.className = choiceC.className.replace("Choice-deactivated", "choice");
    userChoice.className = userChoice.className.replace(" wrong-answer", "");
    solution.className = solution.className.replace(" solution", "");
    userChoice = null;
}