// اختبار JavaScript: الجلسة 18
// افتح الصفحة بـ Live Server لأن الملف module

import { questions } from "./questions.js";

const TIME_PER_QUESTION = 15;
const BEST_KEY = "jsQuizBest";

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const doneScreen = document.querySelector("#done-screen");
const bestText = document.querySelector("#best");
const startBtn = document.querySelector("#start-btn");
const progressText = document.querySelector("#progress");
const scoreText = document.querySelector("#score");
const timerText = document.querySelector("#timer");
const questionText = document.querySelector("#question");
const codeBlock = document.querySelector("#code");
const optionsList = document.querySelector("#options");
const feedbackText = document.querySelector("#feedback");
const nextBtn = document.querySelector("#next-btn");
const finalText = document.querySelector("#final");
const bestDoneText = document.querySelector("#best-done");

const state = {
    screen: "start",
    current: 9,
    score: 0,
    selected: null,
    timeLeft: TIME_PER_QUESTION,
    timerId: null,
    isNewBest: false,
}

// نكتب الباقي مع بعض في اللايف، مرحلة بمرحلة

function render() {
    startScreen.hidden = state.screen !== "start";
    quizScreen.hidden = state.screen !== "quiz";
    doneScreen.hidden = state.screen !== "done";

    if (state.screen === "start") renderStart();
    if (state.screen === "quiz") renderQuiz();
    if (state.screen === "done") renderDone();
}

function renderStart() {
    bestText.textContent = loadBest().score;
}

function renderTimer() {
    timerText.textContent = `${state.timeLeft} ثانية`;
    timerText.classList.toggle("danger", state.timeLeft <= 5);
}

function renderQuiz() {
    const question = questions[state.current];
    console.log(question);
    progressText.textContent = `سوال ${state.current + 1} من ${questions.length}`;
    scoreText.textContent = `النتيجة ${state.score}`;
    questionText.textContent = question.question;
    codeBlock.hidden = !question.code;
    codeBlock.textContent = question.code;
    renderTimer();

    optionsList.innerHTML = "";
    question.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "option";
        btn.textContent = option;

        if(state.selected !== null){
            btn.disabled = true;
            if(index === question.answer) {
                btn.classList.add("correct")
            } else if (index === state.selected) {
                btn.classList.add("wrong");
            }
        }

        btn.addEventListener("click", () => chooseAnswer(index));

        const li = document.createElement("li");
        li.append(btn);
        optionsList.append(li);
    })

    if(state.selected === null) feedbackText.textContent= ""
    else if (state.selected === -1) feedbackText.textContent = "خلص الوقت الأجابة الصحيحة بالاحضر"
    else if (state.selected === question.answer) feedbackText.textContent = "صح, كفو!"
    else feedbackText.textContent = "غلط, الأجابة الصحيحة بالاخضر";

    const isLast = state.current === questions.length - 1;
    nextBtn.textContent = isLast ? "شوف النتيجة" : "السوال التالي";
    nextBtn.hidden = state.selected === null
}

function chooseAnswer(index) {
    if(state.selected !== null) return;
    stopTimer();
    state.selected = index;
    if(index === questions[state.current].answer) {
        state.score += 1
    }
    render();
}

function nextQuestion() {
    state.current += 1;
    if(state.current >= questions.length){
        finishQuiz();
        return;
    }
    state.selected = null;
    startTimer();
    render();
}

function finishQuiz() {
    stopTimer();
    state.screen = "done";
    state.isNewBest = saveBest(state.score);
    render();
}

function startTimer() {
    stopTimer();
    state.timeLeft = TIME_PER_QUESTION;
    state.timerId = setInterval(tick, 1000);
}

function tick() {
    state.timeLeft -= 1;
    renderTimer();
    if(state.timeLeft <= 0) timeUp();
}

function timeUp() {
    stopTimer();
    state.selected = -1;
    render();
}

function stopTimer() {
    clearInterval(state.timerId);
    state.timerId = null;
}

function startQuiz() {
    state.screen = "quiz";
    state.current = 0;
    state.score = 0;
    state.selected = null;
    startTimer();
    render();
}

startBtn.addEventListener("click", () => startQuiz())
nextBtn.addEventListener("click", () => nextQuestion())

function renderDone() {
    finalText.textContent = `نتيجتك ${state.score} من ${questions.length}`;
    bestDoneText.textContent =  state.isNewBest ? "رقم قياسي جديد! انحفظ في المتصفح" : bestLine();
}

function bestLine() {
    const best = loadBest();
    if(best === null) return "لا يوجد اجابات بعد";
    return `افضل نتيجة ${best.score}`;
}

function loadBest() {
    const saved = localStorage.getItem(BEST_KEY);
    if(saved === null) return null;
    return JSON.parse(saved);
}

function saveBest(score) {
    const best = loadBest();
    if(best === null || score > best.score) {
        const record = {
            score, 
            date: new Date().toDateString().slice(0, 10)
        }

        localStorage.setItem(BEST_KEY, JSON.stringify(record));
        return true``
    }
    return false;
}

render();