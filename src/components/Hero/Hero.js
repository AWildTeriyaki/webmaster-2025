import './Hero.css'

import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function Hero(props) {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="jumbotron rounded" id="jumbotron">
                        <h1 className="display-4 big">100% Vegan, 100% Farm to Table</h1>
                        <p className="lead small">A plant-based dining experience: Delicious, nourishing, and sustainable.</p>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="bg-image rounded" id="bg-image">
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;