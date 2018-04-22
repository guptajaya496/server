
import React,{Component} from 'react';
import PPM from '../dist/images/PPM.jpg';

class Header extends Component{
    render(){
        return(
            <nav className="nav-extended" style={{'background-color':'#2e6da4'}}>
                <div className="nav-wrapper" >
                    <a className="brand-logo" href='/'>
                        <img src= {PPM} alt="logo" className="logo" style={{height:60+'px', width:100+'px', align:'center'}}></img>
                    </a>
                </div>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li><a href="/" className="active">Home</a></li>
                        <li className="tab"><a href="/products-catalouge">Managing Directors's Message</a></li>
                        <li className="tab"><a href="/mission-vision">Mission & Vision</a></li>
                        <li className="tab"><a href="/about-organization">About Organization</a></li>
                        <li className="tab"><a href="/association-scope-portfolio">Association & Scope & Portfolio</a></li>
                        <li className="tab"><a href="/general-rules-regulations">General Rules & Regulations</a></li>
                        <li className="tab"><a href="/achievements-gallery">Achievement's Gallery</a></li>
                        <li className="tab"><a href="/contactus">Contact Us</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;
