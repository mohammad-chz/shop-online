import "./footer.css"
import logo from "../assets/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    return (
        <div className="footer">
            <div className="logo-footer">
                <img src={logo} alt="logo" />
                <p>تک پوش</p>
            </div>
            <ul>
                <li >بهترین قیمت</li>
                <li>بالاترین کیفیت</li>
                <li>امکان خرید اقساطی</li>
            </ul>
            <div className="icon">
                <FontAwesomeIcon icon={faInstagram} className="icon1" />
                <FontAwesomeIcon icon={faTelegram} className="icon2" />
                <FontAwesomeIcon icon={faWhatsapp} className="icon3" />
            </div>
        </div>
    )
}