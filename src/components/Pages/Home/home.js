// components
import Hero3 from '../../Hero3/Hero3.js';
import Hero4 from '../../Hero4/Hero4.js';
import Cards2 from '../../Cards2/Cards2.js';
import MoralAppeal from '../../MoralAppeal/MoralAppeal.js';
import MenuPromotion from '../../MenuPromotion/MenuPromotion.js';

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