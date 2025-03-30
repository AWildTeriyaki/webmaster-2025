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
                            working in his restaurant's greenhouse to ensure that he can always use the
                            freshest ingredients possible.</p>
                        <p>John's work and dedication has been widely recognized, as he is proud to have won a
                            Michelin Star and be awarded the most Sustainable Chef of the Year in 2024. His passion
                            for elevating vegetarian cuisine continues to inspire diners and chefs alike.</p>
                    </div>
                    <div className="image-side-2" />
                </div>
            </div>
            <div className="chef-intro">
                <h1>Lina Vasquez</h1>
                <div className="chef-inner">
                    <div className="image-side-2 gardener-image" style={{ backgroundImage: "url('https://images.pexels.com/photos/6509144/pexels-photo-6509144.jpeg')" }} />
                    <div className="text-side gardener-text">
                        <p>As Leaf to Ladle's Greenhouse Specialist, Lina Vasquez ensures that the restaurant's 
                            produce is as fresh, flavorful, and sustainable as possible. With a background 
                            in horticulture and a deep love for regenerative farming, Lina has transformed 
                            the restaurant's greenhouse into a thriving ecosystem of herbs, vegetables, and 
                            edible flowers.</p>
                        <p>Originally from Southern California, Lina grew up surrounded by her grandmother's backyard garden, 
                            where she learned the value of homegrown food. She later studied sustainable agriculture and spent
                             years working on urban farms, refining her expertise in organic cultivation and hydroponics.
                              At Leaf to Ladle, she works closely with the kitchen team to provide unique seasonal ingredients
                               while maintaining eco-friendly growing practices.</p>
                        <p>When she's not tending to the greenhouse, Lina loves experimenting with homemade plant-based fertilizers, 
                            advocating for community gardens, and teaching others how to grow their own food—even in the smallest 
                            of spaces. Her passion for fresh, locally sourced ingredients helps shape the vibrant flavors at Leaf
                             to Ladle.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaffIntro;