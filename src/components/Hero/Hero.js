import './Hero.css'

import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import heroImage from '../../assets/soup.png'

function Hero(props) {
    return (
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-md-6 d-flex justify-content-center align-items-center" id="test">
                    <div className="jumbotron rounded" id="jumbotron">
                        <h1 className="display-4 big">100% Vegetarian.<br></br>100% Farm to Table.</h1>
                        <p className="lead small">A plant-based dining experience: Delicious, nourishing, and sustainable.</p>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center" id="img-container">
                    <img id="image" alt="" src={ heroImage }/>
                </div>
            </div>
        </div>
    )
}
export default Hero;
