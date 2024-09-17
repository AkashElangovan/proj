let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [];
let currentIndex = 0;
//
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const showAnswerButton = document.getElementById('show-answer');
const rateButtons = document.querySelectorAll('.rate-btn');
const newQuestionInput = document.getElementById('new-question');
const newAnswerInput = document.getElementById('new-answer');
const addCardButton = document.getElementById('add-card');
const easeFactorElement = document.getElementById('ease-factor');
const repetitionsElement = document.getElementById('repetitions');
const intervalElement = document.getElementById('interval');
const nextReviewDateElement = document.getElementById('next-review-date');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

if (flashcards.length > 0) {
    shuffle(flashcards);
}

function displayCard(index) {
    if (flashcards.length === 0 || index >= flashcards.length) {
        questionElement.textContent = 'No flashcards available.';
        answerElement.textContent = '';
        easeFactorElement.textContent = 'N/A';
        repetitionsElement.textContent = 'N/A';
        intervalElement.textContent = 'N/A';
        nextReviewDateElement.textContent = 'N/A';
        return;
    }
    const card = flashcards[index];
    questionElement.textContent = card.question;
    answerElement.textContent = card.answer;
    easeFactorElement.textContent = card.easeFactor.toFixed(2);
    repetitionsElement.textContent = card.repetitions;
    intervalElement.textContent = card.interval;
    nextReviewDateElement.textContent = new Date(card.nextReviewDate).toLocaleDateString();
    answerElement.style.display = 'none';
}

function updateCardPerformance(index, rating) {
    const card = flashcards[index];
    const q = rating;
    if (q < 3) {
        card.repetitions = 0;
    } else {
        card.repetitions += 1;
    }
    card.easeFactor = Math.max(1.3, card.easeFactor + 0.1 - (3 - q) * (0.08 + (3 - q) * 0.02));
    if (card.repetitions === 0) {
        card.interval = 1;
    } else if (card.repetitions === 1) {
        card.interval = 6;
    } else {
        card.interval = Math.round(card.interval * card.easeFactor);
    }
    card.nextReviewDate = new Date(Date.now() + card.interval * 24 * 60 * 60 * 1000).toISOString();
    localStorage.setItem('flashcards', JSON.stringify(flashcards));
}

showAnswerButton.addEventListener('click', () => {
    answerElement.style.display = 'block';
});

rateButtons.forEach(button => {
    button.addEventListener('click', () => {
        const rating = parseInt(button.getAttribute('data-rating'));
        updateCardPerformance(currentIndex, rating);
        shuffle(flashcards);  // Shuffle the flashcards after giving a rating
        currentIndex = 0;
        displayCard(currentIndex);
    });
});

addCardButton.addEventListener('click', () => {
    const question = newQuestionInput.value.trim();
    const answer = newAnswerInput.value.trim();
    if (question && answer) {
        flashcards.push({
            question,
            answer,
            easeFactor: 2.5,
            repetitions: 0,
            interval: 1,
            nextReviewDate: new Date().toISOString()
        });
        localStorage.setItem('flashcards', JSON.stringify(flashcards));
        newQuestionInput.value = '';
        newAnswerInput.value = '';
        shuffle(flashcards); // Shuffle the flashcards after adding a new one
        displayCard(currentIndex);
    }
});

displayCard(currentIndex);
