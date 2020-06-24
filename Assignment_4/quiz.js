// Base code from https://github.com/CodeExplainedRepo/Multiple-Choice-Quiz-JavaScript
// questions were inspired from http://www.joyfulheartfoundation.org/blog/quiz-how-much-do-you-know-about-consent


// select all elements
const qFilter = document.getElementById("qFilter");
const start = document.getElementById("start");
const quiz = document.getElementById("quiz-set");
const question = document.getElementById("question");
const choices = document.getElementById("choices");
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
    qFilter.style.display = "block";
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
    if(runningQuestion <= lastQuestion){
        qNext.style.display = "inline-block";
    }else{
        // end the quiz and show the score
        // scoreRender();
        qRestart.style.display = "inline-block";
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


// next question
function qProgress() {
    qClearChoices();
    qNext.style.display = "none";
    runningQuestion++;
    if (runningQuestion <= lastQuestion) {renderQuestion();}
    else {
        choices.style.display = "none";
        scoreDiv.style.display = "block";
        question.innerHTML = "<p>You got " + score.toString() + "/" + (lastQuestion+1).toString() + "</p>";
        message = "";
        switch (score) {
            case 3: message = "Great job! continue exercising consent and talking about it." ;break;
            case 2: message = "Not quite there yet! read a couple of more articles in the section before." ;break;
            case 1: message = "It's not okay. We encourage you to continue learning about consent." ;break;
            case 0: message = "What the f**k are you doing?" ;break;
            default: break;
        }
        scoreDiv.innerHTML = "<p class='center-2'>" + message + "</p>";
        qRestart.style.display = "inline-block";
    }
}

// restart
function qReset() {
    choices.style.display = "";
    progress.innerHTML = "";
    runningQuestion = 0;
    count = 0;
    score = 0;
    // renderQuestion();
    // renderProgress();
    scoreDiv.style.display = "none";
    qRestart.style.display = "none";
    start.style.display = "block";
    quiz.style.display = "none";
    qFilter.style.display = "none";
}

function qClearChoices() {
    choiceA.className = choiceA.className.replace("Choice-deactivated", "choice");
    choiceB.className = choiceB.className.replace("Choice-deactivated", "choice");
    choiceC.className = choiceC.className.replace("Choice-deactivated", "choice");
    userChoice.className = userChoice.className.replace(" wrong-answer", "");
    solution.className = solution.className.replace(" solution", "");
    userChoice = null;
}

function qImgLoad() {
    document.getElementsByClassName('qFallback')[0].style.backgroundColor = "transparent";
}