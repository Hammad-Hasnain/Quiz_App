/* =================== Timer Start =================== */


var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var mins = 5;
var secs = 0;
var ms = 99;
var interval;

function timer() {
    interval = setInterval(startTimer, 10)


}
function startTimer() {
    ms--;
    if (ms === 0) {
        secs--;
        seconds.innerHTML = secs
        ms = 99;
    }
    else if (secs === 0) {
        mins--;
        minutes.innerHTML = mins
        secs = 59;
        seconds.innerHTML = secs
    }
    else if (mins === -1) {
        console.log("minutes 0")
        clearInterval(interval)
        // alert("time's up")
        mins = "00";
        secs = "00";
        minutes.innerHTML = mins;
        seconds.innerHTML = secs;
    }
}
/* =================== Timer End =================== */

/* =================== Quiz Start Up ===================*/
var startBtn = document.getElementById("startBtn")
function start() {
    timer()
    startBtn.innerHTML = ` <button onclick="next()" class="btn shadow btn-dark" id="nextBtn">Next</button> `
    next()
}











//QUESTIONS ARRAY

var questionData = [
    {
        question: "What is the Full Form Of HTML?",
        answer: "HyperText Markup Language",
        options: [
            "HyperText Makeup Language",
            "HyperText Markup Language",
            "HyperText Markup Lame",
            "HyperTate Markup Language",
        ],
    },
    {
        question: "What does CSS stands for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet",
        ],
    },
    {
        question: "What does PHP stands for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor",
        ],
    },
    {
        question: "What does SQL stands for?",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language",
        ],
    },
    {
        question: "What year was JavaScript launched?",
        answer: "1995",
        options: ["1996", "1995", "1994", "None of the Above"],
    },
];


var questionNum = document.getElementById("questionNum")
var questionTxt = document.getElementById("questionTxt")
var option = document.getElementById("options")

var questionIndex = 0;
var score = 0;
var scoreChecking = false;
// var optIndx;


// var optionsArray = [];

function render() {
    if (questionIndex < questionData.length) {
        questionNum.innerHTML = `Question number ${questionIndex + 1}/${questionData.length}`

        questionTxt.innerHTML = `${questionData[questionIndex].question}`

        option.innerHTML = ""

        // it  displays the options on web
        for (var i = 0; i < questionData[questionIndex].options.length; i++) {
            option.innerHTML += `
            <div class="col-sm-12 col-md-6 my-2">
            <button onclick="checkAns('${questionData[questionIndex].options[i]}', '${questionData[questionIndex].answer}', ${i})" id="opt${i}" class="options btn shadow btn-outline-dark h-100 w-100 p-2">${questionData[questionIndex].options[i]}</button>
            </div>
            `

        }
    }
    // This part runs when all questions will be completed
    else {
        console.log("Questions end")
        option.innerHTML = ""
        clearInterval(interval);
        questionTxt.innerHTML = `Score: ${score} `
        startBtn.innerHTML = ` <button onclick="next()" disabled class="btn shadow btn-dark" id="nextBtn">Next</button> `
    }
}

function checkAns(userAns, CorrectAns, num) {
    // it checks whether the (selected option/user answer) is correct or not.
    if (userAns === CorrectAns) {
        scoreChecking = true;
        console.log("correct")
    }
    else {
        scoreChecking = false;
        console.log("wrong")
    }
    for (var j = 0; j < 4; j++) {
        if (num === j) {
            // design will be applied on slected option
            var opt = document.getElementById(`opt${j}`)
            opt.className = "btn shadow btn-dark h-100 w-100 p-2"
        }
        else {
            // design will be applied on unslected options
            opt = document.getElementById(`opt${j}`)
            opt.className = "btn shadow btn-outline-dark h-100 w-100 p-2"
        }
    }
}

function next() {
    // updation of score depends on checkAns() function 
    if (scoreChecking) {
        score++
        console.log("score " + score)
    }
    scoreChecking = false;
    render()
    questionIndex++
}


