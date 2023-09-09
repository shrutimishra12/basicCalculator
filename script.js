const display = document.getElementById("display");
const clearButton = document.getElementById("clear");
const numberButtons = document.querySelectorAll(".btn:not(#clear, #equals)");
const operatorButtons = document.querySelectorAll(
  ".btn[id=add], .btn[id=subtract], .btn[id=multiply], .btn[id=divide]"
);
const equalsButton = document.getElementById("equals");

let currentInput = "";
let previousInput = "";
let operator = "";

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.textContent;
    display.textContent = currentInput;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    previousInput = currentInput;
    currentInput = "";
    operator = button.textContent;
  });
});

equalsButton.addEventListener("click", () => {
  if (previousInput && currentInput) {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
      case "+":
        currentInput = (num1 + num2).toString();
        break;
      case "-":
        currentInput = (num1 - num2).toString();
        break;
      case "*":
        currentInput = (num1 * num2).toString();
        break;
      case "/":
        currentInput = (num1 / num2).toString();
        break;
    }

    display.textContent = currentInput;
    previousInput = "";
    operator = "";
  }
});

clearButton.addEventListener("click", () => {
  currentInput = "";
  previousInput = "";
  operator = "";
  display.textContent = "0";
});
