import './Hero4.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { NavLink } from 'react-router-dom';

import heroLogo from '../../../assets/logo.png';
import wreath from '../../../assets/wreath.png';
import roses from '../../../assets/roses.png';

const Hero4 = () => {
    const imgRef = useRef(null);
    const rosesRef = useRef(null);
    const buttonRef = useRef(null);
    const animationDuration = 0.3;
    const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0, width: 0 });

    useEffect(() => {
        if (buttonRef.current) {
            const { top, left, width } = buttonRef.current.getBoundingClientRect();
            setButtonPosition({ top, left, width });
        }
    }, []);

    useEffect(() => {
        if (imgRef.current) {
            gsap.to(imgRef.current, {
                opacity: 1,
                duration: animationDuration
            });
        }

        if (rosesRef.current && buttonPosition.width > 0) {
            gsap.set(rosesRef.current, {
                position: "absolute",
                top: buttonPosition.top,
                left: buttonPosition.left + buttonPosition.width,
                transform: "translate(-50%, -50%)",
            });
        }
    }, [buttonPosition]);

    useEffect(() => {
        if (buttonRef.current && rosesRef.current) {
            const button = buttonRef.current;
            const roses = rosesRef.current;

            const handleMouseEnter = () => {
                gsap.to(roses, {
                    scale: 2,
                    opacity: 1,
                    duration: animationDuration
                });
            };

            const handleMouseLeave = () => {
                gsap.to(roses, {
                    scale: 1,
                    opacity: 0,
                    duration: animationDuration
                });
            };

            button.addEventListener("mouseenter", handleMouseEnter);
            button.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                button.removeEventListener("mouseenter", handleMouseEnter);
                button.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, []);

    return (
        <div className="hero-background-2" style={{ position: "relative" }}>
            <div className="hero-mask d-flex w-100 h-100">
                <div className="content-side">
                    <img alt="" src={heroLogo} className="hero-img-2" />
                    <img alt="" src={wreath} ref={imgRef} id="wreath" />
                    <img alt="" src={roses} ref={rosesRef} id="roses" style={{ position: "absolute" }} />
                    <h1>100% Vegetarian,<br />100% Farm to Table.</h1>
                    <NavLink to='/reservation.html' target="_blank" rel="noopener noreferrer" className="hero-nav">
                        <button ref={buttonRef} className="btn-primary" id="hero-btn">Make a Reservation Today</button>
                    </NavLink>
                </div>
                <div className="image-side">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                        <div className="carousel-inner">
                            <div class="carousel-item slide" id="slide1" />
                            <div className="carousel-item slide" id="slide2"/>
                            <div className="carousel-item active slide" id="slide3">
                                <img src="..." className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero4;
