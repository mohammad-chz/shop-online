import { Link } from "react-router-dom"
import "./item.css"
export default function Item(props){
    return(
        <div className="item">
            <Link to={`/product/${props.id}`}><img src={props.image} alt="product" /></Link>
            <p className="name-product">{props.name}</p>
            <div className="item-prices">
                <p>تومان</p>
                <p className="item-props-new">{props.new_price}</p>
                <p className="item-props-old">{props.old_price}</p>
            </div>
        </div>
    )
}