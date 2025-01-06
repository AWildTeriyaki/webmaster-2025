import './Hero2.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import { NavLink } from 'react-router-dom';

import soup from '../../assets/soup.png'
import heroLogo from '../../assets/logo.png'

import Carousel from 'react-bootstrap/Carousel'

function Hero2() {
    return (
        <div>
            <Carousel id="carousel" interval={null}>
                <Carousel.Item className="position-relative">
                    <img src="https://images.pexels.com/photos/5662126/pexels-photo-5662126.jpeg" style={{ height: "100vh", objectFit: "cover", borderRadius: 0 }} />
                    <div className="position-absolute top-0 left-0 d-flex justify-content-center align-items-center text-align-center w-100 h-100" id="carousel-mask">
                    </div>
                </Carousel.Item>
                <Carousel.Item className="position-relative">
                    <img src="https://images.pexels.com/photos/28909536/pexels-photo-28909536/free-photo-of-delicious-biryani-dish-with-fresh-herbs.jpeg" style={{ height: "100vh", objectFit: "cover", borderRadius: 0 }} />
                    <div className="position-absolute top-0 left-0 d-flex justify-content-center align-items-center w-100 h-100" id="carousel-mask">
                    </div>
                </Carousel.Item>
                <Carousel.Item className="position-relative">
                    <img src="https://images.pexels.com/photos/6287527/pexels-photo-6287527.jpeg" style={{ height: "100vh", objectFit: "cover", borderRadius: 0 }} />
                    <div className="position-absolute top-0 left-0 d-flex justify-content-center align-items-center w-100 h-100" id="carousel-mask">
                    </div>
                </Carousel.Item>
            </Carousel>
            <div className="position-absolute" id="carousel-text-absolute">
                <img src={ heroLogo }/>
                <h1 className="display-5">100% Vegetarian. 100% Farm To Table.</h1>
                <NavLink to='/reservations'><button className="btn-primary" id="hero-btn">Make a Reservation Today</button></NavLink>
            </div>
        </div>
    )
}

export default Hero2;