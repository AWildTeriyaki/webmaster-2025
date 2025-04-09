import React from 'react';
import './App.css'
import Main from '../main.js'
import NavbarLocal from '../NavbarLocal/NavbarLocal.js'
import Footer from '../Footer/Footer.js';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

function App() {

    const overlayRef = useRef(null);
    const transparentLogoRef = useRef(null);

    document.body.classList.add('no-scroll');

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                document.body.classList.remove('no-scroll');
            }
        });
        tl.to(transparentLogoRef.current, {
            opacity: 0,
            duration: 1,
            delay: 1,
        });

        tl.to(overlayRef.current, {
            opacity: 0,
            zIndex: 0,
            duration: 1.5,
            ease: 'power2.out',
        })
        
        tl.to(transparentLogoRef.current, {
            zIndex: 0,
            duration: 0.5,
        });

        return () => {
            document.body.classList.remove('no-scroll');
        };

    }, []);

    return (
        <div className="app">
            <div className="overlay" ref={ overlayRef } />
            <div className="transparent-logo" ref={ transparentLogoRef } />
            <NavbarLocal />
            <Main />
            <Footer />
        </div>
    );
}
export default App;