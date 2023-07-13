const medianResult = document.querySelector("#medianResult");
const listNumbers = document.querySelector("#listNumbers");
let numbers = [];

const number = document.querySelector("#number");
number.addEventListener("keyup", (e) => e.keyCode === 13 ? addNumber() : null);

const addNumberButton = document.querySelector("#addNumberButton");
addNumberButton.addEventListener("click", addNumber);

// -----------------------------------------------
function esPar(lista){
    return !(lista.length % 2)
}

function esImpar(lista){
    return (lista.length % 2)
}

function CalcularPromedio(lista){
    function sumarTodosElementos(valorAcumulado, nuevoValor){
        return valorAcumulado + nuevoValor;
    }
    
    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}

function ordenarLista(listaDesordenada){
    function ordenarListaSort(valorAcumulado, nuevoValor){
        if (valorAcumulado > nuevoValor){
            return 1;
        } else if (valorAcumulado == nuevoValor) {
            return 0;
        } else if (valorAcumulado < nuevoValor) {
            return -1;
        }
    }
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

function calcularMediana(listaDesordenada){
    const lista = ordenarLista(listaDesordenada);
    const listaEsPar = esPar(lista);

    if (listaEsPar){
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = (lista.length / 2);
        const medianaListaPar = CalcularPromedio([lista[indexMitad1ListaPar],lista[indexMitad2ListaPar]]);
        return medianaListaPar;
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}
// -----------------------------------------------

const calculateMedian = document.querySelector("#calculateMedian");
calculateMedian.addEventListener("click", () => {

    medianResult.textContent = `Mediana: ${calcularMediana(numbers)}`;

});

const cleanResults = document.querySelector("#cleanResults");
cleanResults.addEventListener("click", () => {

    number.value = "";
    listNumbers.textContent = "Números:";
    medianResult.textContent = "Mediana:";
    numbers = [];

});

function addNumber() {

    if (!number.value) {
        alert("Por favor, ingrese un número.");
        return;
    } else if (numbers.length == 0) {
        listNumbers.innerText = `${listNumbers.textContent} ${number.value}`;
    } else {
        listNumbers.innerText = `${listNumbers.textContent}, ${number.value}`;
    }

    numbers.push(Number(number.value));
    number.value = "";

}