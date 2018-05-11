
import React,{Component} from 'react';
import PPM from '../dist/images/PPM.jpg';

class Header extends Component{
    render(){
        return(
          <nav className="nav-extended col-xs-14 col-sm-14 col-lg-14">
            <div className="nav-wrapper" style={{backgroundColor:'#2e6da4'}}>
                <div className="col-xs-14 col-sm-14 col-lg-2">
                  <a href="/" className="brand-logo">
                    <img src= {PPM} alt="logo" className="logo" style={{height:60+'px', width:115+'px', align:'center','paddingBottom':5+'px','paddingLeft':35+'px','paddingTop':10+'px'}}/>
                  </a>
                </div>
                <div className="col-xs-14 col-sm-14 col-lg-12 col-lg-offset-3">
                  <span className="brand-logo"> Praveen Pharmacy & Medicals</span>
                </div>
            </div>
            <div className="nav-wrapper" id="myTopnav" style={{backgroundColor:'#2e6da4'}}>
                <ul id="nav-mobile" style={{align:'center'}}>
                    <li className="tab"><a href="/" className="active" style={{fontSize:12+'px'}}>Home</a></li>
                    <li className="tab"><a href="/managing-directors-message" style={{fontSize:12+'px'}}>Managing Directors's Message</a></li>
                    <li className="tab"><a href="/mission-vision" style={{fontSize:12+'px'}}>Mission & Vision</a></li>
                    <li className="tab"><a href="/about-organization" style={{fontSize:12+'px'}}>About Organization</a></li>
                    <li className="tab"><a href="/association-scope-portfolio" style={{fontSize:12+'px'}}>Association & Scope & Portfolio</a></li>
                    <li className="tab"><a href="/general-rules-regulations" style={{fontSize:12+'px'}}>General Rules & Regulations</a></li>
                    <li className="tab"><a href="/achievements-gallery" style={{fontSize:12+'px'}}>Achievement's Gallery</a></li>
                    <li className="tab"><a href="/contactus" style={{fontSize:12+'px'}}>Contact Us</a></li>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
                </ul>


             </div>


          </nav>
        );
    }
}
export default Header;
