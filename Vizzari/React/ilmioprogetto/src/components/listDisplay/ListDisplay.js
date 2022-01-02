import React from 'react';
import YugiohCardList from '../yugiohCardList/YugiohCardList';
import {ListGroup} from 'reactstrap';

/*
    ListDisplay is a stateless component which sets the layout of all cards for the list view
*/
function ListDisplay(props) {
    const cardsId = props.cardsId;
    const apiUrl = props.apiUrl;

    /*
        This function is needed to "convert" the IDs of the cards into a listItem of a ListGroup.
        Precisely, the listItem component is called YugiohcardList which is the card with the list-layout.

        */

    const createItems = function () {
        const items = [];
        for (let cardID of cardsId) {
            items.push(<ListGroup>
                <YugiohCardList cardID={cardID} apiUrl={apiUrl}/>
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