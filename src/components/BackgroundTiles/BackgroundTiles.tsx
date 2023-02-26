import { useEffect, useRef, useState } from "react"
import anime from "animejs/lib/anime.es"
import { TEXTS } from "../../contants/texts"
import { IMAGES } from "../../contants/images"
import "./BackgroundTiles.css"
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

function BackgroundTiles() {

    const [animationStarted, setAnimationStarted] = useState<boolean>(false)
    const [imageToShow, setImageToShow] = useState<number>(-1)

    const [columns, setColumns] = useState(Math.floor(document.body.clientWidth / 50))
    const [rows, setRows] = useState(Math.floor(document.body.clientHeight / 50))

    const tilesContainer = useRef<HTMLDivElement>(null)

    useEffect(() => {
        tilesContainer.current?.style.setProperty("--columns", columns.toString())
        tilesContainer.current?.style.setProperty("--rows", rows.toString())

        window.addEventListener('resize', () => {
            setColumns(Math.floor(document.body.clientWidth / 50))
            setRows(Math.floor(document.body.clientHeight / 50))
        })
    }, [columns, rows])

    const handleTileClicked = (index: number) => {
        anime({
            targets: ".tile",
            opacity: '1',
            delay: anime.stagger(50, {
                grid: [columns, rows],
                from: index
            }),
            begin: function () {
                setAnimationStarted(true)
            },
            complete: function () {
                setAnimationStarted(false)
                setImageToShow((count) => count === 5 ? 0 : count + 1)
            }

        })
    }

    return (
        <div className="container">
            {(imageToShow > -1) &&

                <div className="images-container" style={{
                    opacity: `${animationStarted ? '0.5' : '1'}`,
                    backgroundImage: `url(${IMAGES[imageToShow]})`
                }} >
                    <div className="texts-container" style={{ display: `${animationStarted ? 'none' : ''}` }} >
                        <p>{TEXTS[imageToShow].tittle}</p>
                        <p className="subTittle">{TEXTS[imageToShow].subTittle}</p>
                    </div>
                </div>
            }

            {(imageToShow === -1) &&
                <div className="loadingScreen-wrapper">
                    <LoadingScreen></LoadingScreen>
                </div>
            }

            <div ref={tilesContainer} className="tiles-container">
                {
                    Array.from(Array(columns * rows)).map((_, index) => {
                        return <div style={{
                            pointerEvents: `${animationStarted ? 'none' : 'auto'}`,
                            opacity: `${animationStarted ? '1' : '0'}`

                        }}
                            onClick={() => handleTileClicked(index)} className="tile"></div>
                    })
                }
            </div>
        </div>
    )
}

export default BackgroundTiles
