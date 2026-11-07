const firstInput = document.getElementById("firstInput")
const secondInput = document.getElementById("secondInput")
const firstError = document.getElementById("firstInputError");
const secondError = document.getElementById("secondInputError");
const button = document.getElementById("button")
const result = document.querySelector(".result")


function clearError(input, errorP) {
    input.classList.remove("error");
    errorP.textContent = "";
}

button.addEventListener('click', () => {
    const first = firstInput.value
    const second = secondInput.value

    clearError(firstInput, firstError);
    clearError(secondInput, secondError);

    let hasError = false;

    if (first === '' || isNaN(Number(first))) {
        firstInput.classList.add('error');
        firstError.textContent = "Введите число";
        firstError.style.color = "red"
        hasError = true;
    }

    if (second === '' || isNaN(Number(second))) {
        secondInput.classList.add('error');
        secondError.textContent = "Введите число";
        secondError.style.color = "red"
        hasError = true;
    }
    if (hasError) return
    if (hasError === false) {
        result.innerHTML = (Number(first) / ((Number(second)/100) ** 2)).toFixed(2)
    } else {
        secondInput.classList.add('error')
    }
    let data = ""
    if (result <= 16){
        data = "Выраженный дефицит массы тела"
    }
   
}) 