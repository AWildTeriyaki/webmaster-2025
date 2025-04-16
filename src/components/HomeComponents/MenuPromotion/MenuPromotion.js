import './MenuPromotion.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";

function MenuPromotion() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className="menu-promotion">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="react-carousel w-100 h-100"
      >
        <div className="carousel-slide w-100 h-100" id="item1"><img alt="" src="https://images.pexels.com/photos/8738014/pexels-photo-8738014.jpeg"/></div>
        <div className="carousel-slide w-100 h-100" id="item2"><img alt="" src="https://images.pexels.com/photos/3185509/pexels-photo-3185509.png"/></div>
        <div className="carousel-slide w-100 h-100" id="item3"><img alt="" src="https://images.pexels.com/photos/5950441/pexels-photo-5950441.jpeg"/></div>
        <div className="carousel-slide w-100 h-100" id="item4"><img alt="" src="https://images.pexels.com/photos/7129455/pexels-photo-7129455.jpeg"/></div>
      </Carousel>
    </div>
  );
};


export default MenuPromotion;