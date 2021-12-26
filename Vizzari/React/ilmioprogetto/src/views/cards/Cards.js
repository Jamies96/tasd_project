import { React, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import CardsData from '../../assets/data/info';
import { ButtonGroup, Button, ButtonToggle } from 'reactstrap';
import clsx from 'clsx';
import GridDisplay from '../../components/gridDisplay/GridDisplay';
import ListDisplay from '../../components/listDisplay/ListDisplay';

function Cards(props) {

  const apiUrl = props.apiUrl;
  const deckParam = useParams().deck;
  const deck = (deckParam === undefined) ? 'all' : deckParam;
  const [displayGrid, setDisplayGrid] = useState(true);


  const createDeckFilter = function () {
    const allButton = <Link to="/cards"><Button
      color="primary"
      className={clsx({ active: (deck === 'all') })}
    >
      All
    </Button></Link>;
    let buttons = [allButton];
    for (let deckItem of CardsData['decks']) {
      let url = "/cards/" + deckItem.owner
      buttons.push(
        <Link to={url}><Button
          color="primary"
          className={clsx({ active: (deck === deckItem.owner) })}
        >
          {deckItem.owner}
        </Button></Link>
      );
    }
    return buttons;
  }

  const deckFilterButtons = createDeckFilter();

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
      return <GridDisplay cardsId={cardsID} apiUrl={apiUrl} />
    } else {
      return <ListDisplay cardsId={cardsID} apiUrl={apiUrl} />
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
      <hr />
      <div className='container'>
        <div className='row'>
          <div className='col-11'>
            <ButtonGroup>
              {deckFilterButtons}
            </ButtonGroup>
          </div>
          <div className='col-1'>
            <ButtonGroup>
              <Button onClick={changeDisplay} id="isGrid" className={clsx({ active: displayGrid === true })}>Grid</Button>
              <Button onClick={changeDisplay} id="isList" className={clsx({ active: displayGrid === false })}>List</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      <br />
      {cards}
    </>
  );
}

export default Cards;