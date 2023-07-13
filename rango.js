const numbersText = document.querySelector("#numbersText");
const rangeText = document.querySelector("#rangeText");
const inputNumber = document.querySelector("#inputNumber");
let arrayNumbers = [];

const addNumber = document.querySelector("#addNumber");
addNumber.addEventListener("click", () => {

    if (!inputNumber.value) {
        alert("Por favor, introduzca un número.");
        return;
    } else if (arrayNumbers.length == 0) {
        numbersText.innerText = `${numbersText.textContent} ${inputNumber.value}`;
    } else {
        numbersText.innerText = `${numbersText.textContent}, ${inputNumber.value}`;
    }

    arrayNumbers.push(Number(inputNumber.value));
    inputNumber.value = "";

});

const calculateRange = document.querySelector("#calculate");
calculateRange.addEventListener("click", () => {

    if (arrayNumbers.length == 0) {
        alert("Por favor, introduzca algún número para calcular el rango.");
        return;
    }

    function calcularRango(numbers) {

        const min = Math.min(...numbers);
        const max = Math.max(...numbers);

        const range = max - min;
      
        return range;
      }

    const range = calcularRango(arrayNumbers);
    rangeText.innerText = `Rango: ${range}`;

});

const cleanResults = document.querySelector("#cleanResults");
cleanResults.addEventListener("click", () => {

    numbersText.innerText = "Números: ";
    rangeText.innerText = "Rango: ";
    inputNumber.value = "";
    arrayNumbers = [];

});  