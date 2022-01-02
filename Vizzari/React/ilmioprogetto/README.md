# Documentation

---

Il progetto è organizzato in cartelle secondo la seguente alberatura:
- nella cartella `public` si trovano i documenti di default di React in cui è stata sostituita la favicon con quella del progetto
- nella cartella `src` troviamo:
  - la cartella `assets` che contiene le seguenti due cartelle:
    - `data` che contiene un file json creato per estrarre gli id usati durante le chiamate all'API. Inoltre, questi id sono stati suddivisi per personaggi, in modo da aggiungere un filtro per personaggi nella pagina `Cards.js`
    - `img` che contiene le immagini statiche utilizzate nel sito come il logo dell'app, le immagini di sfondo e i loghi universitari nel footer.
  - la cartella `components` che contiene le seguenti cartelle (una per ogni componente):
    - `header` contiene il componente header con il relativo foglio di stile
    - `footer` contiene il componente footer con il relativo foglio di stile
    - `gridDisplay` contiene modalità di visualizzazione a griglia degli elementi
    - `listDisplay` contiene modalità di visualizzazione a lista degli elementi
    - `mainTemplate` contiene il template di ogni pagina composto da Header e Footer e il rispettivo foglio di stile
    - `yugiohCardDetails` contiene la carta di dettaglio con il rispettivo foglio di stile
    - `yugiohCardGrid` contiene 


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
