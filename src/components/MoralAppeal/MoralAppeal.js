import './MoralAppeal.css'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import {NavLink} from 'react-router-dom'

function MoralAppeal() {
    return (
        <div class="moral-appeal-outer w-100">
            <img src="https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg" id="moral-appeal-img"/>
            <div class="moral-appeal-text">
                <h1 class="display-5">We believe that delicious food comes with a clean conscience.</h1>
                <NavLink to='/about'><button class="btn-primary" href="#about">Why We Do It</button></NavLink>
            </div>
        </div>
    )
}

export default MoralAppeal;