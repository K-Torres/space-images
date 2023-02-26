import "./LoadingScreen.css"
import "./stars.css"
import Rocket from "../../assets/images/rocket.png";

function LoadingScreen() {

    return (
        <div className="container">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className="rocket">
                <img src={Rocket} alt="rocket" />
            </div>
            <p className="text">Ready to see images from space?</p>
            <span className="text-span">Start by clicking anywhere</span>
        </div>
    )
}

export default LoadingScreen
