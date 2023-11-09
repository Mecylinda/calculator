const buttonEl = document.querySelectorAll("button");
const inputEl = document.getElementById("input");

for (let i = 0; i < buttonEl.length; i++) {
   buttonEl[i].addEventListener("click", () => {
     const buttonValue = buttonEl[i].textContent;
     if (buttonValue === "C"){
    clearResult();
     } else if (buttonValue === "="){
    calculateResult();
     } else {
    appendValue(buttonValue);
     }

    });}

    function clearResult(){inputEl.value = "";
    }
    function calculateResult(){inputEl.value = eval(inputEl.value);
    }
    function appendValue(buttonValue){inputEl.value += buttonValue;
    }
    