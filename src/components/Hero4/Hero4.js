import './Hero4.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';

import heroLogo from '../../assets/logo.png';
import wreath from '../../assets/wreath.png';

const Hero4 = () => {

    const imgRef = useRef(null);
    const animationDuration = 2;

    useEffect(() => {
        const viewportWidth = window.innerWidth;

        if (imgRef.current) {
            const img = imgRef.current;
            gsap.to(img, {
                opacity: 1,
                duration: animationDuration
            });
        }
    }, []);

    return (
        <div className="hero-background">
            <div className="hero-mask d-flex w-100 h-100">
                <div className="content-side">
                    <img alt="" src={heroLogo} className="hero-img-2" />
                    <img alt="" src={wreath} ref={imgRef} className="wreath" />
                    <h1>100% Vegetarian,<br/>100% Farm to Table.</h1>
                    <NavLink to='/reservation.html' target="_blank" rel="noopener noreferrer" className="hero-nav"><button className="btn-primary" id="hero-btn"> Make a Reservation Today </button></NavLink>
                </div>
                <div className="image-side">
                </div>
            </div>
        </div>
    );
}

export default Hero4;