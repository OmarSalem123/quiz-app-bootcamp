// عشرة أسئلة عن JavaScript من الجلسات 13 إلى 17
// answer هو رقم الإجابة الصحيحة في options (العد يبدأ من صفر)
// code اختياري: كود يظهر تحت السؤال من اليسار لليمين

export const questions = [
  {
    question: "ما نتيجة هذا الكود؟",
    code: 'typeof "5"',
    options: ['"number"', '"string"', '"boolean"', '"undefined"'],
    answer: 1,
  },
  {
    question: "أي كلمة تعرّف متغيراً لا يمكن إعادة إسناده؟",
    options: ["let", "var", "const", "static"],
    answer: 2,
  },
  {
    question: "ما نتيجة هذا الكود؟",
    code: '2 + "2"',
    options: ["4", '"22"', "NaN", "خطأ"],
    answer: 1,
  },
  {
    question: "أي دالة تختار أول عنصر يطابق محدد CSS؟",
    options: ["getElementById", "querySelector", "querySelectorAll", "createElement"],
    answer: 1,
  },
  {
    question: "ما الذي يمنع الفورم من إعادة تحميل الصفحة؟",
    options: ["event.stopPropagation()", "event.preventDefault()", "return true", "form.reset()"],
    answer: 1,
  },
  {
    question: "ما نتيجة هذا الكود؟",
    code: "[1, 2, 3].map(n => n * 2)",
    options: ["[2, 4, 6]", "[1, 2, 3]", "12", "[1, 4, 9]"],
    answer: 0,
  },
  {
    question: "بعد هذا السطر، ما قيمة name؟",
    code: 'const { name } = { name: "لاتيه", price: 16 }',
    options: ['"لاتيه"', "16", "undefined", "{ name, price }"],
    answer: 0,
  },
  {
    question: "بأي ترتيب يطبع هذا الكود؟",
    code: 'console.log("A")\nsetTimeout(() => console.log("B"), 0)\nconsole.log("C")',
    options: ["A B C", "A C B", "B A C", "C A B"],
    answer: 1,
  },
  {
    question: "ماذا ترجع fetch؟",
    options: ["JSON مباشرة", "Promise", "نص عادي", "undefined"],
    answer: 1,
  },
  {
    question: "أي قيمة من هذه تعتبر falsy؟",
    options: ['"0"', "[]", "0", '"false"'],
    answer: 2,
  },
];
