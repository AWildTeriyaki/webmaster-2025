import './Facts.css';

function Facts() {
    return (
        <div className="facts">
            <h1>Did you know?</h1>
            <ul className="facts-list">
                <li><span>There are <span className="important">over 60,000</span> edible fruits and vegetables to choose from.</span></li>
                <li><span>By eating vegetarian food for a year you could save the same amount of emissions as taking a small family car off the road for <span className="important">6 months</span>.</span></li>
                <li><span>People on vegan diets spend about <span className="important">19%</span> less on food.</span></li>
                <li><span><span className="important">About half</span> of our ingredients are sourced from our own greenhouse.</span></li>
            </ul>
        </div>
    );
}

export default Facts;