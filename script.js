function app() {
  const buttonoperate = document.querySelector(
    "#box-calculator .row:nth-child(4)"
  );
  const buttonAction = document.querySelector(
    "#box-calculator .row:nth-child(3)"
  );
  const display = document.querySelector(".display span");
  let valueOnDisplay;
  //   let pattern = /[0-9]/g;
  //   let patternOperate = /[xc()\-%^/*+=]/;

  buttonoperate.addEventListener("click", function (e) {
    let isButton = e.target.classList.contains("button");
    let parentButton;
    if (isButton) {
      parentButton = e.target;
    } else {
      parentButton = e.target.parentElement;
    }

    if (e.target.textContent.toLowerCase() === "=") {
      valueOnDisplay = evaluateExpression(valueOnDisplay);
    } else {
      if (valueOnDisplay === undefined) {
        valueOnDisplay = e.target.textContent;
      } else {
        valueOnDisplay += e.target.textContent;
      }
    }

    display.textContent = valueOnDisplay;
  });

  display.addEventListener("input", (e) => {
    valueOnDisplay = display.textContent;
  });

  buttonAction.addEventListener("click", function (e) {
    let isButton = e.target.classList.contains("button");
    let parentButton;
    if (isButton) {
      parentButton = e.target;
    } else {
      parentButton = e.target.parentElement;
    }
    if (parentButton.textContent.toLowerCase() == "x") {
      valueOnDisplay = valueOnDisplay.slice(0, valueOnDisplay.length - 1);
    } else if (parentButton.textContent.toLowerCase() == "c") {
      valueOnDisplay = "";
    }
    display.textContent = valueOnDisplay;
  });
}

function evaluateExpression(expression) {
  try {
    return Function(`'use strict'; return (${expression});`)();
  } catch (error) {
    console.error("Error evaluating expression:", error);
    return null;
  }
}

app();
