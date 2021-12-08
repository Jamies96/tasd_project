import React from 'react';
import YugiohCard from '../../components/yugiohCard/YugiohCard';

function Cards(props) {
  const cardsID = props.cardsID
  const apiUrl = props.apiUrl;

  const fromIdToCard = function (cardID) {
    return (
      <div className='col-md col-sm-12'>
        <YugiohCard cardID={cardID} apiUrl={apiUrl} />
      </div>
    )
  }
  const cards = cardsID.map((cardsRowID) => {
    const cols = cardsRowID.map(fromIdToCard);
    return (
      <div className='row'>
        {cols}
      </div>
    );
  });

  return (
    <>
      <h1 className='text-center'>Cards</h1>
      <hr />
      <div className='container'>
        {cards}
      </div>
    </>
  );
}

export default Cards;