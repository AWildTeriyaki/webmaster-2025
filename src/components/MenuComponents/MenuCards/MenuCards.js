import './MenuCards.css';

function MenuCards() {
    return (
        <>
            <div className="menu-cards">
                <div className="menu-cards-row">
                    <div className="menu-card" id="spring">
                        <h1>Spring</h1>
                    </div>
                    <div className="menu-card" id="summer">
                        <h1>Summer</h1>
                    </div>
                </div>
                <div className="menu-cards-row" id="autumn">
                    <div className="menu-card">
                        <h1>Autumn</h1>
                    </div>
                    <div className="menu-card" id="winter">
                        <h1>Winter</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuCards;