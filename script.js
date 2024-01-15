let numberButton = document.querySelectorAll("[data-number]");
let operationButton = document.querySelectorAll("[data-operation]");
let deleteButton = document.querySelector("[data-delete]");
let equalsButton = document.querySelector("[data-equals]");
let allDeleteButton = document.querySelector("[ data-all-delete ]");
let current = document.querySelector("[ data-current-operend]");
let previous = document.querySelector("[ data-previous-operend ]");

numberButton.forEach((elem) =>
  elem.addEventListener("click", (e) => {
    current.textContent += e.target.textContent;
  })
);

operationButton.forEach((elem) =>
  elem.addEventListener("click", (e) => {
    current.textContent += e.target.textContent;
  })
);

deleteButton.addEventListener("click", () => {
  let a = current.textContent.split("");
  a.splice(-1);
  current.textContent = Number(a.join(""));
});

allDeleteButton.addEventListener("click", () => {
  current.length = 0;
  previous.length = 0;
  current.textContent = current.length;
  previous.textContent = previous.length;
});

equalsButton.addEventListener("click", () => {
  try {
    console.log("Current Content:", current.textContent);
    const result = eval(current.textContent);
    previous.textContent = result;
    current.textContent = result;
  } catch (error) {
    previous.textContent = "Error";
    console.error("Error during evaluation:", error);
  }
});
