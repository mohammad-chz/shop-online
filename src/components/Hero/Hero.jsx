import "./Hero.css"
import wawe from "../assets/wave.png"
import model from "../assets/image.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export default function Hero(){
    return(
        <div className="hero">
            <div className="hero-right">
                <p>محصول های به روز شده</p>
                    <div className="hero-hand-icon">
                        <p>جدید</p>
                        <img src={wawe} alt="wawe" />
                    </div>
                    <p className="collection">مجموعه ای</p>
                    <p className="collection">برای همه</p>
                <div className="hero-latest-btn">
                    <button>آخرین مجموعه ها &nbsp;<FontAwesomeIcon icon={faArrowLeft} /></button>
                </div>
            </div>
            <div className="hero-left">
                <img src={model} alt="model" />
            </div>
        </div>
    )
}