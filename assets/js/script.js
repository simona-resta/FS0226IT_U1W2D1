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
    //console.log(`Il numero di mesi è ${mesi}`); Interpolazione di stringhe con il backtick (`) al posto dell'apice
    console.log('Il numero di mesi è ' + mesi);
}

// Variabile locale (local scope)
{
    let studentName = 'Valentina';
    console.log(studentName);
}

// console.log(studentName); Errore bloccante, studentName è local scope, per cui non può essere utilizzata in questo punto