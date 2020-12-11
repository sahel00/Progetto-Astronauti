/**
 * @file: menu.js
 * @author: Explore Team
 *
 * Script che permette la apertura/chiusura del menu primario di navigazione
 * qunado si clicca su #nav-toggle: al verificarsi di tale evento semplicemente
 * viene assegnata al menu di navigazione #nav-menu una classe "show" che nel
 * CSS viene resa visibie. Inizialmente il menu ha una classe "hide" che il CSS
 * non rende visibile. 
 *
 *
 */


var link = document.getElementsByClassName("link"); 
link[0].onclick = hideMenu;
link[1].onclick = hideMenu;
link[2].onclick = hideMenu;
link[3].onclick = hideMenu;
link[4].onclick = hideMenu;
link[5].onclick = hideMenu;
link[6].onclick = hideMenu;

/**
 *  assegna a #nav-menu la classe show per visualizzare il menu, oppure la classe hide per nasconderlo
*/
document.getElementById("nav-toggle").onclick = function showMenu() {
  var x  = document.getElementById("nav-menu");
  if (x.className === "hide") {
    x.className = "show";
  } else {
    x.className = "hide";
  }
}

/**
 * Nasconde il menu di navigazione e reimposta la classe a hide
 */

function hideMenu() {
  var x  = document.getElementById("nav-menu");
  x.className= "hide";
}
