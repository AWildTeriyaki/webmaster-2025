import './body.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Body() {
    useEffect(() => {
        gsap.utils.toArray('img').forEach(img => {
            gsap.from(img, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: img,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            });
        });
    }, []);

    return (
        <div className="gallery-body">
            <div className="row gallery-row">
                <div className="col gallery-col" id="col1">
                    <img className="long-image" src="https://www.mydeliciousblog.com/wp-content/uploads/2017/01/Radish-Crostini-Full-View.jpg" alt="Radish Crostini" />
                    <img className="short-image" src="https://images.pexels.com/photos/8738014/pexels-photo-8738014.jpeg" alt="Spring Pea Soup" />
                    <img className="long-image" src="https://images.pexels.com/photos/7129455/pexels-photo-7129455.jpeg" alt="Falafel" />
                    <img className="short-image" src="https://www.ifyougiveablondeakitchen.com/wp-content/uploads/2020/02/carrot-cake-cupcakes-cream-cheese-frosting.webp" alt="Carrot Cake Cupcakes" />
                </div>
                <div className="col gallery-col" id="col2">
                    <img className="short-image" src="https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg" alt="Spring Pesto Pasta" />
                    <img className="long-image" src="https://images.pexels.com/photos/5950441/pexels-photo-5950441.jpeg" alt="Stuffed Portobello Mushrooms" />
                    <img className="short-image" src="https://images.pexels.com/photos/2109099/pexels-photo-2109099.jpeg" alt="Lemonade" />
                    <img className="long-image" src="https://simmonelogue.com.au/wp-content/uploads/2024/08/Spring-pea-and-mint-salad.jpg" alt="Spring Pea and Mint Salad" />
                </div>
                <div className="col gallery-col" id="col3">
                    <img className="long-image" src="https://images.pexels.com/photos/6631965/pexels-photo-6631965.jpeg" alt="Lemon Cake" />
                    <img className="short-image" src="https://images.pexels.com/photos/3185509/pexels-photo-3185509.png" alt="Cherry Cheesecake" />
                    <img className="long-image" src="https://yogaofcooking.co/wp-content/uploads/2019/03/matcha-panna-cotta-3.jpg" alt="Matcha Panna Cotta" />
                    <img className="short-image" src="https://www.dashofjazz.com/wp-content/uploads/2023/03/Dash-of-Jazz-Matcha-Mint-Iced-Tea-6.jpg" alt="Matcha Mint Tea" />
                </div>
            </div>
        </div>
    );
}

export default Body;
