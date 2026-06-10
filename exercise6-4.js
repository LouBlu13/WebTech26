// ============================================================
// EXERCISE: DOM Events 1 — Click
// ============================================================
//
// GOAL
// ----
// When the user clicks "Greet me":
//   - change the <h1> text to "Hello, World!"
//   - change the <p> text to "The button was clicked."
//
// When the user clicks "Reset":
//   - change everything back to the original text
//
// ============================================================

const title = document.querySelector('[data-el="title"]');
const subtitle = document.querySelector('[data-el="subtitle"]');
const greetBtn = document.querySelector('[data-action="greet"]');
const resetBtn = document.querySelector('[data-action="reset"]');

// Store original text values
const originalTitle = title.textContent;
const originalSubtitle = subtitle.textContent;

// TODO 1: add a click event listener to greetBtn
//         inside it, change title.textContent and subtitle.textContent
greetBtn.addEventListener('click', function() {
  title.textContent = 'Hello, World!';
  subtitle.textContent = 'The button was clicked.';
});

// TODO 2: add a click event listener to resetBtn
//         inside it, reset both texts to their original values
resetBtn.addEventListener('click', function() {
  title.textContent = originalTitle;
  subtitle.textContent = originalSubtitle;
});