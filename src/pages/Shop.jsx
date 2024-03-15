import Hero from "../components/Hero/Hero";
import NewCollections from "../components/newCollections/NewCollections";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Offer from "../components/offers/Offers";
import Popular from "../components/popular/Popular";

export default function Shop(props) {
    return (
        <div>
            <Hero />
            <Popular sectionRef={props.sectionRef}/>
            <Offer offRef={props.offRef}/>
            <NewCollections sectionRef2={props.sectionRef2}/>
            <NewsLetter />
        </div>
    )
}