import { useContext } from "react"
import { ShopContex } from "../context/ShopContex"
import { useParams } from "react-router-dom"
import BreadCrumb from "../components/breadcrumbs/BreadCrumb"
import ProductDisplay from "../components/productDisplay/ProductDisplay"

export default function Product(){
    const { all_product } = useContext(ShopContex)
    const {productId} = useParams()
    const product = all_product.find((e) => e.id === Number(productId))
    return(
        <div>
            <BreadCrumb product={product}/>
            <ProductDisplay product={product}/>
        </div>
    )
}