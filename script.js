// Hier kannst du beliebig viele Tipps hinzufügen
const hints = [
    "Tipp 1: Was haben alle Charaktere gemeinsam in Bezug auf ihre Rolle?",
    "Tipp 2: Es ist ein englischer Begriff.",
    "Tipp 3: Es ist auch der Titel des Buches, das du bekommst!",
    "Letzter Tipp: Es fängt mit 'S' an und hört mit 'k' auf. Es hat 8 Buchstaben.",
    "Ach Bert, du schaffst das schon!",
    "Auf gehts Bertbo, denken und siegen!",
    "Komm schon Bert, nicht aufgeben..",
];

let currentHintIndex = 0;

function nextHint() {
    const container = document.getElementById('hints-container');

    if (currentHintIndex < hints.length) {
        // Erstelle ein neues Paragraph-Element für den Tipp
        const newHint = document.createElement('p');

        // Weise den Text zu
        newHint.innerText = hints[currentHintIndex];

        // Optional: Weise eine CSS-Klasse für Styling/Animation zu
        newHint.className = "individual-hint";

        // Füge den neuen Tipp dem Container hinzu (unten anfügen)
        container.appendChild(newHint);

        currentHintIndex++;
    }
}

function checkAnswer() {
    const answer = document.getElementById('answerInput').value.toLowerCase().trim();
    if (answer === "sidekick") {
        document.getElementById('quiz-section').style.display = 'none';
        document.getElementById('result').style.display = 'block';
    } else {
        alert("Leider falsch, versuch es nochmal!");
    }
}

function openBonus() {
    // Öffnet die Bonus-Seite in einem neuen Tab
    window.open('bonus.html', '_blank');
}