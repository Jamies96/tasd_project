import React from 'react';
import YugiohCardGrid from '../yugiohCardGrid/YugiohCardGrid';


function GridDisplay(props) {
    const cardsId = props.cardsId;
    const apiUrl = props.apiUrl;

    const createCols = function (array) {
        const cols = [];
        for (let cardID of array) {
            cols.push(
                <div className='col-md col-sm-12'>
                    <YugiohCardGrid cardID={cardID} apiUrl={apiUrl} />
                </div>
            );
        }
        return cols;
    }

    const createRows = function () {
        const matrix = [];
        let temp = [];
        for (let cardId of cardsId) {
            temp.push(cardId);
            if (temp.length === 4) {
                matrix.push(temp);
                temp = [];
            }
        }
        if (temp.length > 0) {
            matrix.push(temp);
        }

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