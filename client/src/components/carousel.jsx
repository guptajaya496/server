import React, {Component} from 'react';
import PPMIMG1 from '../dist/images/ppmimg1.jpeg';
import PPMIMG2 from '../dist/images/ppmimg2.jpeg';
import PPMIMG3 from '../dist/images/ppmimg3.jpeg';
import PPMIMG4 from '../dist/images/ppmimg4.jpeg';

export default class Carousel extends Component{
    render(){
        return(
          <div className="carousel carousel-slider">
           <a className="carousel-item" href="#one!"><img src={PPMIMG1}/></a>
           <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/800/400/food/2"/></a>
           <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/800/400/food/3"/></a>
           <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/800/400/food/4"/></a>
          </div>
        );
    }
}
