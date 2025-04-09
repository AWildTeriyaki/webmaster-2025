import React, { useEffect } from "react";
import gsap from 'gsap';
import './Cards2.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

function Cards2() {

    useEffect(() => {
        gsap.utils.toArray(".newcard").forEach(function (card) {
            gsap.set(card, {
                transformStyle: "preserve-3d",
                transformPerspective: 1000
            });
            const q = gsap.utils.selector(card);
            const front = q(".card-front");
            const back = q(".card-back");

            gsap.set(back, { rotationX: -180 });

            const tl = gsap.timeline({ paused: true })
                .to(front, { duration: 1, rotationX: 180 })
                .to(back, { duration: 1, rotationX: 0 }, 0)
                .to(card, { z: 50 }, 0)
                .to(card, { z: 0 }, 0.5);
            card.addEventListener("mouseenter", function () {
                tl.play();
            });
            card.addEventListener("mouseleave", function () {
                tl.reverse();
            });
        });
    }, []);

    return (
        <div id="outer-row">
            <div className={`position-relative w-100 h-100`} id="outer-text-col">
                <div className="position-absolute top-0 left-0 d-flex justify-content-center align-items-center w-100 h-100" id="mask">
                    <div className="row w-100 h-100" id="inner-row">
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
            <div className="new-cards">
                <div className="newcard">
                    <div className="card-front">
                        <h1>Plant Based</h1>
                    </div>
                    <div className="card-back">
                        <p>All of our food and preparation materials are plant-based, from our cauliflower steaks to the "butter" we use to make them.</p>
                    </div>
                </div>
                <div className="newcard">
                    <div className="card-front">
                        <h1>Grown In-House</h1>
                    </div>
                    <div className="card-back">
                        <p>Many of our ingredients are grown in the greenhouse space behind our restaurant, with all major resources coming from local farms.</p>
                    </div>
                </div>
                <div className="newcard">
                    <div className="card-front">
                        <h1>Sustainable Materials</h1>
                    </div>
                    <div className="card-back">
                        <p>Any and all items like utensils, packaging, etc., are made out of compostable and/or recyclable materials.</p>
                    </div>
                </div>
                <div className="newcard">
                    <div className="card-front">
                        <h1>Prepared for You!</h1>
                    </div>
                    <div className="card-back">
                        <p>Every dish in our kitchen is made-to-order, so we prepare each meal specifically for each person. Food allergies and sensitivities will never be a problem.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards2;