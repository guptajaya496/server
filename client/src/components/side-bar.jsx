
import React,{Component} from 'react';

class Sidebar extends Component{
    render(){
        return(
          <div className="col-xs-14 col-sm-14">

              <ul className="collapsible">
                <li>
                  <div className="collapsible-header"><span className="brand"><strong>PPM SPECIALITIES</strong></span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="fa fa-heartbeat fa-lg"></i> PPM Surgicals</div>
                  <div className="collapsible-body" style={{padding:1+'rem'}}>
                    <ul>
                        <li style={{paddingBottom:10+'px'}}> <a href="/products-catalouge"  style={{color:'#333'}} > <i className="fa fa-heartbeat fa-lg"></i> Product's Catalouge</a></li>
                        <li style={{paddingBottom:10+'px'}}><a href="/enquiry-form" style={{color:'#333'}}><i className="fa fa-heartbeat fa-lg"></i> Enquiry Form</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="fa fa-user fa-lg"></i> PPM Consultancy</div>
                  <div className="collapsible-body" style={{padding:1+'rem'}}>
                    <ul>
                        <li style={{paddingBottom:10+'px'}}> <a href="/consultancy-portfolio" style={{color:'#333'}} ><i className="fa fa-user fa-lg"></i> Consultancy Portfolio</a></li>
                        <li style={{paddingBottom:10+'px'}}><a href="/get-in-touch-form" style={{color:'#333'}}><i className="fa fa-user fa-lg"></i> Get-In-Touch Form</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="fa fa-cubes fa-lg"></i> PPM Constructions</div>
                  <div className="collapsible-body" style={{padding:1+'rem'}}>
                    <ul>
                        <li style={{paddingBottom:10+'px'}}> <a href="/civil-construction"  style={{color:'#333'}}><i className="fa fa-cubes fa-lg"></i> Civil Construction</a></li>
                        <li style={{paddingBottom:10+'px'}}><a href="/architecture-structural-designs" style={{color:'#333'}}><i className="fa fa-cubes fa-lg"></i> Architecture & Structural Designs</a></li>
                        <li style={{paddingBottom:10+'px'}}><a href="/interior-designing" style={{color:'#333'}}><i className="fa fa-cubes fa-lg"></i> Interior Designing</a></li>
                        <li style={{paddingBottom:10+'px'}}><a href="/associate-form" style={{color:'#333'}}><i className="fa fa-cubes fa-lg"></i> Associate Form</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="fa fa-users fa-lg"></i> PPM Event Management</div>
                  <div className="collapsible-body" style={{padding:1+'rem'}}>
                    <ul>
                        <li style={{paddingBottom:10+'px'}}> <a href="/services-profile" style={{color:'#333'}}><i className="fa fa-users fa-lg"></i> Services Profile</a></li>
                        <li style={{paddingBottom:10+'px'}}><a href="/call-form" style={{color:'#333'}}><i className="fa fa-users fa-lg"></i> Call Form</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
          </div>
        );
    }
}
export default Sidebar;
