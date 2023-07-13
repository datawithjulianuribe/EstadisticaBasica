const numbersText = document.querySelector("#numbersText");
const averageText = document.querySelector("#averageText");
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

const calculateAverage = document.querySelector("#calculate");
calculateAverage.addEventListener("click", () => {

    if (arrayNumbers.length == 0) {
        alert("Por favor, introduzca algún número para realizar la media.");
        return;
    }

    function calcularPromedio(lista){
        //sumar todos los elementos del array / cantidad de elementos
        let sumaLista = 0;
        for (let i = 0; i < lista.length; i++){
            sumaLista = sumaLista + lista[i];
        }
        return sumaLista / lista.length;
    }


    const promedio = calcularPromedio(arrayNumbers);
    averageText.innerText = `Promedio: ${promedio}`;

});

const cleanResults = document.querySelector("#cleanResults");
cleanResults.addEventListener("click", () => {

    numbersText.innerText = "Números: ";
    averageText.innerText = "Promedio: ";
    inputNumber.value = "";
    arrayNumbers = [];

});