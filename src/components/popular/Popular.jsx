import React, { useRef } from "react";
import "./popular.css";
import data_product from "../assets/data_product";
import Item from "../items/Item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Popular() {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipe: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    swipe: true,
                    draggable: true,
                }
            }
        ]
    };

    const firstFourProducts = data_product.slice(0, data_product.length);

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="popular">
            <h1>محبوب ترین ها برای آقایان</h1>
            <hr className="custom-hr" />
            <div className="popular-item"></div>
            <Slider className="custom-slider" ref={sliderRef} {...settings}>
                {firstFourProducts.map((item, i) => (
                    <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </Slider>
            <button className="left" onClick={goToPrev}>بعدی</button>
            <button className="right" onClick={goToNext}>قبلی</button>
        </div>
    );
}
