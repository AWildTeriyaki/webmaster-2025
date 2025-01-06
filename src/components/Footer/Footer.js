import './Footer.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import logo from '../../assets/logo.png'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-bottom">
                <img src={ logo }/>
                <p class="footer-text">Leaf To Ladle • Vegetarian Restaurant • 221B Baker Street</p>
            </div>
        </div>
    )
}

export default Footer;