const favMovie = 'om shanti om';

const inputEl = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const messageEl = document.getElementById('message');

const normalize = (value) => String(value || '').trim().toLowerCase();

const setMessage = (text, type) => {
  messageEl.textContent = text;
  messageEl.className = 'message';
  if (type) messageEl.classList.add(`message--${type}`);
};

const handleGuess = () => {
  const guess = normalize(inputEl.value);

  if (!guess) {
    setMessage('Please type a movie name and press Go.', 'error');
    return;
  }

  if (guess === 'quit' || guess === 'exit') {
    setMessage('Reset! Try a fresh guess whenever you are ready.');
    inputEl.value = '';
    inputEl.focus();
    return;
  }

  if (guess === favMovie) {
    setMessage('🎉 Yes! You guessed it — Om Shanti Om!', 'success');
    return;
  }

  setMessage('Not quite — try again!', 'error');
};

guessBtn.addEventListener('click', handleGuess);

inputEl.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleGuess();
  }
});

window.addEventListener('load', () => {
  inputEl.focus();
});
