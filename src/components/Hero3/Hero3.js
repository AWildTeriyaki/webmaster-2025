import './Hero3.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import { NavLink } from 'react-router-dom';

import heroLogo from '../../assets/logo.png'

function Hero3() {
    return (
        <div className="hero-background">
            <div className="hero-mask position-relative top-0 left-0 d-flex justify-content-center align-items-center w-100 h-100">
                <h1>Hello World!</h1>
            </div>
        </div>
    )
}

export default Hero3;
