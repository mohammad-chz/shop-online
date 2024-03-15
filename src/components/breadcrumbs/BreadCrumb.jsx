import "./breadcrumb.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
export default function BreadCrumb(props){
    const {product} = props
    return(
        <div className="bredcrumb">
            خانه <FontAwesomeIcon icon={faArrowLeft} /> فروشگاه <FontAwesomeIcon icon={faArrowLeft} /> {product.category} <FontAwesomeIcon icon={faArrowLeft} /> {product.name}
        </div>
    )
}