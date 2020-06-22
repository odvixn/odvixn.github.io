// <!-- this code was inspired from https://github.com/CodeExplainedRepo/Multiple-Choice-Quiz-JavaScript -->
// questions were inspired from http://www.joyfulheartfoundation.org/blog/quiz-how-much-do-you-know-about-consent


// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const qRestart = document.getElementById("qRestart");

// create our questions
let questions = [
    {
        question : "What is consent?",
        // image was taken from https://www.healthline.com/health/guide-to-consent
        imgSrc : "resources/quiz_a1.png",
        choiceA : "A conversation between partners about sexual preferences and desires.",
        choiceB : "An agreement between people to engage in sexual activity.",
        choiceC : "A verbal contract outlining exactly what sexual activities will take place.",
        correct : "B"
    },{
        question : "Which of the following statements indicates that consent has been given?",
        // image was taken from https://www.columbiaspectator.com/news/2020/01/27/here-are-seven-factors-that-influence-sexual-consent/
        imgSrc : "resources/quiz_a2.png",
        choiceA : "Yes, I want to",
        choiceB : "Maybe, I'm not sure",
        choiceC : "I guess if you really want to",
        correct : "A"
    },{
        question : "When should you ask for consent?",
        // image was taken from https://www.nytimes.com/2017/12/16/sunday-review/when-saying-yes-is-easier-than-saying-no.html
        imgSrc : "resources/quiz_a3.png",
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
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
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
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
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
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
        qRestart.style.display = "block";
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
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