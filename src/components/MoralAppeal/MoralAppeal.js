import './MoralAppeal.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import {NavLink} from 'react-router-dom'

function MoralAppeal() {
    return (
        <div class="moral-appeal-outer w-100">
            <img src="https://images.pexels.com/photos/206893/pexels-photo-206893.jpeg" id="moral-appeal-img" alt=""/>
            <div class="moral-appeal-text">
                <h1 class="display-5">We believe that delicious food comes with a clean conscience.</h1>
                <NavLink to='/about'><button class="btn-primary" id="moral-appeal-button">Why We Do It</button></NavLink>
            </div>
        </div>
    )
}

export default MoralAppeal;