import "./offer.css"
import offer from "../assets/off.png"

export default function Offer(){
    
    return(
        <div className="offers">
            <div className="offer-right">
                <div>
                    <p className="offer-right-offers" >تخفیف ها</p>
                    <p className="offer-right-costum">مخصوص شما</p>
                    <p className="best-seller">فقط روی محصولات پر فروش</p>
                    <button>حالا نگاه کن</button>
                </div>
            </div>
            <div className="offer-left">
                <img src={offer} alt="offer" style={{width: "300px"}}/>

            </div>
        </div>
    )
}