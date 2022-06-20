// Sciviamo una funzione che accetta due parametri e torna la somma di entrambi
// // sum(1,3); -> 4

// function sum(numOne, numTwo) {
//   return numOne + numTwo;
// }
// console.log(sum(5, 2));

// Scriviamo una versione miglirata della prima che controlla l'esistenza dei due parametri e che siano numeri
// // sum(1) -> Errore in console che spiega cosa non va

function sumTwo(numOne, numTwo) {
  if (numOne === 0 || numTwo === 0) {
    console.error("Non hai inserito un numero");
  } else {
    console.log(numOne + numTwo);
  }
}
sumTwo(6, 4);

// Scriviamo come per il punto due, anche per moltiplicazione, divisione, e sottrazione
// // div(2,0) -> il programma di deve dire che non posso dividere per 0

function molt(numOne, numTwo) {
  if (numOne === 0 || numTwo === 0) {
    console.error("Non hai inserito un numero");
  } else {
    console.log(numOne * numTwo);
  }
}
molt(6, 2);

function sottr(numOne, numTwo) {
  if (numOne === 0 || numTwo === 0) {
    console.error("Non hai inserito un numero");
  } else {
    console.log(numOne - numTwo);
  }
}
sottr(6, 1);

function div(numOne, numTwo) {
  if (numOne === 0) {
    console.error("Non hai inserito un numero");
  } else if (numTwo === 0) {
    console.error("Non posso dividere per 0");
  } else {
    console.log(numOne / numTwo);
  }
}
div(6, 3);

// Scriviamo una funzione che possa eseguire le 4 precedenti

const calculator = function (operation, numOne, numTwo) {
  operation(numOne, numTwo);
};

calculator(sumTwo, 3, 3); // per stampare l'addizione
calculator(sottr, 1, 3); // per stampare la sottrazione
calculator(molt, 1, 3); // per stampare la moltiplicazione
calculator(div, 1, 3); // per stampare la divisione
