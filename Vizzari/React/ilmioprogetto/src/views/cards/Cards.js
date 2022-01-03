import {React, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import CardsData from '../../assets/data/info';
import {Button, ButtonGroup} from 'reactstrap';
import clsx from 'clsx';
import GridDisplay from '../../components/display/gridDisplay/GridDisplay';
import ListDisplay from '../../components/display/listDisplay/ListDisplay';
import './Cards.css';

function Cards(props) {

    const apiUrl = props.apiUrl;
    const deckParam = useParams().deck;
    const deck = (deckParam === undefined) ? 'all' : deckParam;
    const [displayGrid, setDisplayGrid] = useState(true);


    const createButtonFilter = function () {
        const allButton = <Link to="/cards">
            <Button className={clsx({active: (deck === 'all'), 'my-btn': true, 'm-1': true})}>
                All
            </Button>
        </Link>;
        let buttons = [allButton];
        for (let deckItem of CardsData.decks) {
            const url = "/cards/" + deckItem.owner
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

    const getCards = function () {
        if (displayGrid === true) {
            return <GridDisplay cardsId={cardsID} apiUrl={apiUrl}/>
        } else {
            return <ListDisplay cardsId={cardsID} apiUrl={apiUrl}/>
        }
    }

    const cards = getCards();

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
                                    className={clsx({active: displayGrid === true, 'my-btn': true, 'mt-1':true})}>Grid</Button>
                            <Button onClick={changeDisplay} id="isList"
                                    className={clsx({active: displayGrid === false, 'my-btn': true, 'mt-1':true})}>List</Button>
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