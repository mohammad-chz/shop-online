import { useContext, useState, useEffect } from "react";
import "./css/shopcatefory.css";
import { ShopContex } from "../context/ShopContex";
import Item from "../components/items/Item";
export default function ShopCategory(props) {
    const { all_product } = useContext(ShopContex);
    const [show, setShow] = useState(true);
    const [sortedProducts, setSortedProducts] = useState(all_product); // Define sortedProducts state
    const [sortBy, setSortBy] = useState("priceLowToHigh"); // State to hold sorting option

    // Function to handle sorting
    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    // Function to sort products based on the selected option
    useEffect(() => {
        const sortProducts = (sortBy) => {
            let sorted;
            if (sortBy === 'priceLowToHigh') {
                sorted = [...all_product].sort((a, b) => a.new_price - b.new_price);
            } else if (sortBy === 'priceHighToLow') {
                sorted = [...all_product].sort((a, b) => b.new_price - a.new_price);
            }
            setSortedProducts(sorted);
        };
        
        sortProducts(sortBy);
    }, [sortBy, all_product]); // Include sortProducts and all_product in the dependency array

    function handleClick() {
        setShow(prevShow => !prevShow);
    }

    return (
        <div className="shop-category">
            <img src={props.banner} alt="banner" className="banner" />
            <div className="shopCategory-indexSort">
                <select name="sort" id="sort select" onChange={handleSortChange} value={sortBy}>
                    <option value="priceLowToHigh">مرتب سازی قیمت از پایین به بالا</option>
                    <option value="priceHighToLow">مرتب سازی قیمت از بالا به پایین</option>
                </select>
                <div className="shopCategory-products">
                    {sortedProducts.slice(0, show ? all_product.length : 12).map((item, i) => {
                        if (props.category === item.category) {
                            return <Item key={i}
                                id={item.id}
                                image={item.image}
                                name={item.name}
                                new_price={item.new_price.toLocaleString()}
                                old_price={item.old_price.toLocaleString()} />;
                        } else {
                            return null;
                        }
                    })}
                </div>
                <button className="control-button" onClick={handleClick}>{show ? "کمتر" : "بیشتر"}</button>
            </div>
        </div>
    );
}
