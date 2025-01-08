import './menu.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import winter_menu from '../../../assets/menus/winter_menu.pdf';

const Menu = () => (
    <div className="menu">
        <a href={ winter_menu } target="_blank">click here!</a>
    </div>
);

export default Menu;