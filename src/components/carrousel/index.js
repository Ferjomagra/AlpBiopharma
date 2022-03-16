import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';

import image1 from '../../images/carrousel_images/miel.jpg';
import image2 from '../../images/carrousel_images/medicamentos.jpg';
import image3 from '../../images/carrousel_images/frutas.jpg';
import image4 from '../../images/carrousel_images/azucar.jpg';
import image5 from '../../images/carrousel_images/atomos.jpg';
import image6 from '../../images/carrousel_images/moleculas.jpg';


const CarouselContainer = () => {
  return (
    
    <Carousel fade={true} pause={false}>
      
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Aditivos nutricionales</h3>
          {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Insumos farmacéuticos y alimentarios</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image6}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Importación directa</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;