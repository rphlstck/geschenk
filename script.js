function checkAnswer() {
    const answer = document.getElementById('answerInput').value.toLowerCase().trim();
    if (answer === "sidekick") {
        document.getElementById('quiz-section').style.display = 'none';
        document.getElementById('result').style.display = 'block';
    } else {
        alert("Leider falsch, versuch es nochmal!");
    }
}