/**
 * @file: show-hide.js
 * @author: Explore Team
 * 
 * Scopo del file
 *
 * Questo script ha il compito di far visualizzare il container che mostra le
 * informazioni di una determinata missione o astronauta. Quando l'utente clicca
 * sull'immagine il container rispettivo di classe "all-rest"
 * verrà visualizzato sotto l'immagine. Lo script funziona grazie ad un piccolo
 * trucchetto: ad ogni immagine è stato dato un id numerico crescente (da 1 a
 * 20), selezionando l'immagine con un determinato id e' possibile eseguire la
 * funzione viewcontent che modifica la classe del container di classe all-rest
 * in posizione i-esima nella collezione tornata dalla getElementByClassName.
 * Quindi l'id del container è usato per identificare la sua posizione
 * all'interno della collezione  
 */

/*Dichiarazione degli eventi*/
document.getElementById(1).onclick = viewContent.bind(this, 1);
document.getElementById(2).onclick = viewContent.bind(this, 2);
document.getElementById(3).onclick = viewContent.bind(this, 3);
document.getElementById(4).onclick = viewContent.bind(this, 4);
document.getElementById(5).onclick = viewContent.bind(this, 5);
document.getElementById(6).onclick = viewContent.bind(this, 6);
document.getElementById(7).onclick = viewContent.bind(this, 7);
document.getElementById(8).onclick = viewContent.bind(this, 8);
document.getElementById(9).onclick = viewContent.bind(this, 9);
document.getElementById(10).onclick = viewContent.bind(this, 10);
document.getElementById(11).onclick = viewContent.bind(this, 11);
document.getElementById(12).onclick = viewContent.bind(this, 12);
document.getElementById(13).onclick = viewContent.bind(this, 13);
document.getElementById(14).onclick = viewContent.bind(this, 14);
document.getElementById(15).onclick = viewContent.bind(this, 15);
document.getElementById(16).onclick = viewContent.bind(this, 16);
document.getElementById(17).onclick = viewContent.bind(this, 17);
document.getElementById(18).onclick = viewContent.bind(this, 18);
document.getElementById(19).onclick = viewContent.bind(this, 19);
document.getElementById(20).onclick = viewContent.bind(this, 20);

/**
 * Aggiunge/toglie la classe "show" al container all-rest in posizione i-esima (-1 perchè le missioni partono da 1)
 * @param {Number} i - elemento in posizione i-esima della collezione degli elementi di classe "all-rest" 
 */
function viewContent(i){
    var div = document.getElementsByClassName("all-rest");
    if(div[i-1].className === "all-rest")
        div[i-1].classList.add("show");
    else
        div[i-1].classList.remove("show");
}