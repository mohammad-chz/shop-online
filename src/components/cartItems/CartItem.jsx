import React, { useContext, useState } from "react";
import { ShopContex } from "../../context/ShopContex";
import "./cartitems.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function CartItem() {
    const { all_product, cartItem, removeFromCart, getTotalCartAmount } = useContext(ShopContex);
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handlePayment(event) {
        event.preventDefault(); // Prevents the default form submission behavior
        if (!address || !phone) {
            setErrorMessage("لطفاً آدرس و تلفن همراه را وارد کنید.");
            return;
        }
    }

    return (
        <div className="cartitems">
            <div className="cartitem-format-main">
                <p>محصولات</p>
                <p>عنوان</p>
                <p>قیمت</p>
                <p>تعداد</p>
                <p>جمع</p>
                <p>سایز</p>
                <p>حذف</p>
            </div>
            <div>
                <hr />
                {all_product.map((e) => {
                    if (cartItem[e.id].quantity > 0) {
                        let totalProduct = e.new_price * cartItem[e.id].quantity;
                        return (
                            <div className="cartitems-format" key={e.id}>
                                <img src={e.image} alt="" className="carticon-productIcon" />
                                <p>{e.name}</p>
                                <p>{e.new_price.toLocaleString()} تومان</p>
                                <button className="cartitems-quantity">{cartItem[e.id].quantity}</button>
                                <p>{totalProduct.toLocaleString()}</p>
                                <p>{cartItem[e.id].size}</p>
                                <FontAwesomeIcon className="remove-icon" icon={faTimes} onClick={() => { removeFromCart(e.id) }} />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="cartItems-done">
                <div className="cartitems-total">
                    <h1>محصولات</h1>
                    <div>
                        <div className="cartitems-shipping">
                            <p>مالیات</p>
                            <p>رایگان</p>
                        </div>
                        <hr />
                        <div className="cartitems-totalitem">
                            <p>جمع محصولات</p>
                            <p>{getTotalCartAmount().toLocaleString()} تومان</p>
                        </div>
                        <hr />
                    </div>
                    <form onSubmit={handlePayment}>
                        <input
                            className="address"
                            type="text"
                            placeholder="آدرس"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        <input
                            className="phone"
                            type="text"
                            placeholder="تلفن همراه"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button className="pay-btn" type="submit">پرداخت</button>
                    </form>
                </div>
                <div className="promo-code">
                    <p>اگر کد تخفیف دارید وارید نمایید</p>
                    <div className="cartitem-promobox">
                        <input type="text" placeholder="کد تخفیف" />
                        <button type="submit">تایید</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
