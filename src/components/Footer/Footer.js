import './Footer.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import logo from '../../assets/logo.png'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-bottom">
                <img alt="logo" src={ logo }/>
                <p class="footer-text">Leaf To Ladle • Vegetarian Restaurant • 221 Baker Street, Philadelphia PA 19103</p>
                
                <p class="footer-text contact">info@leaftoladle.com</p>
                
                <p class="footer-text contact">215-123-4567</p>
            </div>
        </div>
    )
}

export default Footer;