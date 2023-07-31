import React from 'react';
import img1 from '../static/images/murti.jpg';
import img2 from '../static/images/khukuri.jpg';
import img3 from '../static/images/doko.jpg';
import './Carousel.css';

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
        <img className="images" src={img1} alt="First slide" />
        <div className="carousel-caption ">
            <h5>Authentic Nepali Products</h5>
            
        </div>
    </div>
    <div className="carousel-item">
        <img className="images" src={img2} alt="Second slide" />
        <div className="carousel-caption ">
            <h5>Authentic Nepali Products</h5>
        </div>
    </div>
    <div className="carousel-item">
        <img className="images" src={img3} alt="Third slide" />
        <div className="carousel-caption ">
            <h5>Authentic Nepali Products</h5>
        </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    
  </a>
  
</div>
  )
}

export default Carousel;