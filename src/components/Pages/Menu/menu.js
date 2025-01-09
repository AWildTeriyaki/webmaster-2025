import './menu.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import spring_menu from '../../../assets/menus/spring_menu.pdf';
import autumn_menu from '../../../assets/menus/autumn_menu.pdf';
import winter_menu from '../../../assets/menus/winter_menu.pdf';

const Menu = () => (
    <div className="menu">
        <div className="row row-cols-2">
            <div className="col" id="spring">
                <a href={spring_menu} target="_blank" rel="noreferrer"><h1>Spring</h1></a>
            </div>
            <div className="col" id="summer">
                <a href={autumn_menu} target="_blank" rel="noreferrer"><h1>Summer</h1></a>
            </div>
            <div className="col" id="autumn">
                <a href={autumn_menu} target="_blank" rel="noreferrer"><h1>Autumn</h1></a>
            </div>
            <div className="col" id="winter">
                <a href={winter_menu} target="_blank" rel="noreferrer"><h1>Winter</h1></a>
            </div>
        </div>
    </div>
);

export default Menu;