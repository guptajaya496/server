import React, {Component} from 'react';
import PPMIMG1 from '../dist/images/ppmimg1.jpeg';
import PPMIMG2 from '../dist/images/ppmimg2.jpeg';
import PPMIMG3 from '../dist/images/ppmimg3.jpeg';
import PPMIMG4 from '../dist/images/ppmimg4.jpeg';

export default class Carousel extends Component{
    render(){
        return(
            <div className="carousel ">
                <a className="carousel-item" style={{height:400+'px',width: 500+'px'}} href="#"><img src={PPMIMG1}/></a>
                <a className="carousel-item" style={{height:400+'px',width:500+'px'}} href="#"><img src={PPMIMG2}/></a>
                <a className="carousel-item" style={{height:400+'px',width:500+'px'}} href="#"><img src={PPMIMG3}/></a>
                <a className="carousel-item" style={{height:400+'px',width:500+'px'}} href="#"><img src={PPMIMG4}/></a>
            </div>
        );
    }
}
