import React, { useState, useEffect } from "react";
import './Cards2.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';

// assets
import Plant_Hands from '../../assets/card_illustrations/card_illustration_1.png';
import Leaf_Whirl from '../../assets/card_illustrations/card_illustration_2.png';
import Recycle from '../../assets/card_illustrations/card_illustration_3.png';

function Cards2() {
    const [columnClass, setColumnClass] = useState("col");

    // Function to handle screen width changes
    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setColumnClass("col");
        } else {
            setColumnClass("col-md-6");
        }
    };

    useEffect(() => {
        // Set initial class based on the current window size
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="row" id="outer-row">
            <div className={`position-relative w-100 h-100 ${columnClass}`} id="outer-text-col">
                <img alt="" src="https://images.pexels.com/photos/4113889/pexels-photo-4113889.jpeg" id="cards-image" />
                <div className="position-absolute top-0 left-0 d-flex justify-content-center align-items-center w-100 h-100" id="mask">
                    <div className="row w-100 h-100">
                        <div className="col">
                            <div className="row w-100 h-100 text-row">
                                <div className="col text-col">
                                    <h1 className="display">Delicious meals grown and prepared in our kitchen.</h1>
                                </div>
                                <div className="col text-col">
                                    <p className="lead" id="subheading">Come have a look, then have a taste!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
            <div className={`cards-col h-100 ${columnClass}`}>
                <div className="row row-cols-1 row-cols-md-2 row-cols-2 g-4 h-100">
                    <div className="col card-col" style={{ padding: 0 }}>
                        <Card style={{ borderRadius: 0 }}>
                            <Card.Img variant="top" src={Plant_Hands} className="card-image" />
                            <Card.Body className="card-body">
                                <Card.Title>Plant Based</Card.Title>
                                <Card.Text className="card-txt">All of our food and preparation materials are plant-based, from our cauliflower steaks to the "butter" we use to make them.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col card-col">
                        <Card style={{ borderRadius: 0, margin: 0 }}>
                            <Card.Img variant="top" src={Leaf_Whirl} className="card-image" />
                            <Card.Body className="card-body">
                                <Card.Title>Grown In-House</Card.Title>
                                <Card.Text className="card-txt">All of our products are grown in the greenhouse space behind our restaurant, with all major resources coming from local farms.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col card-col">
                        <Card style={{ borderRadius: 0, margin: 0 }}>
                            <Card.Img variant="top" src={Recycle} className="card-image" />
                            <Card.Body className="card-body">
                                <Card.Title>Sustainable Materials</Card.Title>
                                <Card.Text className="card-txt">Any and all items like utensils, packaging, etc., are made out of compostable and/or recyclable materials.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col card-col">
                        <Card style={{ borderRadius: 0 }}>
                            <Card.Img variant="top" src={Plant_Hands} className="card-image" />
                            <Card.Body className="card-body">
                                <Card.Title>Prepared For You!</Card.Title>
                                <Card.Text className="card-txt">Every dish in our kitchen is made-to-order, so we prepare each meal specifically for each person. Food allergies and sensitivities will never be a problem.</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards2;