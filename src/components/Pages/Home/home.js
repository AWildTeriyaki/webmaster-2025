// components
import Hero3 from '../../HomeComponents/Hero3/Hero3.js';
import Hero4 from '../../HomeComponents/Hero4/Hero4.js';
import Cards2 from '../../HomeComponents/Cards2/Cards2.js';
import MoralAppeal from '../../HomeComponents/MoralAppeal/MoralAppeal.js';
import MenuPromotion from '../../HomeComponents/MenuPromotion/MenuPromotion.js';

function Home() {
    return (
        <div className="home">
            {window.innerWidth > 500 ? <Hero4 /> : <Hero3 />}
            <MenuPromotion />
            <Cards2 />
            <MoralAppeal />
        </div>
    );
}

export default Home;