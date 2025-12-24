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
    // Zeige die Bonus-Sektion innerhalb der Seite
    const quiz = document.getElementById('quiz-section');
    const result = document.getElementById('result');
    const bonus = document.getElementById('bonus-section');

    if (quiz) quiz.style.display = 'none';
    if (result) result.style.display = 'none';
    if (bonus) bonus.style.display = 'block';

    // Reset Bonus UI
    const hintsContainer = document.getElementById('bonus-hints-container');
    if (hintsContainer) hintsContainer.innerHTML = '';
    currentBonusHintIndex = 0;

    const resultEl = document.getElementById('bonusResult');
    if (resultEl) resultEl.style.display = 'none';

    const inputEl = document.getElementById('bonusAnswer');
    if (inputEl) inputEl.value = '';

    // Scroll zur Bonus-Sektion
    if (bonus) bonus.scrollIntoView({ behavior: 'smooth' });
}

function closeBonus() {
    const quiz = document.getElementById('quiz-section');
    const result = document.getElementById('result');
    const bonus = document.getElementById('bonus-section');

    if (bonus) bonus.style.display = 'none';
    // Zeige das Ergebnis wieder (da Bonus nach Lösen erscheint)
    if (result) result.style.display = 'block';
}

// Platzhalter-Tipps für das Bonus-Rätsel
const bonusHints = [
    "Tipp 1: 🤏",
    "Tipp 2: 🪽",
    "Tipp 3: Es handelt sich um ein Mobile Game. 🎮"
];
let currentBonusHintIndex = 0;

function nextBonusHint() {
  const container = document.getElementById('bonus-hints-container');
  if (currentBonusHintIndex < bonusHints.length) {
    const newHint = document.createElement('p');
    newHint.innerText = bonusHints[currentBonusHintIndex];
    newHint.className = 'individual-hint';
    container.appendChild(newHint);
    currentBonusHintIndex++;
  }
}

function checkBonusAnswer() {
  const raw = document.getElementById('bonusAnswer').value.toLowerCase().trim();
  const normalized = raw.replace(/\s+/g, '');
  const isCorrect = raw === 'tiny wings' || normalized === 'tinywings';

  const resultEl = document.getElementById('bonusResult');
  if (isCorrect) {
    resultEl.innerHTML = '<h3>Richtig! 🎉</h3><p>Das Bonus-Wort lautet <strong>tiny wings</strong>. Gut gemacht! Schicke deinem Bert auf WhatsApp das Wort "TinyWingsAppStore" um das Spiel zu erhalten.</p>';
    resultEl.style.display = 'block';
  } else if (raw === '') {
    resultEl.innerHTML = '<p style="color:#d9534f; font-weight:bold;">Bitte gib zuerst ein Wort ein.</p>';
    resultEl.style.display = 'block';
  } else {
    resultEl.innerHTML = '<p style="color:#d9534f; font-weight:bold;">Leider falsch, versuche es nochmal!</p>';
    resultEl.style.display = 'block';
  }
}