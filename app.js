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

// نكتب الباقي مع بعض في اللايف، مرحلة بمرحلة
