import { useState, Fragment, useRef } from 'react';

import DotIndicator from './DotIndicator';
import SliderBtn from './SliderBtn';

import s from './Slider.module.css';

const Slider = (props) => {
    let [cardIndex, setCardIndex] = useState(0);
    let [dotIndex, setDotIndex] = useState(0);
    let [scrollTimeout, setScrollTimeout] = useState();
    let [isScrolling, setIsScrolling] = useState(false);
    let [startX, setStartX] = useState(null);
    let [endX, setEndX] = useState(null);

    let sliderContainerRef = useRef(null);

    const nextProject = (n) => {
        let newIndex = cardIndex + n;

        if (newIndex < 0) {
            newIndex = props.projects.length - 1;
        } else if (newIndex >= props.projects.length) {
            newIndex = 0;
        }
        setCardIndex(newIndex);
    };
    const nextDot = (n) => {
        let newIndex = (dotIndex + n) % 3 // cycle through dots 

        if (newIndex < 0) {
            newIndex = props.projects.length - 1;
        } else if (newIndex >= props.projects.length) {
            newIndex = 0;
        }
        setDotIndex(newIndex);
    };

    const cardStyles = {
        transform: `translateX(-${cardIndex * 500}px)`, // Feat post width plus gap
    };

    const isMobile = window.innerWidth <= 600;

    const touchStartHandler = (event) => {
        if (!isMobile) return;

        if (event.type === "touchstart") {
            // startX = event.changedTouches[0].clientX;
            setStartX(event.changedTouches[0].clientX)
        } else if (event.type === "mousedown") {
            // startX = event.clientX;
            setStartX(event.clientX)
        }
    };

    const touchEndHandler = (event) => {
        if (!isMobile) return;
        if (event.type === "touchend") {
            // endX = event.changedTouches[0].clientX;
            setEndX(event.changedTouches[0].clientX)
        } else if (event.type === "mouseup") {
            // endX = event.clientX;
            setEndX(event.clientX)
        }
        swipeHandler();
    };


    const swipeHandler = (e) => {
        const swipeThreshold = 10; // Adjust the threshold as needed

        const swipeDistance = endX - startX;

        if (swipeDistance > swipeThreshold) {
            // Swiped to the right (next card)
            nextProject(-1);
            nextDot(-1);
        } else if (swipeDistance < swipeThreshold) {
            // Swiped to the left (previous card)
            nextProject(1);
            nextDot(1);
        }

    };

    const wheelHandler = (e) => {
        // if (!isScrolling) {
        //     setIsScrolling(true);

        //     const deltaThreshold = +sliderContainerRef.offsetWidth / 2;

        //     let delta = e.deltaX * 100;
        //     if (delta > deltaThreshold) {
        //         // Scrolled to the right (next card)
        //         nextProject(1);
        //     } else if (delta < -deltaThreshold) {
        //         // Scrolled to the left (previous card)
        //         nextProject(-1);
        //     }

        //     clearTimeout(scrollTimeout);

        //     // scrollTimeout = setTimeout(() => {
        //     //     isScrolling = false;
        //     // }, 400); // Adjust as needed
        //     setScrollTimeout(
        //         setTimeout(() => {
        //             setIsScrolling(false);
        //         }, 400) // Adjust as needed
        //     );
        // }

        e.preventDefault();
    };



    return (
        <Fragment>
            {
                !isMobile ?
                    (
                        <Fragment>
                            <SliderBtn left onclick={() => nextProject(-1)} />
                            <SliderBtn right onclick={() => nextProject(1)} />
                        </Fragment>
                    ) :
                    <DotIndicator cardIndex={cardIndex} projects={props.projects} dotIndex={dotIndex} />
            }
            <div
                className={`${s.Slider} ${props?.className}`}
                ref={sliderContainerRef}
                onWheel={wheelHandler}
                onMouseDown={touchStartHandler}
                onTouchStart={touchStartHandler}
                onTouchEnd={touchEndHandler}
                onMouseUp={touchEndHandler}
            >
                {
                    props?.projects.length > 0 &&
                    props.projects.map((project, index) => {
                        // Project is an object with a name, description, image, and link
                        return (
                            <div className={`${s.Slider_item} ${index === cardIndex ? s.selected : ''}`} style={cardStyles} key={index}>
                                <div className={`${s.Slider_item_image}`}>
                                    <img src={project.image} alt={project.name} />
                                </div>
                                <div className={s.Slider_item_overlay}></div>
                                <div className={s.Slider_item_content}>
                                    <h4>{project.name}</h4>
                                    <p>{project.description}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </Fragment>
    );
}

export default Slider;