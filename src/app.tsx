import { useEffect, useRef, useState } from "react"
import anime from "animejs/lib/anime.es"
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {

    const [showLoadingScren, setShowLoadingScren] = useState<boolean>(true)
    anime({
        targets: ".loadingScreen-wrapper",
        opacity: [0, 1],
        duration: 7000,
        easing: 'easeInOutQuad',
    })

    return (
        <div>
            {showLoadingScren &&
                <div className="loadingScreen-wrapper">
                    <LoadingScreen></LoadingScreen>
                </div>
            }
        </div>
    )
}

export default App
