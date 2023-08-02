const form = document.querySelector(".form");
const input = document.querySelector(".number");
const message = document.querySelector(".message");
const hint = document.querySelector(".hint");

let inputCount = 0;
const maxInput = 5;
let randomNumber = Math.floor(Math.random() * 10) + 1;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value > 10) {
    message.textContent = "Please, your number cannot be greater than 10.";
    return;
  }

  if (inputCount < maxInput) {
    const userGuess = parseInt(input.value);
    inputCount++;

    if (!isNaN(userGuess)) {
      if (randomNumber === userGuess) {
        message.textContent = `Congratulations! You guessed right. ${randomNumber}`;
        hint.textContent = `You got it in ${inputCount} attempt(s).`;
        randomNumber = Math.floor(Math.random() * 10) + 1;
        inputCount = 0;
      } else {
        message.textContent = `Wrong guess. Try again`;

        if (userGuess < randomNumber) {
          hint.textContent = "Your number is too low";
        } else {
          hint.textContent = "Your number is too high";
        } 
      }
    } else {
      message.textContent = `Please enter a valid number.`;
    }
  } else {
    message.textContent = `You've reached the maximum number of attempts. The correct number was ${randomNumber}.`;
    hint.textContent = `You've used all ${maxInput} attempts.`;
    randomNumber = Math.floor(Math.random() * 10) + 1;
    inputCount = 0;
  }
  form.reset();
});
