import React from 'react';
import './About.css';
import img1 from '../static/images/murti.jpg';

const About = () => {
  return (
    <div className="container-fluid"> 

        <div className="row">

            <div className="col-md-12 col-sm-12">


                <div className='about-title'>

                    <p>About Us</p>
                    <h1>Welcome to bhirkuti</h1>

                </div>

                <div className='row'>

                    <div className='col-md-6 about-img'>

                        <img className='img-fluid' src={img1} />
                    </div>
                    <div className='col-md-6 about-info'>

                        <p>Bhirkuti is a global marketplace for unique and creative goods. It sells goods from unique handcrafted pieces to vintage treasures from Nepal. It focuses on the creative and unique products which are only made in Nepal and sell in the global market through this e-commerce website. This website helps the buyers looking for an alternative - something special with a human touch, for those moments in life that deserve imagination. As a company, we strive to lead with our own principle and to help spread ideas of sustainability and responsibility whose impact can reach far beyond our own business.</p>

                    </div>

                </div>

                

            </div>


        </div>
    
    </div>
  )
}

export default About;
