import React, {useEffect, useState} from "react";
import {Button, Table} from 'reactstrap';
import {Link, useParams} from "react-router-dom";
import './YugiohCardDetails.css';
import cardback from '../../assets/img/cardbackYuGiOh.jpg';


function YugiohCardDetails(props) {
    const cardID = useParams().id;
    const apiUrl = props.apiUrl;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [card, setCard] = useState({});
    const [cardImage, setCardImage] = useState("");

    const extractCardDetails = function (card) {
        return {
            name: card.name,
            type: card.type,
            desc: card.desc.replaceAll("'", ""),
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
        return <div>{error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        let atkDef = (<div></div>);
        if (card.atk !== undefined && card.def !== undefined) {
            atkDef = (
                <div className="col-12 m-4">
                    <div className="row text-center">
                        <div className="col-md col-sm-12">
                            ATTACK
                        </div>

                        <div className="col-md col-sm-12">
                            DEFENSE
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md col-sm-12 atk-def">
                            {card.atk}
                        </div>
                        <div className="col-md col-sm-12 atk-def">
                            {card.def}
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <>
                <div className="container">
                    <div className="row m-5">
                        <div className="col-md-2 col-sm-12">
                            <Link to="/tasd_project/cards"><Button className="my-btn">Back to Cards</Button></Link>
                        </div>

                        <div className="col-md offset-md-4 col-sm-12">
                            <h1>{card.name}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md col-sm-12">
                            <div class="flip-card">
                                <div class="flip-card-front">
                                    <img src={cardImage}/>
                                </div>
                                <div class="flip-card-back">
                                    <img src={cardback}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md  col-sm-12">
                            <div className="row">
                                <div className="col-12">
                                    <Table borderless dark>
                                        <tbody>
                                        <tr>
                                            <th>Type</th>
                                            <td>{card.type}</td>
                                        </tr>
                                        <tr>
                                            <th>Race</th>
                                            <td>{card.race}</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                {atkDef}
                                <hr/>
                                <div className="col-12">
                                    Description
                                    <p>
                                        <br/>
                                        {card.desc}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default YugiohCardDetails;