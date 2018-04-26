
import React,{Component} from 'react';
import PPM from '../dist/images/PPM.jpg';

class Header extends Component{
    render(){
        return(
          <nav className="nav-extended col-xs-14 col-sm-14">
            <div className="nav-wrapper " style={{'backgroundColor':'#2e6da4', align:'center'}}>
                <a href="/" className="brand-logo">
                  <img src= {PPM} alt="logo" className="logo" style={{height:60+'px', width:100+'px', align:'center','paddingBottom':5+'px','paddingLeft':5+'px'}}/>
                </a>
            </div>
            <div className="nav-wrapper" style={{'backgroundColor':'#2e6da4'}}>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li className="tab"><a href="/" className="active">Home</a></li>
                  <li className="tab"><a href="/managing-directors-message">Managing Directors's Message</a></li>
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
