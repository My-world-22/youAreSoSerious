// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)























//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
const textt = function changeText() {
    console.log(document.getElementById('title'))
    document.getElementById('title').innerHTML = 'Ciao Utente!'
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
const sfondo = function changeBackGroundColor() {
    document.querySelector('body').style.backgroundColor = 'red'
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
const farlocco = function changeAddress() {
    document.getElementById("via").innerText = 'Benvenuto '
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

const addclasslink = function () {
    let aTag = document.querySelectorAll('a')
    for (let i = 0; i < aTag.length; i++) {
        aTag[i].classList.add('link nuovo')
    }
}





// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a
// tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
const togli = function visibilityTest() {
    let immagine = document.querySelectorAll('img')
    for (let i = 0; i < immagine.length; i++) {
        const element = immagine[i];
        element.classList.toggle('hidden')

    }
}







// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto
// in uno differente, ogni volta che viene invocata
const change = function changeColor() {
    const red = Mat.round(Math.random()*255)
    const green = Mat.round(Math.random()*255)
    const blue = Mat.round(Math.random()*255)
    return 'rgb('+ red+ ','+ green+','+ blue+')'
}
const setChange = function(){
    const randomColor= change()
    let prices =document.querySelectorAll('.price')
    for(let i = 0; i <prices.length;  i++){
        let singlePrice= prices[i]
        singlePrice.style.color= randomColor
    }
}


