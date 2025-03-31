import './MoralAppealLarge.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import { NavLink } from 'react-router-dom'

function MoralAppeal() {
    return (
        <div class="moral-appeal-outer w-100" id="outer-large">
            <div class="moral-appeal-text" id="text-large">
                <h1 class="display-5">We believe that delicious food comes with a clean conscience.</h1>
                <NavLink to='/about'><button class="btn-primary" id="moral-appeal-button">Why We Do It</button></NavLink>
            </div>
            <div className="moral-image-side">
                <img src="https://images.pexels.com/photos/7671938/pexels-photo-7671938.jpeg" id="moral-appeal-img" alt="" />
            </div>
        </div>
    )
}

export default MoralAppeal;