import './menu.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import spring_menu from '../../../assets/menus/spring_menu.pdf';
import summer_menu from '../../../assets/menus/summer_menu.pdf';
import autumn_menu from '../../../assets/menus/autumn_menu.pdf';
import winter_menu from '../../../assets/menus/winter_menu.pdf';

const Menu = () => (
    <div className="menu">
        <div className="intro">
            <div className="jumbotron" id="menu-jumbotron">
                <div className="row row-cols-1 menu-row">
                    <div className="col menu-col">
                        <h1 className="display menu-text menu-display">Menu</h1>
                    </div>
                    <div className="col menu-col">
                        <p className="lead menu-text menu-lead" id="top-lead">We rotate our menus to fit the plants that are available every season and ensure you always have the freshest and most delicious fruits and vegetables possible on your plate.</p>
                    </div>
                    <hr className="my-4 divider"/>
                    <div className="col menu-col">
                        <p className="lead menu-text menu-lead" id="bottom-lead">Click on a season name to see the menu!</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row row-cols-2">
            <div className="col position-relative" id="spring">
                <img src="https://images.pexels.com/photos/93588/pexels-photo-93588.jpeg" alt="spring" />
                <div className="position-absolute top-0 left-0 d-flex justify-content-center align-items-center w-100 h-100" id="mask">
                    <a href={spring_menu} target="_blank" rel="noreferrer"><h1>Spring</h1></a>
                </div>
            </div>
            <div className="col position-relative" id="summer">
                <img src="https://images.pexels.com/photos/1862695/pexels-photo-1862695.jpeg" alt="summer" />
                <div className="position-absolute top-0 left-0 d-flex justify-content-center align-items-center w-100 h-100" id="mask">
                    <a href={summer_menu} target="_blank" rel="noreferrer"><h1>Summer</h1></a>
                </div>
            </div>
            <div className="col position-relative" id="autumn">
                <img src="https://images.pexels.com/photos/5540161/pexels-photo-5540161.jpeg" alt="autumn" />
                <div className="position-absolute top-0 left-0 d-flex justify-content-center align-items-center w-100 h-100" id="mask">
                    <a href={autumn_menu} target="_blank" rel="noreferrer"><h1>Autumn</h1></a>
                </div>
            </div>
            <div className="col position-relative" id="winter">
                <img src="https://images.pexels.com/photos/259698/pexels-photo-259698.jpeg" alt="winter" />
                <div className="position-absolute top-0 left-0 d-flex justify-content-center align-items-center w-100 h-100" id="mask">
                    <a href={winter_menu} target="_blank" rel="noreferrer"><h1>Winter</h1></a>
                </div>
            </div>
        </div>
    </div>
);

export default Menu;