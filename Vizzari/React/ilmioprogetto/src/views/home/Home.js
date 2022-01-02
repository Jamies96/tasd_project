import React from 'react';
import YugiohCardGrid from '../../components/yugiohCardGrid/YugiohCardGrid';
import CardsData from '../../assets/data/info';

function Home(props) {
    const cardsID = CardsData['home'];
    const apiUrl = props.apiUrl;

    const cards = cardsID.map((cardID) => {
        return (
            <div className='col-md col-sm-12'>
                <YugiohCardGrid cardID={cardID} apiUrl={apiUrl}/>
            </div>
        )
    });

    return (
        <>
            <h1 className='text-center'>Home</h1>
            <hr/>
            <div className='container'>
                <div className='row'>
                    {cards}
                </div>
            </div>
        </>
    );
}

export default Home;