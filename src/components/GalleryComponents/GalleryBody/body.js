import './body.css';

import 'bootstrap/dist/css/bootstrap.css';

function Body() {
    return (
        <div className="gallery-body">
            <div className="row gallery-row">
                <div className="col gallery-col" id="col1">
                    <img className="long-image" src="https://www.mydeliciousblog.com/wp-content/uploads/2017/01/Radish-Crostini-Full-View.jpg" alt="Radish Crostini" />
                    <img className="short-image" src="https://images.pexels.com/photos/8738014/pexels-photo-8738014.jpeg" alt="Spring Pea Soup" />
                    <img className="long-image" src="https://images.pexels.com/photos/7129455/pexels-photo-7129455.jpeg" alt="Falafel" />
                </div>
                <div className="col gallery-col" id="col2">
                    <img className="short-image" src="https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg" alt="Spring Pesto Pasta" />
                    <img className="long-image" src="https://images.pexels.com/photos/5950441/pexels-photo-5950441.jpeg" alt="Stuffed Portobello Mushrooms" />
                    <img className="short-image" src="https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg" alt="Lemonade" />
                </div>
                <div className="col gallery-col" id="col3">
                    <img className="long-image" src="https://images.pexels.com/photos/6631965/pexels-photo-6631965.jpeg" alt="Lemon Cake" />
                    <img className="short-image" src="https://images.pexels.com/photos/3185509/pexels-photo-3185509.png" alt="Cherry Cheesecake" />
                    <img className="long-image" />
                </div>
            </div>
        </div>
    );
}

export default Body;