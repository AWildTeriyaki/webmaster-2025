import './StaffIntro.css';

function StaffIntro() {
    return (
        <div className="staff-intro">
            <div className="topic-head">
                <h2>GREAT FOOD STARTS WITH GREAT PEOPLE</h2>
                <h1>Delicious food and healthy ingredients prepared by a passionate team</h1>
            </div>
            <div className="chef-intro">
                <h1>Elias Greenfield</h1>
                <div className="chef-inner">
                    <div className="text-side">
                        <p>Every food, according to chef and artist Elias Greenfield, tells a narrative.
                            He was raised in a tiny rural Pennsylvanian town and became an expert
                            cook at a young age thanks to his grandmother, who taught him recipes
                            that had been handed down through the years. Following years of travel
                            and employment in world-class kitchens, Elias came back to Pennsylvania
                            to realize his dream at Leaf to Ladle, a vegetarian eatery that embodies
                            his intense love of cooking.</p>
                        <p>John has always loved animals and felt that compassionate living is important.  
                            He made the decision to design a menu that is entirely vegetarian because he
                             wants to demonstrate how inventive and delectable plant-based cuisine can be.
                               His food blends strong flavors with a dash of nostalgia to create meals that 
                               are both familiar and thrilling.  John spends his time outside of the kitchen 
                               working in his restaurant's greenhouse and assisting with animal rescue to make 
                               sure his menu always uses the freshest ingredients.</p>
                    </div>
                    <div className="image-side-2">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaffIntro;