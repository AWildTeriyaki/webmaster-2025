import './Top.css';

import logo from '../../../assets/logo.png';

function Top() {
    return (
        <div className="top">
            <div className="about-mask position-absolute d-flex justify-content-center align-items-center w-100">
            </div>
            <img src={ logo } alt="" className="top-logo"/>
            <h1>ABOUT</h1>
        </div>
    );
}

export default Top;