import React from "react"
import {useState} from "react"
import Carousel from 'react-bootstrap/Carousel'
import screenShot2 from '../Images/Screenshot (104).png'
import screenShot3 from '../Images/Screenshot (106).png'
import screenShot4 from '../Images/Screenshot (108).png'
import screenShot5 from '../Images/Screenshot (109).png'
import screenShot6 from '../Images/Screenshot (112).png'
import screenShot8 from '../Images/Screenshot 2024-07-23 154202.png'
import screenShot9 from '../Images/Screenshot 2024-07-23 154227.png'
import screenShot10 from '../Images/Screenshot 2024-07-23 154320.png'
import screenShot11 from '../Images/Screenshot 2024-07-23 154753.png'
import screenShot12 from '../Images/Screenshot 2025-05-06 075852.png'
import screenShot13 from '../Images/Screenshot 2025-05-06 080423.png'
import screenShot14 from '../Images/Screenshot 2025-08-05 162301.png'

function ImageCarousel() {
    const [index, setIndex] = useState(0);
    const handleSelection = (selectedIndex) => {
        setIndex(selectedIndex)
    };

    return (
        <Carousel className="projectImages" activeIndex={index} onSelect={handleSelection}>
            <Carousel.Item className="projectImage">
                <img src={screenShot2} alt="screenshot"/>
            </Carousel.Item>
            <Carousel.Item className="projectImage">
                <img src={screenShot3} alt="screenshot"/>
            </Carousel.Item>
            <Carousel.Item className="projectImage">
                <img src={screenShot4} alt="screenshot"/>
            </Carousel.Item>
            <Carousel.Item className="projectImage">
                <img src={screenShot5} alt="screenshot"/>
            </Carousel.Item>
            <Carousel.Item className="projectImage">
                <img src={screenShot6} alt="screenshot"/>
            </Carousel.Item>
            <Carousel.Item className="projectImage">
                <img src={screenShot8} alt="screenshot"/>
            </Carousel.Item>
            <Carousel.Item className="projectImage">
                <img src={screenShot9} alt="screenshot"/>
            </Carousel.Item>
            <Carousel.Item className="projectImage">
                <img src={screenShot10} alt="screenshot"/>
            </Carousel.Item>
            <Carousel.Item className="projectImage">
                <img src={screenShot11} alt="screenshot"/>
            </Carousel.Item>
            <Carousel.Item className="projectImage">
                <img src={screenShot12} alt="screenshot"/>
            </Carousel.Item>
            <Carousel.Item className="projectImage">
                <img src={screenShot13} alt="screenshot"/>
            </Carousel.Item>
            <Carousel.Item className="projectImage">
                <img src={screenShot14} alt="screenshot"/>
            </Carousel.Item>
        </Carousel>

        // <section>
        //     <div className="image-carousel">
        //         <button onClick={previousClick}>previous</button>
        //         <div className="ImageOne">
        //             <img src = "/src/Images/Screenshot (101).png" alt="game1" />
        //         </div>
        //         <button onClick={nextClick}>next</button>
        //     </div>
        // </section>
    )
}

export default ImageCarousel;
