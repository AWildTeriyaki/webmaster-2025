// components
import LastHero from '../../HomeComponents/LastHero/LastHero.js';
import Cards2 from '../../HomeComponents/Cards2/Cards2.js';
import MoralAppeal from '../../HomeComponents/MoralAppeal/MoralAppeal.js';
import MoralAppealLarge from '../../HomeComponents/MoralAppealLarge/MoralAppealLarge.js';
import MenuPromotion from '../../HomeComponents/MenuPromotion/MenuPromotion.js';

import { useLayoutEffect } from 'react';

function Home() {

    return (
        <div className="home">
            <LastHero />
            <MenuPromotion />
            <Cards2 />
            {window.innerWidth > 768 ? <MoralAppealLarge /> : <MoralAppeal />}
        </div>
    );
}

export default Home;