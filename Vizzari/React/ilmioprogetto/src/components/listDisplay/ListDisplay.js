import React from 'react';
import YugiohCardList from '../yugiohCardList/YugiohCardList';
import {
    ListGroup
} from 'reactstrap';

function ListDisplay(props) {
    const cardsId = props.cardsId;
    const apiUrl = props.apiUrl;

    const createItems = function () {
        const items = [];
        for (let cardID of cardsId) {
            items.push(<ListGroup>
                <YugiohCardList cardID={cardID} apiUrl={apiUrl} />
            </ListGroup>);
        }
        return items;
    }
    const items = createItems();
    return (
        <>
            <div className='container'>
                {items}
            </div>
        </>
    )
}

export default ListDisplay;