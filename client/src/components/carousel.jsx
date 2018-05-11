import React, {Component} from 'react';
import PPM1 from '../dist/images/ppm1.jpg';
import PPM2 from '../dist/images/ppm2.png';
import PPM3 from '../dist/images/ppm3.jpg';
import PPM4 from '../dist/images/ppm4.jpg';
import PPM5 from '../dist/images/ppm5.jpg';
import PPM6 from '../dist/images/ppm6.png';
import PPM7 from '../dist/images/ppm7.jpg';
import PPM8 from '../dist/images/ppm8.jpeg';
import PPM9 from '../dist/images/ppm9.png';

export default class Carousel extends Component{
    render(){
        return(
            <div className="carousel ">
                <a className="carousel-item" style={{height:400+'px',width: 500+'px'}} href="#"><img src={PPM1}/></a>
                <a className="carousel-item" style={{height:400+'px',width:500+'px'}} href="#"><img src={PPM2}/></a>
                <a className="carousel-item" style={{height:400+'px',width:500+'px'}} href="#"><img src={PPM3}/></a>
                <a className="carousel-item" style={{height:400+'px',width:500+'px'}} href="#"><img src={PPM4}/></a>
                <a className="carousel-item" style={{height:400+'px',width: 500+'px'}} href="#"><img src={PPM5}/></a>
                <a className="carousel-item" style={{height:400+'px',width:500+'px'}} href="#"><img src={PPM6}/></a>
                <a className="carousel-item" style={{height:400+'px',width:500+'px'}} href="#"><img src={PPM7}/></a>
                <a className="carousel-item" style={{height:400+'px',width:500+'px'}} href="#"><img src={PPM8}/></a>
                <a className="carousel-item" style={{height:400+'px',width:500+'px'}} href="#"><img src={PPM9}/></a>
            </div>
        );
    }
}
