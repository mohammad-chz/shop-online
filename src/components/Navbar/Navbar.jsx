import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { ShopContex } from "../../context/ShopContex";

export default function Navbar() {
    const [menu, setMenu] = useState("shop");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const {getTotalCartItems} = useContext(ShopContex)
    
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    const getMenuItemStyle = (menuItem) => ({
        color: menu === menuItem ? "black" : "#626262",
        fontWeight: menu === menuItem ? "bold" : "normal",
        textDecoration: 'none'
    });
    const getMenuItemStyle2 = (menuItem2) => ({
        backgroundColor: menu === "sign" ? "rgb(207, 55, 38)" : "",
        fontWeight: menu === "sign" ? "bold" : "normal",
        color : menu === "sign" ? "white" : "rgb(98, 98, 98)",
    });

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p>تک پوش</p>
            </div>
            <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                <li onClick={() => {setMenu("shop")}}>
                    <Link to="/" style={getMenuItemStyle("shop")}>فروشگاه</Link> {menu === "shop" && <hr />}
                </li>
                <li onClick={() => {setMenu("men")}}>
                    <Link to="/men" style={getMenuItemStyle("men")}>مردانه</Link> {menu === "men" && <hr />}
                </li>
                <li onClick={() => {setMenu("women")}}>
                    <Link to="/women" style={getMenuItemStyle("women")}>زنانه</Link> {menu === "women" && <hr />}
                </li>
                <li onClick={() => {setMenu("kids")}}>
                    <Link to="/kids" style={getMenuItemStyle("kids")}>بچگانه</Link> {menu === "kids" && <hr />}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button onClick={() => {setMenu("sign")}} style={getMenuItemStyle2("sign")} >ورود</button ></Link> 
                <Link to="/cart"><FaShoppingCart className="icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                {mobileMenuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
            </div>
        </div>
    );
}
