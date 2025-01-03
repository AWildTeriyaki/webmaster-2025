import './navbar.css'

function navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">

            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/menu">Menu</a>
                    </li>
                    <li>
                        <a href="/references">References</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <button>Dine With Us!</button>
            </div>
        </div>
    )
}

export default navbar;