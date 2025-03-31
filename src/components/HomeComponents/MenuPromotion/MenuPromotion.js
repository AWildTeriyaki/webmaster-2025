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
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="react-carousel w-100 h-100"
      >
        <div className="carousel-slide w-100 h-100" id="item1"><img alt="" src="https://nikkivegan.com/wp-content/uploads/2021/07/img_5747.jpg"/></div>
        <div className="carousel-slide w-100 h-100" id="item2"><img alt="" src="https://www.walderwellness.com/wp-content/uploads/2022/11/Maple-Roasted-Delicata-Squash-Walder-Wellness-10.jpg"/></div>
        <div className="carousel-slide w-100 h-100" id="item3"><img alt="" src="https://www.pro-activ.com/en-gb/-/media/Project/Upfield/Brands/ProActiv/ProActiv-Live-UK/Assets/Recipes/d9768ba2-37a7-47d2-a4ff-4b631a206f59.jpg?rev=a55b4e01049f4093bc4094660d629d39"/></div>
        <div className="carousel-slide w-100 h-100" id="item4"><img alt="" src="https://cdn.loveandlemons.com/wp-content/uploads/2023/01/mushroom-risotto.jpg"/></div>
      </Carousel>
    </div>
  );
};


export default MenuPromotion;