const listNumbers = document.querySelector("#listNumbers");
const modaResult = document.querySelector("#modaResult");
let arrayNumbers = [];

const numberInput = document.querySelector("#numberInput");
numberInput.addEventListener("keyup", (e) => e.keyCode === 13 ? addNumbersToArray() : null);

const addNumber = document.querySelector("#addNumber");
addNumber.addEventListener("click", addNumbersToArray);

const calculateModeButton = document.querySelector("#calculateModeButton");
calculateModeButton.addEventListener("click", (e) => {

    e.preventDefault();

    if (arrayNumbers.length == 0) {
        alert("Por favor, ingrese números.");
        return;
    }

    // ------------------------------------------------------------
    function ordenarListaBidimensional(listaDesordenada, i){
        function ordenarListaSort(valorAcumulado, nuevoValor){
            return valorAcumulado[i] - nuevoValor[i];
        }
        const lista = listaDesordenada.sort(ordenarListaSort);
        return lista;
    }
    
    function calcularModa(lista) {
        const listaCount = {}
        for (let i = 0; i < lista.length; i++){
            const elemento = lista[i];
    
            if (listaCount[elemento]){
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
        // console.log(listaCount)
    
        const listaArray = Object.entries(listaCount);
        const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
        const listaOrdenadaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
        // console.log({listaCount, listaArray, listaOrdenada, listaOrdenadaMaxNumber});
        // console.log('La moda de este conjunto de datos es: ' + listaOrdenadaMaxNumber[0]);
        const moda = listaOrdenadaMaxNumber[0];
        return moda;
        
    }
    // ------------------------------------------------------------

    modaResult.textContent = `Moda: ${calcularModa(arrayNumbers)}`;

});

const clean = document.querySelector("#clean");
clean.addEventListener("click", () => {

    numberInput.value = "";
    listNumbers.textContent = "Números:";
    modaResult.textContent = "Moda:";
    arrayNumbers = [];

});

function addNumbersToArray() {

    if (!numberInput.value) {
        alert("Por favor, ingrese un número.");
        return;
    } else if (arrayNumbers.length == 0) {
        listNumbers.innerText = `Números: ${numberInput.value}`;
    } else {
        listNumbers.innerText = `${listNumbers.textContent}, ${numberInput.value}`;
    }

    arrayNumbers.push(Number(numberInput.value));
    numberInput.value = "";

}