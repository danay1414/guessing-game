// script.js
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

submitBtn.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "🚫 Please enter a number between 1 and 100!";
    message.style.color = "red";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = attempts;

  if (userGuess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}`;
    message.style.color = "#4caf50";
    guessInput.disabled = true;
    submitBtn.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "📈 Too low! Try again.";
    message.style.color = "#ff9800";
  } else {
    message.textContent = "📉 Too high! Try again.";
    message.style.color = "#ff5722";
  }
});

resetBtn.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsDisplay.textContent = attempts;
  message.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  submitBtn.disabled = false;
});

// Theme toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');

  // Change icon and text on the button
  if (body.classList.contains('dark')) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});
