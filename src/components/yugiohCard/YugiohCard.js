import React, {useEffect, useState} from "react";
import {Button, Card, CardBody, CardHeader, CardImg, ListGroupItem} from 'reactstrap';

import {Link} from "react-router-dom";
import './YugiohCard.css';

/*
    Hook component
*/
function YugiohCard(props) {
    const displayType = props.displayType;
    const cardID = props.cardID;
    const detailsUrl = "/tasd_project/card/" + cardID;
    const apiUrl = props.apiUrl;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [card, setCard] = useState({});
    const [cardImage, setCardImage] = useState("");

    /*
    This function allow you to extract the data json to string
    */
    const extractCardDetails = function (card) {
        return {
            name: card.name,
            type: card.type,
            desc: card.desc.replaceAll("'", "").substring(0, 25) + '...',
            atk: card.atk,
            def: card.def,
            level: card.level,
            race: card.race
        }
    }

    /*
        This hook component calls the API's and it sets the response in both cases of success and error
    */
    useEffect(() => {
        fetch(apiUrl + '?id=' + cardID)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    if (result.data === undefined) {
                        setError("The card does not exist");
                    } else {
                        let fullCardDetails = result.data[0];
                        setCard(extractCardDetails(fullCardDetails));
                        setCardImage(fullCardDetails.card_images[0].image_url)
                    }
                },
                (error) => {
                    setIsLoaded(true);
                    setError("The card is temporarily unavailable");
                }
            )
    });

    if (error) {
        return <div className="text-center alert-danger">{error}</div>;
    } else if (!isLoaded) {
        return <div className="text-center alert-info">Loading...</div>;
    } else {
        if (displayType === 'grid') {
            return (
                <>
                    <Card body inverse className="bg-dark d-flex h-100 card-grid">
                        <Link to={detailsUrl} className="yugioh-card-grid">
                            <CardImg src={cardImage}/>
                            <div className="choice-me-grid">
                                Choose me!
                            </div>
                        </Link>
                        <CardHeader className="d-flex h-100"><h2 className="card-title-grid">{card.name}</h2>
                        </CardHeader>
                        <CardBody>
                            <Link to={detailsUrl}>
                                <Button className="my-btn">View card</Button>
                            </Link>
                        </CardBody>
                    </Card>
                </>
            );
        } else if (displayType === 'list') {
            return (
                <>
                    <ListGroupItem className="bg-dark text-white d-flex mb-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <Link to={detailsUrl} className="yugioh-card-list">
                                        <img src={cardImage}/>
                                    </Link>
                                </div>
                                <div className="col-9">
                                    <h2>{card.name}</h2>
                                    <Link to={detailsUrl}>
                                        <Button className="my-btn">View card</Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ListGroupItem>
                </>
            );
        }
    }
}

export default YugiohCard;