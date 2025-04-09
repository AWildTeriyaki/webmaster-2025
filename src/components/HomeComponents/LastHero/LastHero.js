import './LastHero.css';

import roses from '../../../assets/roses.png';
import HeroLogo from '../../../assets/logo.png';

import 'bootstrap/dist/css/bootstrap.css';
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { NavLink } from 'react-router-dom';

function LastHero() {

    const rosesRef = useRef(null);
    const buttonRef = useRef(null);
    const logoRef = useRef(null);
    const overlayRef = useRef(null);
    const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0, width: 0 });

    const animationDuration = 0.3;

    useEffect(() => {
        document.body.classList.add('no-scroll');

        const tl = gsap.timeline({
            onComplete: () => {
                // Re-enable scroll after animation completes
                document.body.classList.remove('no-scroll');
            }
        });

        tl.to(logoRef.current, {
            y: -170,
            duration: 1,
            ease: 'power2.out',
            delay: 2,
          }, "<");

        tl.to(overlayRef.current, {
            opacity: 0,
            zIndex: 0,
            duration: 1.5,
            ease: 'power2.out',
        })

        return () => {
            // Clean up just in case
            document.body.classList.remove('no-scroll');
        };

    }, []);

    useEffect(() => {
        if (buttonRef.current) {
            const { top, left, width } = buttonRef.current.getBoundingClientRect();
            setButtonPosition({ top, left, width });
        }
    }, []);

    useEffect(() => {

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
        <section className="hero">
            <div className="outer-overlay">
            <div className="overlay" ref={overlayRef} />
            <img src={ HeroLogo } ref={ logoRef } className="hero-logo"/>
            </div>
            <div className="hero-mask d-flex w-100 h-100" />
            <h1>100% Vegetarian,<br />100% Farm-to-Table.</h1>
            <img alt="" src={roses} ref={rosesRef} id="roses" />
            <NavLink to='/reservation.html' target="_blank" rel="noopener noreferrer" className="hero-nav">
                <button className="btn-primary" id="hero-btn" ref={buttonRef} >Make a Reservation Today</button>
            </NavLink>
        </section>
    );
}

export default LastHero;