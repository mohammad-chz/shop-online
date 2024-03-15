import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './productDisplay.css';
import { ShopContex } from '../../context/ShopContex';

export default function ProductDisplay(props) {
    const { product } = props;
    const {addToCart, handleClick, size} = useContext(ShopContex)

    function style(chose) {
        if (size === chose) {
            return {
                backgroundColor: "#FF4141",
                color: "white"
            };
        } else {
            return {}; 
        }
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    return (
        <div className="productdisplay">
            <div className="displayProduct-right">
                <div className="productdisplay-image-list">
                    <Slider {...settings} className='slider'>
                        <div>
                            <img src={product.image} alt="" />
                        </div>
                        <div>
                            <img src={product.image2} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="displayProduct-left">
                <h1>{product.name}</h1>
                <div className="price">
                    <p className='oldprice'>{product.old_price.toLocaleString()} تومان</p>
                    <p className='newprice'>{product.new_price.toLocaleString()} تومان</p>
                </div>
                <div>
                    <h3>سایز: {size}</h3>
                    <ul className='chose-size'>
                        <li style={style("M")} onClick={() => handleClick("M")}>M</li>
                        <li style={style("L")} onClick={() => handleClick("L")}>L</li>
                        <li style={style("XL")} onClick={() => handleClick("XL")}>XL</li>
                        <li style={style("XXL")} onClick={() => handleClick("XXL")}>XXL</li>
                    </ul>
                </div>
                <button onClick={() => {addToCart(product.id, size)}} className='add-cart'>افزودن به سبد خرید</button>
            </div>
        </div>
    );
}
