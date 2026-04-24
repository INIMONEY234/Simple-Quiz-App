//             <!-- Tasks & Assignments
// Project: Quiz App

// Build a simple Quiz App that presents multiple-choice questions to the user and calculates their score at the end. This project will help you practice working with arrays, objects, functions, etc.

// Features to Implement

// 1. Display Questions

// •⁠ ⁠Show one question at a time with multiple-choice answers.

// •⁠ ⁠Allow the user to select an answer.

// 2. Track Score

// •⁠ ⁠Keep track of the user's score based on correct answers.

// 3. Progress Indicator

// •⁠ ⁠Show the user which question they are on (e.g., "Question 3 of 10").

// 4. Results Screen

// •⁠ ⁠Display the user's final score at the end of the quiz. -->


const questions = [
    {
        question: "Who is the President of Nigeria?",
        options: ["Bola Wike", "Bola Ahmed Tinubu", "Atiku Ahmed", "Odogwu Bitters"],
        answer: 1
    },
    {
        question: "What is the capital city of Nigeria?",
        options: ["Warri", "Abuja", "Benin", "Kaduna"],
        answer: 1
    },
    {
        question: "What is the capital city of Rivers State?",
        options: ["Bori", "Etche", "Port Harcourt", "Awka"],
        answer: 2
    },
    {
        question: "What is the name of this Program?",
        options: ["Online Class", "Tutoring", "Learnable", "Code Online"], 
        answer: 2
    },
    {
        question: "What is the name of the Program Co-ordinator?",
        options: ["Faith Oluwatunmise", "Dev Inimoney", "Dev Ini Uya", "Dev Uya"],
        answer: 0
    },
    {
        question: "Who is the Coordinator of Upskill?", 
        options: ["Bruce", "Ini", "Miracle", "Esther"], 
        answer: 0
    },
    {
        question: "Upskill lasts for how many months?",
        options: ["2 months", "3 months", "4 months", "5 months"],
        answer: 1
    },
    {
        question: "Who is the Director of Learning at Genesys?",
        options: ["Tony", "Anthony", "Tappii", "Tonia"],
        answer: 2
    },
    {
        question: "Who is the Minister of the FCT?",
        options: ["Sim Fubara", "Wike Okocha", "Amaechi Obi", "Nyesom Wike"],
        answer: 3
    },
    {
        question: "Who is the Governor of Rivers State?",
        options: ["Nyesom Wike", "Wike Okocha", "Sim Fubara", "Tonye Cole"],
        answer: 2
    }
];

let currentIndex = 0;
let score = 0;
let selectedAnswer = null;

// Select elements
const progressEl = document.getElementById('progress');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtnEl = document.getElementById('nextBtn');
const quizBoxEl = document.getElementById('quiz-box');
const resultBoxEl = document.getElementById('result-box');
const finalScoreEl = document.getElementById('finalScore');

const loadQuestion = () => {
    selectedAnswer = null;
    const current = questions[currentIndex];

    questionEl.textContent = current.question;
    progressEl.textContent = `Question ${currentIndex + 1} of ${questions.length}`;

    optionsEl.innerHTML = "";

    current.options.forEach((optionText, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        optionDiv.textContent = optionText;

        optionDiv.onclick = () => {
            selectedAnswer = index;

            // Remove highlight from all options
            document.querySelectorAll('.option').forEach(opt => {
                opt.style.backgroundColor = '';
            });

            // Highlight selected option
            optionDiv.style.backgroundColor = "#a78bfa";
            optionDiv.style.color = "#67e8f9";
            optionDiv.style.fontWeight = 700;
        };

        optionsEl.appendChild(optionDiv);
    });
};

nextBtnEl.onclick = () => {
    if (selectedAnswer === null) {
        alert("Please select an answer before proceeding!");
        return;
    }

    // Check answer
    if (selectedAnswer === questions[currentIndex].answer) {
        score++;
    }

    currentIndex++;

    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

const showResult = () => {
    quizBoxEl.classList.add("hidden");
    resultBoxEl.classList.remove("hidden");
    finalScoreEl.textContent = `Your Final Score: ${score} / ${questions.length}`;
};

// Start the quiz
loadQuestion();