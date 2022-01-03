# Documentation

---

### YuGiOh! Project

YuGiOh! Project è un'applicazione web realizzata per il corso di Tecnologie e Applicazioni dei Sistemi Distribuiti del
corso di laurea magistrale Teoria e Tecnologia della comunicazione dell'Università degli Studi di Milano-Bicocca.

Questa web app fornisce all'utente la possibilità di vedere le card della prima edizione di YuGiOh, gioco di carte
dell'omonimo anime giapponese uscito nel 2009 in Italia diventato famoso tra i ragazzini.

---

Si tratta di un'applicazione che potrebbe interessare ai più nostalgici ma anche alle nuove generazioni che hanno la
curiosità di vedere come fossero le carte originali.

L'applicazione è articolata nelle seguenti sezioni:

- La sezione About riporta una breve introduzione sul mondo di YuGiOh.
- La sezione Cards permette all'utente di vedere tutte le carte della prima edizione e permette di filtrarle per deck,
  ovvero mazzi di carte appartenenti ai personaggi principali della serie. Inoltre, è possibile visualizzarle a griglia
  oppure a lista. Ogni card se cliccata viene visualizzata nel dettaglio. Yugi Muto è il protagonista, Katsuya Jonouchi
  è il miglior amico di Yugi e Seto Kaiba è l'antagonista.
- Nella Home vengono visualizzate le tre carte più conosciute di YuGiOh che sono state fondamentali per Yugi Muto.

Il progetto è organizzato in cartelle secondo la seguente alberatura:

- nella cartella `public` si trovano i documenti di default di React in cui è stata sostituita la favicon con quella del
  progetto
- nella cartella `src` troviamo:
    - la cartella `assets` che contiene le seguenti due cartelle:
        - `data` che contiene un file json creato per estrarre gli id usati durante le chiamate all'API. Inoltre, questi
          id sono stati suddivisi per personaggi, in modo da aggiungere un filtro per personaggi nella pagina `Cards.js`
        - `img` che contiene le immagini statiche utilizzate nel sito come il logo dell'app, le immagini di sfondo e i
          loghi universitari nel footer.
    - la cartella `components` che contiene le seguenti cartelle (una per ogni componente):
        - `header` contiene il componente header con il relativo foglio di stile
        - `footer` contiene il componente footer con il relativo foglio di stile
        - `display` contiene le cartelle `listDisplay` e `gridDisplay` con le due modalità di visualizzazione differente
          dei dati (lista e griglia) e il relativo foglio di stile
        - `mainTemplate` contiene il template di ogni pagina composto da Header e Footer
        - `yugiohCardDetails` contengono il componente per visualizzare i dettagli della singola carta con il rispettivo
          foglio di stile
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

La function app è l'entry point di react e in questa funzione si settano 3 costanti contenenti i dati presenti nel
footer specifici per questo progetto e dichiariamo le route ovvero i link per navigare la web app sia nell'header che
nel footer.

Viene dichiarata subito una costante che servirà per richiamare l'api.
[Guida API YuGiOh](https://db.ygoprodeck.com/api-guide/)

To Get Card Information:
The Card Information endpoint is available at
https://db.ygoprodeck.com/api/v7/cardinfo.php

---

## Header

Il componente `Header` è un componente statefull che sfrutta l'hook `useState`.

Questo permette al componente di ricordarsi se il menù in modalità mobile è aperto oppure no.

```javascript
 const [isToogleOpen, setIsToogleOpen] = useState(false);
```

```javascript
<NavbarToggler onClick={() => setIsToogleOpen(!isToogleOpen)}/>
<Collapse isOpen={isToogleOpen} navbar>
    <Nav className="ml-auto container-fluid" navbar>
        {listItems}
    </Nav>
</Collapse>
```

Il componente `Header` si aspetta in input una `props`: `pageListItem` che deve essere un array di oggetti del tipo

```javascript
[
    {
        text: "Home",
        url: "/"
    },
    {
        text: "Cards",
        url: "/cards"
    },
    {
        text: "About",
        url: "/about"
    }
]
```

Ogni oggetto dell'array identifica il testo della view da visualizzare e il relativo url. Questo array viene mappato con
la seguente funzione anonima

```javascript
(item) => {
    return (
        <NavItem>
            <NavLink to={item.url} className="nav-link header-link">
                {item.text}
            </NavLink>
        </NavItem>
    );
}
```

Questa funzione trasforma l'oggetto dell'array in un link per il menù dell'header sfruttando le routes.

Nel `return` viene renderizzato il menù sfruttando sia Reacstrap per la UI che le routes per la navigazione.

---

## Footer

Il componente `Footer` è un componente stateless e vuole 4 `props`:

- `lastLineText` che contiene il testo da stampare in fondo al footer
- `first_logo_url` che contiene l'url del primo logo (quello a sinistra)
- `second_logo_url` che contiene l'url del secondo logo (quello a destra)
- `pageListItem` che contiene lo stesso array di oggetti illustrato nella sezione Header.

Il componente renderizza i png dei loghi dell'Università e del Dipartimento di riferimento. I nomi scelti dei png sono
generici per permettere a sviluppatori futuri di cambiare file senza modificare il codice.

```javascript
<div className="col-md-3 offset-md-8 col-sm-12 text-center d-md-flex justify-content-end"
     id="col-logos">
    <a href={first_logo_url}>
        <img src={first_logo}/>
    </a>
    <a href={second_logo_url}>
        <img src={second_logo}/>
    </a>
</div>
```

---

## MainTemplate

Il componente `mainTemplate` è stateless.

Il componente `mainTemplate` renderizza `Header` e `Footer`.

Tra questi due viene inserita la costante `pageBody`
che cambia a seconda del valore della `props.children`. La `props.children` contiene i componenti che si trovano tra il
tag di apertura e quello di chiusura di `mainTemplate`.

```javascript
return (
    <>
        <Header
            pageListItem={pageListItem}
        />
        {pageBody}
        <Footer
            lastLineText={lastLineText}
            first_logo_url={first_logo_url}
            second_logo_url={second_logo_url}
            pageListItem={pageListItem}
        />
    </>
);
```

---

## YugiohCard

Il componente `YugiohCard` è un componente hook (con stato) che vuole 3 `props`:

- `displayType`, `cardID`, `apiUrl`.

Questo componente usa il componente `useEffect` per chiamare l'API tramite una `fetch` che manda una richiesta HTTP al
server passandogli come parametro l'url della API con la relativa `props.cardID` che identifica la singola carta
richiesta. La `fetch` converte i dati ricevuti in dati json con il metodo `.json()` e configura la risposta il caso di
successo o di errore, come si può vedere di seguito:

```javascript
useEffect(() => {
    fetch(apiUrl + '?id=' + cardID)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                let fullCardDetails = result.data[0];
                setCard(extractCardDetails(fullCardDetails));
                setCardImage(fullCardDetails.card_images[0].image_url)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
});
```

Il rendering di questo componente dipende dal tipo di display impostato.

---

## YugiohCardDetails

`YugiohCardDetails` è una view che contiene una sola `props`:
`apiUrl`.

Questo componente presenta le stesse caratteristiche del componente YugiohCard, la differenza è che vengono renderizzate
più campi ritornati dalla API (`type`, `race`, `desc`, `atk`,
`def`) per avere una rappresentazione di dettaglio più ricca.

---

## Home

Il componente `Home` è un componente stateless e rappresenta una view, ossia una rappresentazione della pagina nella
sezione Home. La `Home` viene visualizzata, all'interno della web app, tra il componente `mainTemplate` perché questi
due componenti sono stati richiamati in `App.js` sfruttando il meccanismo delle routes.

Per l'impostazione di questo progetto la route corrente è il contenuto della variabile
`pageBody` ovvero la `props.children`.



