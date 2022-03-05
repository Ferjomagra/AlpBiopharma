
import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../../images/carrousel_images/miel.jpg';
import image2 from '../../images/carrousel_images/medicamentos.jpg';
import image3 from '../../images/carrousel_images/frutas.jpg';
import image4 from '../../images/carrousel_images/azucar.jpg';
import image5 from '../../images/carrousel_images/atomos.jpg';
import image6 from '../../images/carrousel_images/moleculas.jpg';



const CarouselContainer = () => {
  return (
    
    <Carousel fade={true} pause={false}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <Carousel.Item interval={2000}>
      
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Edulcorantes </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Aditivos nutricionales</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>principios activos</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={image5}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Cápsulas de gelatina</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;