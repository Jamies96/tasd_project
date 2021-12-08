import React, { useState, useEffect } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardHeader, CardFooter, Badge
} from 'reactstrap';
import { Link } from "react-router-dom";
import './YugiohCard.css';

function YugiohCard(props) {
    const cardID = props.cardID;
    const detailsUrl = "/cards/" + cardID;
    const apiUrl = props.apiUrl;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [card, setCard] = useState({});
    const [cardImage, setCardImage] = useState("");

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

    useEffect(() => {
        fetch(apiUrl + '?id=' + cardID)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    let fullCardDetails = result.data[0];
                    setCard(extractCardDetails(fullCardDetails));
                    setCardImage(fullCardDetails.card_images[0].image_url)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <Card body inverse className="bg-dark d-flex h-100">
                    <Link to={detailsUrl}>
                        <CardImg src={cardImage} className="yugioh-card"></CardImg>
                        <div className="choice-me">
                            Choice me!
                        </div>
                    </Link>
                    <CardHeader className=" d-flex h-100"><h2>{card.name}</h2></CardHeader>
                    <CardBody>
                        <CardTitle>
                            <h4>{card.race}</h4>
                        </CardTitle>
                        <CardText>
                            <ul>
                                <li>Type: <Badge pill >{card.type}</Badge></li>
                                <li>Level: <Badge color="danger" text="">{card.level}</Badge></li>
                            </ul>
                            {card.desc}
                        </CardText>
                        <Link to={detailsUrl}>
                            <Button color="info">View card</Button>
                        </Link>
                    </CardBody>
                </Card>
            </>
        );
    }
}

export default YugiohCard;