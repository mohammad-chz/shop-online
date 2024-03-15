import React, { useState } from "react";
import Item from "../items/Item";
import "./newCollections.css";
import all_product from "../assets/all_product";

export default function NewCollections() {
    const [showAllItems, setShowAllItems] = useState(false);

    const handleButtonClick = () => {
        setShowAllItems(prevState => !prevState);
    };

    return (
        <div className="new-collections">
            <h1>مجموعه های جدید</h1>
            <hr />
            <div className="product">
                {all_product.slice(0, showAllItems ? all_product.length : 4).map((item, i) => {
                    return (
                        <Item
                            key={i}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    );
                })}
            </div>
            <button onClick={handleButtonClick}>{showAllItems ? 'بستن' : 'بیشتر'}</button>
        </div>
    );
}
