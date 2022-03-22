// Consegna
// Generare una griglia di gioco quadrata, simile a quella dello screenshot, in cui ogni cella contiene un numero tra 1 e 100, casuali e non ripetuti.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Bonus
// Permettere all'utente di indicare una difficoltà in base alla quale viene generato un numero variabile di celle:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio: Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

// SELEZIONE ELEMENTI DOM

// Selezione del bottone di inizio
let bottone = document.getElementById('bottone');

// Selezione griglia
let grid = document.getElementById('grid');

//Selezionare <p></p> nella griglia
let paragrafo = document.getElementById('welcome')

// Selezione difficoltà
let select = document.getElementById('difficolta');

// Creazione del box interno alla griglia
let box = document.createElement('div');

// Array numeri casuali da 1 a 100
let array = [];

// Array bombe
let arrayBombe = [];

// Array 16 bombe
let bombe16 = [];

//Al click del bottone vogliamo, cambiare la griglia in base alla difficoltà selezionata e iniziare a giocare
bottone.addEventListener('click', function(){
    // Reset del contenuto interno ala griglia
    grid.innerHTML = '';
    
    // Aggiungo la classe griglia all'elemento grid
    grid.classList.add('griglia');
   
    // Rimuovo la classe 'none dall'elemento grid
    grid.classList.remove('none');

    // Aggiungo la classe 'none' al <p>
    paragrafo.classList.add('none');
    
    let numeroCelle;

    if (select.value == 'Easy') {
        numeroCelle = 100;
    } else if (select.value == 'Medium') {
        numeroCelle = 81
    } else {
        numeroCelle = 49;
    }
    
    for (y = 1; y < numeroCelle + 1; y++) {
        array.push(y);
    }

    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    array = shuffle(array);
    console.log(array);

    // Generare le 16 bombe in base a difficoltà e numero di celle
    for (k = 0; k < numeroCelle; k++) {
        arrayBombe.push(k);
    }

    console.log(`Le bombe sono: ${ arrayBombe}`);
    arrayBombe = shuffle(arrayBombe);
    console.log(`Le bombe sono: ${ arrayBombe }`);

    for (bombe = 0; bombe < 16; bombe++) {
        bombe16.push(arrayBombe[bombe]);
    }

    console.log(`Le bombe sono: ${bombe16}`);

    for (let i = 0; i < numeroCelle; i++) {
        let grid = document.getElementById('grid');
        let box = document.getElementById('div');

        grid.appendChild(box);

        if (numeroCelle == 100) {
            box.classList.add('box-10');
        } else if (numeroCelle == 81) {
            box.classList.add('box-9');
        } else {
            box.classList.add('box-7');
        }

        box.innerHTML = `<span>${array[i]}</span>`;

        box.addEventListener( 'click', clickBox );
    }
});


function getRandomInt(min, max) {
    min = Math.ceil(min); // il ceil arrotonda per eccesso o per difetto
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function clickBox(){
    console.log(this.innerText);

    if (bombe16.includes(parseInt(this.innerText))) {
        this.classList.add('bomba');
        this.removeEventListener('click', clickBox);
    } else {
        this.classList.add('clicked');
    }

    let n = 0;
    console.log(n = n++)
}



// METODO LUNGO
  /*
    //Reset del contenuto interno della griglia per nuova partita
    grid.innerHTML = '';
    //Aggiungo la classe "griglia" all'elemento grid
    grid.classList.add('griglia');
    //Rimuovo la classe "none" dall'elemento grid
    grid.classList.remove('none');
    //Aggiungo la classe "none" al <p></p>
    paragrafo.classList.add('none');
    //BONUS: Condizione legata alla difficoltà scelta
      //catturare il valore della select
        //Test: otteniamo la difficoltà come valore
    console.log(select.value);
      //creare la condizione in base alla scelta
    if ( select.value == "facile" ) {
      //griglia da 100 => 10x10
      for( let i = 0; i < 100; i++ ){
        //Selezione griglia
        let grid = document.getElementById('grid');
        //Creazione del box interno alla griglia
        let box = document.createElement('div');
        //Inserire 100 box all'interno della griglia
        grid.appendChild(box);
        //Aggiungere classe al singolo box
        box.classList.add('box-10');
        //Inserire numero dentro il box
        box.innerHTML = `<span>${array[i]}</span>`;
        //Al click del box cambia colore la cella e diventa blu
        box.addEventListener('click', function(){
          this.classList.add('clicked');
        });
      }
    } else if (select.value == "media") {
      //griglia da 81 => 9x9
      for( let i = 0; i < 81; i++ ){
        //Selezione griglia
        let grid = document.getElementById('grid');
        //Creazione del box interno alla griglia
        let box = document.createElement('div');
        //Inserire 100 box all'interno della griglia
        grid.appendChild(box);
        //Aggiungere classe al singolo box
        box.classList.add('box-9');
        //Inserire numero dentro il box
        box.innerHTML = `<span>${array[i]}</span>`;
        //Al click del box cambia colore la cella e diventa blu
        box.addEventListener('click', function(){
          this.classList.add('clicked');
        });
      }
    } else {
      //griglia da 49 => 7x7
      for( let i = 0; i < 49; i++ ){
        //Selezione griglia
        let grid = document.getElementById('grid');
        //Creazione del box interno alla griglia
        let box = document.createElement('div');
        //Inserire 100 box all'interno della griglia
        grid.appendChild(box);
        //Aggiungere classe al singolo box
        box.classList.add('box-7');
        //Inserire numero dentro il box
        box.innerHTML = `<span>${array[i]}</span>`;
        //Al click del box cambia colore la cella e diventa blu
        box.addEventListener('click', function(){
          this.classList.add('clicked');
        });
      }
    }
    */