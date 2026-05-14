let myFirstString;
myFirstString = 'Ciao, Mondo!';

console.log(myFirstString);

// console.log(myFirstString);

let punteggio;
punteggio = 5;
console.log(punteggio);

punteggio = 10;
console.log(punteggio);

// Variabile globale (global scope)
const mesi = 12;
console.log(mesi);

{
    // console.log(`Il numero di mesi è ${mesi}`); Interpolazione di stringhe con il backtick (`) al posto dell'apice
    console.log('Il numero di mesi è ' + mesi); // Concatenazione di stringhe
}

// Variabile locale (local scope)
{
    let studentName = 'Valentina';
    console.log(studentName);
}

// console.log(studentName); Errore bloccante, studentName è local scope, per cui non può essere utilizzata in questo punto

let myVariable = 'Pippo'; // string
console.log(`La variabile è di tipo ${typeof myVariable}`);
myVariable = 15; // number
console.log(`La variabile è di tipo ${typeof myVariable}`);

// undefined
let firstName;
console.log(firstName);
console.log(5 + firstName);

// null
let otherName = null;
console.log(otherName);
console.log(5 + otherName);

// Operatore modulo
let firstNumber = 15;
let secondNumber = 4;

console.log(
    `${secondNumber} elevato al quadrato è uguale a ${secondNumber ** 2}`,
);

console.log(
    `Il resto della divisione tra ${firstNumber} e ${secondNumber} è ${firstNumber % secondNumber}`,
);

// Operatori di assegnazione
let x = 10;
console.log((x += 5)); // come se avessi scritto x = x + 5
console.log((x -= 3)); // come se avessi scritto x = x - 3
let myString = 'Pippo';
console.log((myString += ', Pluto e Paperino'));

// Uguaglianza/identità vs disuguaglianza/non identità
let numberString = '5';
let numberNumber = 5;

let strictEquality = numberString === numberNumber;
let strictDisequality = numberString !== numberNumber;

console.log(numberString == numberNumber); // valore O tipo
console.log(numberString === numberNumber); // valore E tipo - DA USARE SEMPRE (strict equality)

console.log(numberString != numberNumber); // valore O tipo
console.log(numberString !== numberNumber); // valore E tipo - DA USARE SEMPRE (strict disequality)

console.log(`numberString è identico a numberNumber? ${strictEquality}`);
console.log(`numberString è non identico a numberNumber? ${strictDisequality}`);

// Operatori logici
let minAge = 18;
let maxAge = 40;
let myAge = 35;
let notAge = 46;

// AND
console.log('------------AND------------');
console.log(minAge >= 18 && maxAge <= 40); // TRUE
console.log(minAge > 20 && maxAge <= 40); // FALSE
console.log(minAge >= 18 && maxAge < 38); // FALSE
console.log(minAge > 20 && maxAge < 38); // FALSE

// OR
console.log('------------OR------------');
console.log(minAge >= 18 || maxAge <= 40); // TRUE
console.log(minAge > 20 || maxAge <= 40); // TRUE
console.log(minAge >= 18 || maxAge < 38); // TRUE
console.log(minAge > 20 || maxAge < 38); // FALSE

// confronto reale
console.log('------------Rientri nella fascia di età?------------');
console.log(myAge >= minAge && myAge <= maxAge);

console.log('------------Rientri nella fascia di età?------------');
console.log(notAge >= minAge && notAge <= maxAge);

/* CAMEL CASE (il più utilizzato) variabili let e nomi delle funzioni

    myName, firstString, myVariableNumber

    Regola: prima iniziale minuscola, tutte le altre iniziali maiuscole.

CAPITAL CASE (molto meno usato)

    MyName, FirstString

    Regola: tutte le iniziali maiuscole.

SCREAMING SNAKE CASE / STREAK CASE (per le costanti globali) costanti const

    MY_NUMBER, MY_USERNAME, MY_PASSWORD

    Regola: tutto in maiuscolo, parole separate dall'underscore (_). */
    