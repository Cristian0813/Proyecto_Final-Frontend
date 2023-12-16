import React from 'react';;
import Carousel from 'react-bootstrap/Carousel';
import './styles/Carousel.css';
import image1 from '../../assets/images/Enrejamiento.webp';
import image2 from '../../assets/images/PuertaMetalicaRizada.webp';
import image3 from '../../assets/images/Gaviones.webp';
import image4 from '../../assets/images/PuertaMetalica.webp';

function CarouselFadeExample() {
  return (
    <Carousel fade className="custom-carousel" indicators={false} interval={30000}>
        <Carousel.Item>
            <img
            className="d-block"
            src={image1}
            alt="Erejamiento"
            />
            <Carousel.Caption>
            <h3>Foto de enrejamiento</h3>
            <p>Enrejamiento para todo tipo de casa.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block"
            src={image2}
            alt="Puerta metalica rizada"
            />
            <Carousel.Caption >
            <h3>Puerta Metalica Rizada</h3>
            <p>Está puerta es uso para todo tipo de finca</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block"
            src={image3}
            alt="Gaviones"
            />
            <Carousel.Caption >
            <h3>Gaviones</h3>
            <p>Esto se usa para cualquier superfice para caidas.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block"
            src={image4}
            alt="Puerta Metalica"
            />
            <Carousel.Caption >
            <h3>Puerta metalica</h3>
            <p>Puerta para casas.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;