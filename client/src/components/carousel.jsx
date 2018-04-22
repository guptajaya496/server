import React, {Component} from 'react';
import PPMIMG1 from '../dist/images/ppmimg1.jpeg';
import PPMIMG2 from '../dist/images/ppmimg2.jpeg';
import PPMIMG3 from '../dist/images/ppmimg3.jpeg';
import PPMIMG4 from '../dist/images/ppmimg4.jpeg';

export default class Carousel extends Component{
    render(){
        return(
          <div class="carousel">
            <a class="carousel-item" href="#one!"><img src="./ppmimg1.jpeg"/></a>
            <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
            <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
            <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
            <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
          </div>
        );
    }
}
