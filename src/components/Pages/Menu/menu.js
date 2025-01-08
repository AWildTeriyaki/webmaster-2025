import './menu.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import winter_menu from '../../../assets/menus/winter_menu.pdf';

const Menu = () => (
    <div className="menu">
        <div className="row row-cols-2">
            <div className="col" id="spring">

            </div>
            <div className="col" id="summer">

            </div>
            <div className="col" id="autumn">

            </div>
            <div className="col" id="winter">

            </div>
        </div>
        <a href={winter_menu} target="_blank">click here!</a>
    </div>
);

export default Menu;