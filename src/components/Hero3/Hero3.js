import './Hero3.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';

import heroLogo from '../../assets/logo.png';

const Hero3 = () => {

    const imgRef = useRef(null);
    const headerRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const viewportWidth = window.innerWidth;

        if (imgRef.current) {
            const img = imgRef.current;
            const imgRect = img.getBoundingClientRect();
            const imgWidth = imgRect.width;
            const centerX = (viewportWidth - imgWidth) / 2;

            gsap.to(img, {
                rotate: 360,
                x: centerX - imgRect.left, // Move to center relative to current position
                duration: 1
            });
        }
        if (headerRef.current) {
            const header = headerRef.current;
            const headerRect = header.getBoundingClientRect();
            const headerWidth = headerRect.width;
            const centerX = (viewportWidth - headerWidth) / 2;

            gsap.to(header, {
                x: centerX - headerRect.left,
                duration: 1
            })
        }
        if (buttonRef.current) {
            const button = buttonRef.current;
            const buttonRect = button.getBoundingClientRect();
            const buttonWidth = buttonRect.width;
            const centerX = (viewportWidth - buttonWidth) / 2;

            gsap.to(button, {
                x: centerX - buttonRect.left,
                duration: 1
            })
        }
    }, []);

    return (
        <div className="hero-background">
            <div className="hero-mask position-absolute d-flex justify-content-center align-items-center w-100 h-100">
                <div className="hero-inner">
                    <img ref={imgRef} alt="" src={heroLogo} className="hero-img" />
                    <h1 ref={headerRef}> 100% Vegetarian,<br></br>100% Farm-to-table. </h1>
                    <NavLink to='/reservation.html' target="_blank" rel="noopener noreferrer"><button className="btn-primary" id="hero-btn" ref={buttonRef}> Make a Reservation Today </button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Hero3;
