
import React,{Component} from 'react';

class Sidebar extends Component{
    render(){
        return(
          <div>

              <ul className="collapsible">
                <li>
                  <div className="collapsible-header"><span className="brand"><strong>PPM SPECIALITIES</strong></span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="fa fa-heartbeat fa-lg"></i> PPM Surgicals</div>
                  <div className="collapsible-body">
                    <ul>
                        <li> <a href="/products-catalouge"><i className="fa fa-heartbeat fa-lg"></i> Product's Catalouge</a></li>
                        <li><a href="/enquiry-form"><i className="fa fa-heartbeat fa-lg"></i> Enquiry Form</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="fa fa-user fa-lg"></i> PPM Consultancy</div>
                  <div className="collapsible-body">
                    <ul>
                        <li> <a href="/consultancy-portfolio"><i className="fa fa-heartbeat fa-lg"></i> Consultancy Portfolio</a></li>
                        <li><a href="/get-in-touch-form"><i className="fa fa-heartbeat fa-lg"></i> Get-In-Touch Form</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="fa fa-cubes fa-lg"></i> PPM Constructions</div>
                  <div className="collapsible-body">
                    <ul>
                        <li> <a href="/civil-construction"><i className="fa fa-heartbeat fa-lg"></i> Civil Construction</a></li>
                        <li><a href="/architecture-structural-designs"><i className="fa fa-heartbeat fa-lg"></i> Architecture & Structural Designs</a></li>
                        <li><a href="/interior-designing"><i className="fa fa-heartbeat fa-lg"></i> Interior Designing</a></li>
                        <li><a href="/associate-form"><i className="fa fa-heartbeat fa-lg"></i> Associate Form</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="fa fa-users fa-lg"></i> PPM Event Management</div>
                  <div className="collapsible-body">
                    <ul>
                        <li> <a href="/services-profile"><i className="fa fa-heartbeat fa-lg"></i> Services Profile</a></li>
                        <li><a href="/call-form"><i className="fa fa-heartbeat fa-lg"></i> Call Form</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
          </div>
        );
    }
}
export default Sidebar;
