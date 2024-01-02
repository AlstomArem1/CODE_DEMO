import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import fb1 from "./fb1.jpg";
import fb2 from "./fb2.webp";
import fb3 from "./fb3.jpg";
import fb4 from "./fb4.jpg";
import fb5 from "./fb5.webp";
function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={fb1}
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={fb2}
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={fb3}
                    alt="Third slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={fb4}
                    alt="Third slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={fb5}
                    alt="Third slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>

            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;
