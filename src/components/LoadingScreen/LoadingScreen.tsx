import "./LoadingScreen.css"
import "./stars.css"

function LoadingScreen() {

    return (
        <div className="container">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className="rocket">
                <img src="/src/assets/images/rocket.png" alt="rocket" />
            </div>
            <p className="text">Ready to see images from space?</p>
            <span className="text-span">Start by clicking anywhere</span>
        </div>
    )
}

export default LoadingScreen
