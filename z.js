const firstInput = document.getElementById("firstInput")
const secondInput = document.getElementById("secondInput")
const thirdInput = document.getElementById("thirdInput")
const firstError = document.getElementById("firstInputError");
const secondError = document.getElementById("secondInputError");
const thirdError = document.getElementById("thirdInputError");
const button = document.getElementById("button")
const result = document.querySelector(".result")

function clearError(input, errorP) {
    input.classList.remove("error");
    errorP.textContent = "";
}

button.addEventListener('click', () => {
    const first = firstInput.value
    const second = secondInput.value
    const third = thirdInput.value

    clearError(firstInput, firstError);
    clearError(secondInput, secondError);
    clearError(thirdInput, thirdError);

    let hasError = false;

    if (first === '' || isNaN(Number(first))) {
        firstInput.classList.add('error');
        firstError.textContent = "Введите число";
        firstError.classList.add("error-message");
        hasError = true;
    }

    if (third === '' || isNaN(Number(third))) {
        thirdInput.classList.add('error');
        thirdError.textContent = "Введите число";
        thirdError.classList.add("error-message");
        hasError = true;
    }

    if (second !== '+' && second !== '-' && second !== '*' && second !== '/') {
        secondInput.classList.add("error");
        secondError.textContent = "Введите +, -, * или /";
        secondError.classList.add("error-message");
        hasError = true;
    }
    if (hasError) return

    if (second === "+") {
        result.innerHTML = Number(first) + Number(third)
    } else if (second === "-") {
        result.innerHTML = Number(first) - Number(third)
    } else if (second === "*") {
        result.innerHTML = Number(first) * Number(third)
    } else if (second === "/") {
        result.innerHTML = Number(first) / Number(third)
    } else {
        secondInput.classList.add('error')
    }
})