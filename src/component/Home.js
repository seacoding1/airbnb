import { Fragment } from "react"
import HomeCategory from "./HomeCategory";
import HomeList from "./HomeList";
import Myslide from "./Myslide";



const Home = () => {
    return (
        <Fragment>
            <Myslide/>
            <HomeList/>
        </Fragment>
    )
}

export default Home;