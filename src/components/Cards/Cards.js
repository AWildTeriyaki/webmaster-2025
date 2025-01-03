import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Cards.css'

import card1 from '../../assets/cards/card1.png'
import card2 from '../../assets/cards/card2.png'
import card3 from '../../assets/cards/card3.png'
import card4 from '../../assets/cards/card4.png'

import Carousel from 'react-bootstrap/Carousel'

function Cards() {
    return (
        <div className="row align-items-center" id="outer-row">
            <div className="col-md-6 d-flex justify-content-center align-items-center h-100">
                {/* Content introduction */}
                <div className="position-relative w-100 h-100" id="content-intro">
                    <img alt="" src="https://images.pexels.com/photos/4113889/pexels-photo-4113889.jpeg" id="content-img"/>
                    <div className="position-absolute top-0 left-0 d-flex justify-content-center align-items-center w-100 h-100" id="mask">
                        <div className="row w-100 h-100">
                            <div className="col">
                                <h1 className="display">Delicious meals grown and prepared in our kitchen.</h1>
                            </div>
                            <div className="col">
                                <p className="lead" id="subheading">Come have a look, then have a taste!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                {/* Card grid */}
                {/* NOTE: IMAGES ARE TEMPORARY*/}
                <Carousel slide={false}>
                    <Carousel.Item className="slideshow">
                        <img src={ card1 } alt="first card"/>
                    </Carousel.Item>
                    <Carousel.Item className="slideshow">
                        <img src={ card2 } alt="second card"/>
                    </Carousel.Item>
                    <Carousel.Item className="slideshow">
                        <img src={ card3 } alt="third card"/>
                    </Carousel.Item>
                    <Carousel.Item className="slideshow">
                        <img src={ card4 } alt="fourth card"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Cards;