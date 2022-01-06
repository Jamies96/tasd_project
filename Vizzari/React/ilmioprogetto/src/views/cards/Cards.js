import {React, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import CardsData from '../../assets/data/info';
import {Button, ButtonGroup} from 'reactstrap';
import clsx from 'clsx';
import GridDisplay from '../../components/display/gridDisplay/GridDisplay';
import ListDisplay from '../../components/display/listDisplay/ListDisplay';
import './Cards.css';

/*
    Component statefull with a props apiUrl and a hook useParams
*/
function Cards(props) {

    const apiUrl = props.apiUrl;
    const deckParam = useParams().deck;
    /*
    If the deck parameter isn't set then deck is set to all, otherwise is set to deckParam (new route= /:deck)
   */
    const deck = (deckParam === undefined) ? 'all' : deckParam;
    const [displayGrid, setDisplayGrid] = useState(true);

    /*
        This function creates the buttons of the filter:
        - the general one that links all the cards by the attribute to="/cards"
        - the specific ones (the owner's deck) that links to the new route /cards/:deck that is defined accessing to
        owner's name field of every object of the array inside the decks field (found in CardsData.json).
    */
    const createButtonFilter = function () {
        const allButton = <Link to="/tasd_project/cards">
            <Button className={clsx({active: (deck === 'all'), 'my-btn': true, 'm-1': true})}>
                All
            </Button>
        </Link>;
        let buttons = [allButton];
        for (let deckItem of CardsData.decks) {
            const url = "/tasd_project/cards/" + deckItem.owner
            buttons.push(
                <Link to={url}>
                    <Button
                        className={clsx({active: (deck === deckItem.owner), 'my-btn': true, 'm-1': true})}>
                        {deckItem.owner}
                    </Button>
                </Link>
            );
        }
        return buttons;
    }

    const deckFilterButtons = createButtonFilter();

    /*
    This function get cards we want display with the filter.
    This is the "real" filter.
    With a for-loop we want to get all of the cards or the card for every owner field
    presented in CardsData.json
    if the deck is all (the deckParam on the url is undefined) then the cards displayed are a concatenation of all owners deck.
    Otherwise, if deck is equal to a specific owner then only his cards are displayed.
    */
    const getDeck = function () {
        let cards = [];
        for (let deckItem of CardsData.decks) {
            if (deck === 'all' || deck === deckItem.owner) {
                cards = cards.concat(deckItem.cards)
            }
        }
        return cards
    }

    const cardsID = getDeck();

    /*
     This function get cards with different layout according to the value of displayGrid that is
     dynamically changed onclick event over filter buttons.
    */
    const getCards = function () {
        if (displayGrid === true) {
            return <GridDisplay cardsId={cardsID} apiUrl={apiUrl}/>
        } else {
            return <ListDisplay cardsId={cardsID} apiUrl={apiUrl}/>
        }
    }

    const cards = getCards();

    /*
    This function change the type of display according to the 'id' button
    if 'id' button is grid, it sets the hook displayGrid to true.
    Otherwise it sets it to false. This allows the toogle effect to the display button exploiting the clsx (conditional
    classes) and it automatically changes the type of card displayed (GridDisplay component or ListDisplay component
    according to the getCards function)
     */
    const changeDisplay = function (event) {
        const id = event.target.id;
        if (id === 'isGrid') {
            setDisplayGrid(true);
        } else {
            setDisplayGrid(false);
        }
    };

    return (
        <>
            <h1 className='text-center'>Cards</h1>
            <hr/>
            <div className='container'>
                <div className='row'>
                    <div className='col-11'>
                        Decks:
                        <ButtonGroup>
                            {deckFilterButtons}
                        </ButtonGroup>
                    </div>
                    <div className='col-1'>
                        <ButtonGroup>
                            <Button onClick={changeDisplay} id="isGrid"
                                    className={clsx({
                                        active: displayGrid === true,
                                        'my-btn': true,
                                        'mt-1': true
                                    })}>Grid</Button>
                            <Button onClick={changeDisplay} id="isList"
                                    className={clsx({
                                        active: displayGrid === false,
                                        'my-btn': true,
                                        'mt-1': true
                                    })}>List</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
            <br/>
            {cards}
        </>
    );
}

export default Cards;