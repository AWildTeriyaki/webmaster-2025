import './Footer.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import logo from '../../assets/logo.png'

import { Facebook, Twitter, Instagram, Linkedin, StarFill } from 'react-bootstrap-icons';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-top row">
                <div className="address footer-col col">
                    <div className="block">
                        <p><strong>Leaf to Ladle</strong></p>
                        <p>123 Green Place</p>
                        <p>Flavortown, PA</p>
                    </div>
                    <div className="block">
                        <p><strong>PET FRIENDLY:</strong></p>
                        <p>Leaf to Ladle is pet friendly for outdoor dining for well behaved pets.</p>
                    </div>
                </div>
                <div className="contact footer-col col">
                    <div className="block">
                        <p><strong>CONTACT:</strong></p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                    <div className="block">
                        <p>Social:</p>
                        <div className="icons">
                            <a href="https://www.youtube.com/watch?v=g4uOsS0FsEs"><Facebook className="icon" /></a>
                            <a href="https://www.youtube.com/watch?v=g4uOsS0FsEs"><Twitter className="icon" /></a>
                            <a href="https://www.youtube.com/watch?v=g4uOsS0FsEs"><Instagram className="icon" /></a>
                            <a href="https://www.youtube.com/watch?v=g4uOsS0FsEs"><Linkedin className="icon" /></a>
                        </div>
                    </div>
                    <div className="block">
                        <p>Links:</p>
                        <a href="https://www.youtube.com/watch?v=g4uOsS0FsEs"><StarFill /> Leave a Google Review</a>
                    </div>
                </div>
                <div className="hours footer-col col">
                    <div className="block">
                        <p><strong>HOURS:</strong></p>
                        <p><br></br></p>
                        <p>Sunday - 12pm to 7pm</p>
                        <p>Monday - Closed</p>
                        <p>Tuesday - 4pm to 10pm</p>
                        <p>Wednesday - 4pm to 10pm</p>
                        <p>Thursday - 4pm to 10pm</p>
                        <p>Friday - 12pm to 11pm</p>
                        <p>Saturday - 12pm to 11pm</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <img alt="logo" src={logo} />
                <p class="footer-text">Leaf To Ladle • Vegetarian Restaurant • 123 Green Place, Flavortown PA</p>
            </div>
        </div>
    )
}

export default Footer;