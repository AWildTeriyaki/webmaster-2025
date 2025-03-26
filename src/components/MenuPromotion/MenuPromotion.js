import './MenuPromotion.css';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import { NavLink } from 'react-router-dom';


function MenuPromotion() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className="menu-promotion">
      <h1>Menu</h1>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="react-carousel w-100 h-100"
      >
        <div className="carousel-slide w-100 h-100" id="item1"><img src="https://blocks.astratic.com/img/general-img-square.png"/></div>
        <div className="carousel-slide w-100 h-100" id="item2"><img src="https://blocks.astratic.com/img/general-img-square.png"/></div>
        <div className="carousel-slide w-100 h-100" id="item3"><img src="https://blocks.astratic.com/img/general-img-square.png"/></div>
        <div className="carousel-slide w-100 h-100" id="item4"><img src="https://blocks.astratic.com/img/general-img-square.png"/></div>
      </Carousel>
    </div>
  );
};


export default MenuPromotion;