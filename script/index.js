/**
 * @file: show-hide.js
 * @author: Explore Team
 *
 * Scopo del file
 *
 * Gli script girano su index.html e servono per aggiornare la src della preview
 * delle immagini ogni 5 secondi. Le immagini mostrate in preview sono di numero
 * limitato(4), per non caricare il server di richieste. Il secondo script serve
 * per modificare la scroll orizzontale della preview orizzontale quando viene
 * premuto il tasto scroll-left/scroll-right
 */
var start=1;

/**
 * Aggiona l'immagine del div ogni 4 secondi
*/
window.setInterval(
    function(){
        var image_data;

        if(start == 1)
            image_data = "img\\missions\\mission2.jpg";
        else if(start == 2)
            image_data= "img\\missions\\mission3.jpg";
        else if (start == 3)
            image_data = "img\\missions\\mission4.jpg";
        else if (start == 4){
            image_data = "img\\missions\\mission1.jpg";
            start = 0;
        }
        start++;
        document.getElementById("image").src=""+image_data;  
    }, 4000
);

/**
 * Sposta la scrollbar orizzontale delle news quando si premono le frecce:Decrementa di una distanza pari alla larghezza di articles-container la scrollbar orizzonatle
 *
 */
document.getElementById("scroll-left").onclick =   function leftScroll() {
    var x = document.getElementById('articles-container');
      x.scrollTo(x.scrollLeft - x.offsetWidth, 0 );
    }
  
/**
 * Incrementa di una distanza pari alla larghezza di articles-container la scrollbar orizzontale
 *
 */  
document.getElementById("scroll-right").onclick = function rightScroll() {
    var x = document.getElementById('articles-container');
    x.scrollTo(x.scrollLeft + x.offsetWidth, 0 );
}