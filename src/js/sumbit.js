window.onload = function () {
    const result = localStorage.getItem("result");
    const totalQuestions = localStorage.getItem("totalQuestions");
    document.getElementById("score").innerText = `You scored ${result} out of ${totalQuestions}`;
};

function restartQuiz() {
    localStorage.removeItem("result");
    localStorage.removeItem("totalQuestions");
    window.location.href = "index.html";
}