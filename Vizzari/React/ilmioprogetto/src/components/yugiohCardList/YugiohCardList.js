import React, {useState, useEffect} from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardHeader, CardFooter, Badge, ListGroupItem, Media
} from 'reactstrap';
import {Link} from "react-router-dom";
import './YugiohCardList.css';

function YugiohCardGrid(props) {
    const cardID = props.cardID;
    const detailsUrl = "/card/" + cardID;
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
    });

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
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
                                    <Button className="my-blue-btn">View card</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ListGroupItem>
            </>
        );
    }
}

export default YugiohCardGrid;