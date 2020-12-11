Project Space
==============

Team
---------------

- **Team:** ExploreSpace
- **Membri**:
    -   Roman Cusmaunsa
    -   Sahel Marji
    -   Cristiano Rossetti
    -   Marco Scalenghe (coordinatore)
- **Corso:** Backend System Integrator

Introduzione :
=====

Questo è un progetto di gruppo finalizzato a creare un sito funzionale utilizzando HTML,CSS e Javascript che rappresenti un'agenzia spaziale, il suo operato negli anni ed i suoi membri.

Questo lavoro ci è stato assegnato per testare le nostre capacità arrivati a metà del corso di front-end.

Configurazione e caratteristiche tecniche :
========

Responsive
-----------

Tutte le pagine sono state sviluppate secondo i seguenti criteri:
- **mobile first**: le pagine sono state pensate e progettate dal primo breakpoint(smartphone) e poi riadattate per tablet e desktop
- **content-first**: il layout della pagina è stato progettato partendo dai contenuti di ogni singolo html

Abbiamo dato a ciascuna pagina 3 breakpoint:
- da **320px** versione per smartphone con regole CSS che ottimizzano la visione su dispositivi mobili(es font-size) e la UX
- da **768px** versione per tablet
- da **1024px** versione per desktop che estende i contenuti rispetto alla versione mobile/tablet
- da **1400px** versione per large desktop: utilizzata principalemente per dare una larghezza massima alla nostra pagina e centrarne il contenuto 

Note di Utilizzo :
========

Per eseguire il progetto partendo dalla homepage aprire in un qualsiasi browser il file "index.html", in alternativa è possibile eseguire questo processo partendo da qualunque pagina aprendo il file corrispondente.

Files and project structure :
========

Cartelle
--------

-**img** : contiene tutte le immagini del progetto.suddivise in cartelle dedicate a ciascuna sezione, ad eccezione delle immagini della cartella missions che sono utilizzate anche in gallery.html e news.html

-**script** : contiene tutti i file js del progetto.Tutto il Javascript è contenuto in questa cartella, in tutto il progetto non è presente Javascript inline oppure embedded.

-**style** : contiene i fogli CSS del progetto.Tutto il CSS è contenuto in questa cartella, in tutto il progetto non è presente CSS inline oppure embedded.

-**fileHTML** : non hanno una loro cartella ma si trovano semplicemente all' interno della cartella del progetto.

Features delivered :
========

Il progetto include Javascript per eseguire molte funzioni.
Il progetto è interamente responsive.



Index.html
---

**Gallery preview**:

Contenitore in cui verranno visualizzate le ultime 4 immagini delle missioni. Uno script js andrà a modificare la src dell'immagine ogni 5 secondi. Abbiamo deciso limitare la preview a 4 immagini per non mandare troppe richieste al server: una volta caricate tutte e 4 il server non riceverà più richieste in quanto saranno già memorizzate nel cookie del browser.

**News preview**:

Contenitore in cui verranno visualizzate le ultime 3 notizie dalla sezione News.Uno script js ci permetterà di scorrerle premendo le frecce sopra il testo delle news. Per
non occupare troppo spazio abbiamo deciso di limitare l'estensione verticale dello schermo.

**About Us**:

Un contenitore in cui troviamo un testo corredato da due immagini che raccontano qualcosa sulla nostra agenzia fittizia.

**Missions** + **Astronauti** + **Join Us** :

Tre link che portano ad altrettante pagine del sito, e sono corredati da delle frasi esplicative e ad effetto e da tre icone.
Il loro positioning varia al variare dei breakpoints, le immagini si dispongono infatti in verticale nella versione Smartphone, su due file in versione Tablet e fianco a fianco in quella Desktop.
Questo è stato fatto per permettere di vederle e leggerle chiaramente e poterle toccare facilmente su smartphone e tablet, dato che altrimenti sarebbero state troppo piccole.

Browser testati
--------------

1. Google Chrome V.80.0.3987.149
2. Internet Explorer 11.0.180
3. Firefox 74.0

Missions :
=====

**Navbar** :

 una barra di navigazione in basso nello schermo costituita da tre ancore che puntano a 3 diversi div, i quali evidenziano l'inizio delle missioni presenti passate e future, e sono costituiti solo da un h2 stilizzato con il css della pagina.
Va notato che data l'estrema somiglianza sia a livello funzionale, che stilistico, abbiamo unificato i fogli css di astronaut e missions nel foglio mission-astronauts.css.

**Immagini/Main-Container** :
Sono 20 contenitori, ognuno contenente una missione, i quali mostrano da subito l' immagine di una missione con il suo codice ed il suo nome
oltre ad alcuni dati addizionali come una lista dell'equipaggiamento utilizzato e quella degli astronauti che hanno preso parte ad una missione.

- Nella versione Desktop tutte queste informazioni sono immediatamente accessibili.
- Nella versione Smartphone tutte le informazioni ad eccezione di immagine, nome e codice vengono nascoste di default ma vengono mostrate da un js che ce le renderà visibili in una tendina alla pressione dell' immagine di una missione. Le informazioni ritorneranno nascoste con una nuova pressione in modo da non usare spazio per mostrare informazioni non volute.

Anche il positioning di questo contenitore  cambia al cambiare dei vari breakpoints, questi div si dispongono infatti verticalmente se a visualizzarli è uno smartphone, in modo da mostrare le informazioni in un formato leggibile anche per uno schermo così piccolo.
Nella versione tablet le informazioni nascoste rimangono le stesse ma i div vengono riarrangiati in file di due.
Nella versione Desktop i div sono sempre disposti per file di due, ed inoltre tutte le informazioni sono sempre visibili, utilizzando al meglio tutto lo spazio in più.

Per evitare di dover assegnare manualmente un immagine di background ad ogni destinazione,ad ogni destinazione è stata assegnata una classe con la sua background image.
Cliccando sui nomi di ogni astronauta si accederà alla sua zona personale, dato che tutti nomi degli astronauti sono ancore.

Bisogna notare che astronauts e missions condividono uno script js chiamato show-hide, abbiamo ritenuto che ciò fosse opportuno onde minimizzare la quantità di codice e dato che le due pagine richiedevano una funzionalità praticamente identica in termini di js.

Browser testati
--------------

1. Google Chrome V.80.0.3987.149
2. Internet Explorer 11.0.180
3. Firefox 74.0

Astronauts :
=====

**Navbar** : 

Una barra di navigazione in basso nello schermo costituita da due ancore che puntano a 2 diversi div, i quali evidenziano gli elenchi degli astronauti attivi e ritirati.

**Main-Container** :

Questo contenitore è l'unità di base della pagina e contiene tutte le informazioni relative ad un singolo astronauta con un immagine dello stesso.
Tutte queste informazioni sono a loro volta organizzate in contenitori annidati contenenti la foto, la nazionalità e il nome dell'astronauta, oppure la sua biografia, alcune informazioni personali o infine delle ancore che conducono ,all'interno della pagina mission, ad ognuna delle missioni a cui l'astronauta ha partecipato.

- Nella versione Desktop tutte queste informazioni sono immediatamente accessibili.
- Nella versione Smartphone tutte le informazioni ad eccezione di immagine, nome e nazionalità vengono nascoste di default ma vengono mostrate da un js che ce le renderà visibili in una tendina alla pressione dell' immagine di un astronauta. le informazioni ritorneranno nascoste con una nuova pressione in modo da non usare spazio per mostrare informazioni non volute.

Anche il positioning di questo contenitore  cambia al cambiare dei vari breakpoints, questi div si dispongono infatti verticalmente se a visualizzarli è uno smartphone, in modo da mostrare le informazioni in un formato leggibile anche per uno schermo così piccolo.
Nella versione tablet le informazioni nascoste rimangono le stesse ma i div vengono riarrangiati in file di due.
Nella versione Desktop i div sono sempre disposti per file di due, ed inoltre tutte le informazioni sono sempre visibili, utilizzando al meglio tutto lo spazio in più.

Bisogna notare che astronauts e missions condividono uno script js chiamato show-hide, abbiamo ritenuto che ciò fosse opportuno onde minimizzare la quantità di codice e dato che le due pagine richiedevano una funzionalità praticamente identica in termini di js.

Browser testati
--------------

1. Google Chrome V.80.0.3987.149
2. Internet Explorer 11.0.180
3. Firefox 74.0

Validazioni effettuate: 
---

- [HTML](https://validator.w3.org/ "World Wide Web Consortium")
- [CSS](https://jigsaw.w3.org/css-validator/ "World Wide Web Consortium")

Gallery :
=====
**Immagini :** 

Questa sezione contiene un titolo, con appunto il nome della sezione, ed i contenitori con le immagini assieme ad una breve descrizione.

**Video :**

In questa sezione abbiamo sempre un titolo con il nome della sezione e abbiamo i video embedded da youtube, va notato che anche se i video sono stati inseriti con il link standard da youtube, abbiamo in verità sperimentato con i vari settings, ma abbiamo semplicemente concluso come alcuni, come autoplay, risultassero fastidiosi, ed altri scomodi, come quelli per rimuovere i comandi del player.

Browser testati
--------------

1. Google Chrome V.80.0.3987.149
2. Internet Explorer 11.0.180
3. Firefox 74.0

Validazioni effettuate: 
---

- [HTML](https://validator.w3.org/ "World Wide Web Consortium")
- [CSS](https://jigsaw.w3.org/css-validator/ "World Wide Web Consortium")

News :
=====
**Main-Container** :
La pagina è costituita da 4 contenitori ognuno dei quali contiene una notizia costituita da immagine, titolo e testo(descrizione).
Il testo di ogni notizia è scrollabile per non fare occupare troppo spazio ad ogni notizia.
Inoltre, per risparmiare ulteriormente spazio, le versioni tablet e smartphone hanno il testo nascosto e rivelabile mediante script js premendo la voce "descrizione del testo".una seconda pressione lo nasconderà nuovamente. 


Browser testati
--------------

1. Google Chrome V.80.0.3987.149
2. Internet Explorer 11.0.180
3. Firefox 74.0

Registrazione :
=====

**Form** :
Il contenuto della pagina, fatto salvo per header e footer, è costituito da questo form, in cui il candidato può mandare la propria domanda di iscrizione, il quale richiede prima alcuni dati anagafrici(Informazioni Generali), alcuni dati di contatto(Dati Personali) e infine una sezione(Altro) in cui un potenziale candidato può descriversi liberamente per proporsi per una missione a sua scelta.

Browser testati
--------------

1. Google Chrome V.80.0.3987.149
2. Internet Explorer 11.0.180
3. Firefox 74.0

Validazioni effettuate: 
---

- [HTML](https://validator.w3.org/ "World Wide Web Consortium")
- [CSS](https://jigsaw.w3.org/css-validator/ "World Wide Web Consortium")

Elementi Comuni :
=====
**Header :**

All' interno dello Header troviamo il menù principale della pagina, il quale contiene i link verso le pagine missions, gallery, news, astronauts ed index.
I primi 4 sono quasi omonimi rispetto alle pagine a cui conducono, l' ultimo è invece il titolo "explore" all' estrema sinistra.
Questo perchè l' index è la homepage del sito e abbiamo preferito associarla al nome dell'agenzia.
Su desktop, privilegiando estetica, facilità di utilizzo con mouse ed agilità di navigazione, abbiamo disposto una serie di tendine che grazie ad uno script js si aprono su varie posizioni interne alle pagine quando ci si passa sopra con il mouse.
Su tablet e smartphone i link non verso la home vengono compressi assieme alle ancore verso posizioni interne alle pagine in un unica tendina, in modo da risparmiare spazio all' apertura della pagina.



**Footer :**
Si compone di due contenitori, il primo dei quali contiene due link alle pagine social della nostra agenzia e i loghi dei duesocial messi fianco a fianco e ravvicinate per dare un impressione di pulizia.
il secondo contiene i vari disclaimer legali oltre a un link di attribuzione di un immagine che è andata a comporre il logo.
Anche questo è un obbligo legale.
il link si apre con target blank per mantenere l' utente sul sito.
**Fixed-Floating-bug :** 
Questa è la soluzione di un bug molto comune all' interno del progetto :

Abbiamo visto che quando utilizziamo elementi flottanti, la loro altezza non viene conteggiata e possono venire coperti da proprieta come il background-color di elementi situati più in basso.

Questo bug può essere risolto posizionando un div vuoto tra gli elementi flottanti e quelli più in bassso e dandogli tramite CSS l'istruzione clear:both;

Browser testati
--------------

1. Google Chrome V.80.0.3987.149
2. Internet Explorer 11.0.180
3. Firefox 74.0


Validazioni effettuate: 
---

- [HTML](https://validator.w3.org/ "World Wide Web Consortium")
- [CSS](https://jigsaw.w3.org/css-validator/ "World Wide Web Consortium")




Risorse Esterne :
========

Immagini
---------

Le immagini utlizzate per il progetto sono state prelevate su: 
- [Pixabay](https://pixabay.com): mette a disposizione immagini con [licenza Creative Commons Zero(CC0)](https://creativecommons.org/publicdomain/zero/1.0/deed.it)

>*La persona che ha associato un'opera con questo atto ha dedicato    l'opera al pubblico dominio attraverso la rinuncia a tutti i suoi diritti sull'opera in tutto il mondo come previsti dalle leggi sul diritto d'autore, inclusi tutti i diritti connessi al diritto d'autore o affini, nella misura consentita dalla legge.*
**Puoi copiare, modificare, distribuire ed utilizzare l'opera, anche per fini commerciali, senza chiedere alcun permesso.**

- [Flickr](https://www.flickr.com/): mette a disposizione immagini con [Attribuzione - Non commerciale - Non opere derivate 2.0 Generico 
(CC BY-NC-ND 2.0)](https://creativecommons.org/licenses/by-nc-nd/2.0/deed.it)

- [TheNounProject](https://thenounproject.com/): Mette a disposizione icone, immagini e loghi a patto di dare credito all'autore all' interno del sito.


Browser compatibility :
========

Browser testati
--------------

1. Google Chrome V.80.0.3987.149
2. Internet Explorer 11.0.180
3. Firefox 74.0


Validazioni effettuate: 
---

- [HTML](https://validator.w3.org/ "World Wide Web Consortium")
- [CSS](https://jigsaw.w3.org/css-validator/ "World Wide Web Consortium")

License and Contact Information :
========

- Marco Scalenghe    : marco.scalenghe@edu.itspiemonte.it
- Roman Cusmaunsa    : roman.cusmaunsa@edu.itspiemonte.it
- Sahel Marji        : sahel.marji@edu.itspiemonte.it
- Cristiano Rossetti : cristiano.rossetti@edu.itspiemonte.it

*Tutti i materiali utilizzati in questo progetto erano sottoposti a licenza creative commons o richiedevano semplice attribuzione come specificato nel paragrafo immagini della cartella Risorse Esterne*

Changelog and Version history :
========

**version1.0 :**

Il progetto  è completo, testato per la compatibilità con i browser ed è stato validato utilizzando i validatori presenti in Browser Compatibility.

**version0.9.2 :**

Il progetto è completo ed è stato testato per la compatibilità con i browser.

**version0.9.1 :**

Il progetto è completo.

**version0.9 :**

Abbiamo inserito i video di youtube su gallery.

**version0.8 :**

Abbiamo aggiunto la pagina news che precedentemente non era stata sviluppata.

**version0.7 :**

Abbiamo aggiunto il javascript ad astronauts e mission, html e css sono quasi completi.

**version0.6 :**

Abbiamo aggiunto il javascript al menu.

**version0.5 :**

Tutte le pagine hanno html e css per quanto il css sia ancora spesso parziale.

**version0.4 :**

Abbiamo aggiunto il CSS a index e l'html di astronauts e missions è completo.

**version0.3 :**

Abbiamo definito il template del progetto con tutte le sue sezioni e pagine.

**version0.2 :**

L' HTML di index è completo, le altre pagine sono in sviluppo.

**version0.1 :**

Il progetto ha ora una sua boiler-plate.

