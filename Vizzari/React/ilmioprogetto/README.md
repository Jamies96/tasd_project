# Documentation

---

###YuGiOh! Project 

YuGiOh! Project è un'applicazione web realizzata per il corso di Tecnologie e Applicazioni dei Sistemi Distribuiti del corso di laurea magistrale
Teoria e Tecnologia della comunicazione dell'Università degli Studi di Milano-Bicocca.

Questa web app fornisce all'utente la possibilità di vedere le card della prima edizione di YuGiOh, gioco di carte dell'omonimo anime giapponese uscito nel 2009 in Italia diventato famoso
tra i ragazzini.

---

Si tratta di un'applicazione che potrebbe interessare ai più nostalgici ma anche alle nuove generazioni che hanno la curiosità di vedere come fossero le carte originali.

L'applicazione è articolata nelle seguenti sezioni:
- La sezione About riporta una breve introduzione sul mondo di YuGiOh.
- La sezione Cards permette all'utente di vedere tutte le carte della prima edizione e permette di filtrarle per deck, ovvero mazzi di carte appartenenti ai personaggi principali della serie.
Inoltre, è possibile visualizzarle a griglia oppure a lista.
Ogni card se cliccata viene visualizzata nel dettaglio.
Yugi Muto è il protagonista, Katsuya Jonouchi è il miglior amico di Yugi e Seto Kaiba è l'antagonista.
- Nella Home vengono visualizzate le tre carte più conosciute di YuGiOh e che sono state fondamentali per Yugi Muto.


Il progetto è organizzato in cartelle secondo la seguente alberatura:
- nella cartella `public` si trovano i documenti di default di React in cui è stata sostituita la favicon con quella del progetto
- nella cartella `src` troviamo:
  - la cartella `assets` che contiene le seguenti due cartelle:
    - `data` che contiene un file json creato per estrarre gli id usati durante le chiamate all'API. Inoltre, questi id sono stati suddivisi per personaggi, in modo da aggiungere un filtro per personaggi nella pagina `Cards.js`
    - `img` che contiene le immagini statiche utilizzate nel sito come il logo dell'app, le immagini di sfondo e i loghi universitari nel footer.
  - la cartella `components` che contiene le seguenti cartelle (una per ogni componente):
    - `header` contiene il componente header con il relativo foglio di stile
    - `footer` contiene il componente footer con il relativo foglio di stile
    - `display` contiene le cartelle `listDisplay` e `gridDisplay` con le due modalità di visualizzazione differente dei dati (lista e griglia) e il relativo foglio di stile
    - `mainTemplate` contiene il template di ogni pagina composto da Header e Footer e il rispettivo foglio di stile
    - `yugiohCardDetails` contengono il componente per visualizzare i dettagli della singola carta con il rispettivo foglio di stile
    - `yugiohCard` contiene il componente che visualizza la singola carta in uno dei due display (grid o list).
  - la cartella `views` contiene le viste di navigazione dell'applicazione:
    - `home`, `cards`, `about`


---


Nella pagina `App.js` sono stati importati:
- il rispettivo foglio di stile
- la libreria React
- i componenti della libreria react-router-dom
- le tre view Home, Cards, About
- La carta di dettaglio
- il template di ogni pagina composto da Header e Footer 

La function app è l'entry point di react e in questa funzione si settano
3 costanti contenenti i dati presenti nel footer
specifici per questo progetto e dichiariamo le route ovvero i link per navigare
la web app sia nell'header che nel footer.

Viene dichiarata subito una costante che servirà per richiamare l'api.
[Guida API YuGiOh](https://db.ygoprodeck.com/api-guide/)

To Get Card Information:
The Card Information endpoint is available at
https://db.ygoprodeck.com/api/v7/cardinfo.php
