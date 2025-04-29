const questions = [
    {
        question: "What is the capital of Egypt?",
        choices: ["Cairo", "London", "Paris", "Rome"],
        correct: "Cairo"
    },
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        correct: "4"
    },
    {
        question: "Who wrote 'Clean Code'?",
        choices: ["Robert C. Martin", "Elon Musk", "Bill Gates", "Ada Lovelace"],
        correct: "Robert C. Martin"
    },
    {
        question: "What is the output of typeof null?",
        choices: ["null", "object", "undefined", "string"],
        correct: "object"
    },
    {
        question: "What does HTML stand for?",
        choices: ["HyperText Markup Language", "HighText Machine Language", "Hyper Transfer Markup Language", "None"],
        correct: "HyperText Markup Language"
    }
];

let currentquestion = 0;
let selectedAnswers = [];
const totalQuestions = questions.length;

function updateQuestion() {
    const q = questions[currentquestion];
    document.getElementById('question').textContent = `Q${currentquestion + 1}: ${q.question}`;
    renderChoices(q.choices);
    updateButton();
}

function renderChoices(choices) {
    const container = document.getElementById("choicesContainer");
    container.innerHTML = "";
    choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice;
        btn.className = "choice-btn border border-[#BDBCBC] px-2 py-1 rounded-md text-sm hover:bg-gray-200 transition-all w-52 mb-1";
        btn.onclick = () => selectChoice(choice, btn);
        container.appendChild(btn);
    });
}

function selectChoice(choice, btn) {
    selectedAnswers[currentquestion] = choice;

    document.querySelectorAll('.choice-btn').forEach(button => {
        button.classList.remove('bg-blue-200');
    });

    btn.classList.add("bg-blue-200");
}

function updateProgressBar() {
    const progress = ((currentquestion + 1) / totalQuestions) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
}

function updateButton() {
    const btn = document.getElementById('btn');
    if (currentquestion === totalQuestions - 1) {
        btn.innerText = "Submit";
        btn.onclick = function () {
            const result = selectedAnswers.reduce((acc, answer, index) => {
                if (answer === questions[index].correct) {
                    acc++;
                }
                return acc;
            }, 0);
            localStorage.setItem("result", result);
            localStorage.setItem("totalQuestions", totalQuestions);
            window.location.href = "sumbit.html";
        };
    } else {
        btn.innerText = "Next";
        btn.onclick = handleNext;
    }
}

function handleNext() {
    if (currentquestion < totalQuestions - 1) {
        currentquestion++;
        updateQuestion();
        updateProgressBar();
    }
}

updateQuestion();
updateProgressBar();
