import Arrows from "./Arrows";
import { useState } from "react";
const Welcome = () => {
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 200) {
            setShowScroll(true)
        }
    };

    window.addEventListener('scroll', checkScrollTop)


    return (<div id="home" className="welcome_div">
        <div className="title">
            <h1> {'<CarlosGuido />'} </h1>
            <div className="h2_container">
                <div><h2>web_developer</h2></div>
                <div></div>
            </div>
        </div>
        {!showScroll && <Arrows />}
    </div>)
}
export default Welcome;