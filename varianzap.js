const numbersText = document.querySelector("#numbersText");
// const deviationText = document.querySelector("#deviationText");
const varianceText = document.querySelector("#varianceText");
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

const calculateDeviation = document.querySelector("#calculate");
calculateDeviation.addEventListener("click", () => {

    if (arrayNumbers.length == 0) {
        alert("Por favor, introduzca algún número para calcular la varianza.");
        return;
    }

    function calcularDesviacionEstandar(numbers) {
        
        const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
      
        const squaredDifferences = numbers.map(num => Math.pow(num - mean, 2));
        const sumOfSquaredDifferences = squaredDifferences.reduce((sum, num) => sum + num, 0);
      
        const variance = sumOfSquaredDifferences / (numbers.length);

        // const standardDeviation = Math.sqrt(variance);
      
        return variance;
        // return standardDeviation;
      }

    // const desvest = calcularDesviacionEstandar(arrayNumbers);
    const varianc = calcularDesviacionEstandar(arrayNumbers);
    // deviationText.innerText = `Desviación estándar: ${desvest}`;
    varianceText.innerText = `Varianza: ${varianc}`;

});

const cleanResults = document.querySelector("#cleanResults");
cleanResults.addEventListener("click", () => {

    numbersText.innerText = "Números: ";
    // deviationText.innerText = "Desviación estándar: ";
    varianceText.innerText = "Varianza: ";
    inputNumber.value = "";
    arrayNumbers = [];

});  