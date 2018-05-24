import React,{Component} from 'react';
import PPM from '../dist/images/PPM.jpg';

class Header extends Component{

    myFunction() {
        let x = document.getElementById("myTopnav");
        if(x !== null || x !== undefined){
            if ((x.className).indexOf("nav-wrapper") !== -1 ) {
                if((x.className).indexOf("responsive") === -1 ){
                    x.className += " responsive";
                }
            } else {
                x.className = "nav-wrapper";
            }
        }
    }

    render(){
        return(
            <nav className="nav-extended col-xs-14 col-sm-14 col-lg-14">
                <div className="nav-wrapper">
                    <div className="col-xs-14 col-sm-14 col-lg-4" >
                      <img src= {PPM} alt="logo" className="logo logoStyle"/>
                    </div>
                    <div className="col-xs-14 col-sm-14 col-lg-8">
                        <span><h4 className="logoName">Praveen Pharmacy & Medicals</h4></span>
                    </div>
                </div>

                <div className="nav-wrapper col-xs-14 col-sm-14 col-lg-14 col-lg-offset-1" id="myTopnav" >
                        <a href="/" className="active navMenuFont">Home</a>
                        <a href="/managing-directors-message" className="navMenuFont">
                            Managing Directors's Message
                        </a>
                        <a href="/mission-vision" className="navMenuFont">
                            Mission & Vision
                        </a>
                        <a href="/about-organization" className="navMenuFont">
                            About Organization
                        </a>
                        <a href="/association-scope-portfolio" className="navMenuFont">
                            Association & Scope & Portfolio
                        </a>
                        <a href="/general-rules-regulations" className="navMenuFont">
                            General Rules & Regulations
                        </a>
                        <a href="/achievements-gallery" className="navMenuFont">
                            Achievement's Gallery
                        </a>
                        <a href="/contactus" className="navMenuFont">
                            Contact Us
                        </a>
                        <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>
                            <i className="fa fa-bars iconHeight"/>
                        </a>
                    </div>
            </nav>
        );
    }
}
export default Header;
