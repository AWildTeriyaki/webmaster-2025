import './RestaurantIntro.css';

import Carousel from "react-multi-carousel";

function RestaurantIntro() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div className="restaurant-intro">
            <div className="restaurant-intro-left">
                <p>Leaf to Ladle was founded in 2024 with the goal 
                    of fostering community, sustainability, and 
                    compassion while showcasing the beauty and 
                    inventiveness of vegetarian cuisine. Located 
                    in the center of rural Pennsylvania, our restaurant 
                    is a cozy, welcoming setting where each dish is 
                    prepared with care, based on tradition, and influenced 
                    by the changing of the seasons. We partner with local 
                    farmers to source our ingredients, ensuring that you always 
                    have the freshest possible meals.</p>
            </div>
            <div className="restaurant-intro-right">
                <Carousel
                    responsive={responsive}
                    autoPlay={true}
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    infinite={true}
                    partialVisible={false}
                    transitionDuration={500}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className="react-carousel w-100 h-100"
                >
                    <div className="carousel-slide w-100 h-100" id="item1"><img alt="" src="https://images.pexels.com/photos/7822976/pexels-photo-7822976.jpeg" /></div>
                    <div className="carousel-slide w-100 h-100" id="item2"><img alt="" src="https://images.pexels.com/photos/5950441/pexels-photo-5950441.jpeg" /></div>
                    <div className="carousel-slide w-100 h-100" id="item3"><img alt="" src="https://images.pexels.com/photos/12345627/pexels-photo-12345627.jpeg" /></div>
                </Carousel>
            </div>
        </div>
    );
}

export default RestaurantIntro;