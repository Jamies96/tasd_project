import React from 'react';
import YugiohCard from '../../yugiohCard/YugiohCard';

/*
    GridDisplay is a stateless component which sets the layout of all cards for the grid view
*/
function GridDisplay(props) {
    /* This function is needed to create a matrix composed by rows of 4 elements starting from
    an array of IDs (the cards)*/
    const arrayToMatrix = function (cardsId) {
        const matrix = [];
        let temp = [];
        for (let cardId of cardsId) {
            temp.push(cardId);
            if (temp.length === 4) {
                matrix.push(temp);
                temp = [];
            }
        }
        /*This if is used to deny that, if the array length is shorter than 4, the last elements
        are lost.
        */
        if (temp.length > 0) {
            matrix.push(temp);
        }
        return matrix;
    }

    const matrix = arrayToMatrix(props.cardsId);
    const apiUrl = props.apiUrl;

    /*
    This function is needed to "convert" the items of the array (row) of the matrix into
    columns (create columns).
    */
    const createCols = function (array) {
        //
        const cols = [];
        for (let cardID of array) {
            cols.push(
                <div className='col-md col-sm-12'>
                    <YugiohCard cardID={cardID} apiUrl={apiUrl} displayType='grid'/>
                </div>
            );
        }
        return cols;
    }

    /*
    This function is needed to "convert" the array of the matrix into rows (create row)
    The rows created have also columns. This structure will be rendered by the return into a 
    div with class name container.
    */
    const createRows = function () {
        const rows = [];
        for (let array of matrix) {
            const cols = createCols(array);
            rows.push(
                <div className='row mb-5'>
                    {cols}
                </div>
            );
        }
        return rows;
    }

    const rows = createRows();

    return (
        <>
            <div className='container'>
                {rows}
            </div>
        </>
    );
}

export default GridDisplay;