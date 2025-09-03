import React from 'react';
import linkedin from '../../assets/linkedin.svg';
import '../Services/styles.css';

function Services() {
  return (
    <div className="services-root">
      <div className="external">
        <div className="horizontal-scroll-wrapper">
          <div className="img-wrapper slower">
            <a href="https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>

          <div className="img-wrapper faster">
            <a href="https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>

          <div className="img-wrapper slower vertical">
            <a href="https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>

          <div className="img-wrapper slower slower-down">
            <a href="https://altphotos.com/photo/swans-and-ducks-swimming-in-a-river-264/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>

          <div className="img-wrapper">
            <a href="https://altphotos.com/photo/sidewalk-terrace-of-a-blue-facade-cafe-312/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>

          <div className="img-wrapper slower">
            <a href="https://altphotos.com/photo/paris-waterfront-at-sunset-1555/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>

          <div className="img-wrapper faster1">
            <a href="https://altphotos.com/photo/old-man-leaning-over-the-barrier-looking-at-the-river-265/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
          
          <div className="img-wrapper slower slower2">
            <a href="https://altphotos.com/photo/cafe-terrace-with-a-row-of-retro-tables-261/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
          
          <div className="img-wrapper">
            <a href="https://altphotos.com/photo/street-scene-with-pedestrians-and-dogs-318/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
          
          <div className="img-wrapper slower">
            <a href="https://altphotos.com/photo/tourist-barge-on-the-river-seine-near-notre-dame-266/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
          
          <div className="img-wrapper slower last">
            <a href="https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Services;