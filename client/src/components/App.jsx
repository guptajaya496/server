import 'materialize-css/dist/css/materialize.min.css';
import React,{Component} from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

//Component
import Header from './header.jsx';
import Footer from './footer.jsx';
import Home from './home.jsx';
import Sidebar from './side-bar.jsx';
import AboutOrganization from './about-organization.jsx';
import ManagingDirectorsMessage from './managing-directors-message.jsx';
import AssociationScopePortfolio from './association-scope-portfolio.jsx';
import GeneralRulesRegulations from './general-rules-regulations.jsx';
import AchievementsGallery from './achievements-gallery.jsx';
import ContactUs from './contactus.jsx';
import PPMSurgicals from './ppm-surgicals.jsx';
import PPMConsultancy from './ppm-consultancy.jsx';
import PPMConstructions from './ppm-constructions.jsx';
import PPMEventManagement from './ppm-event-management.jsx';
import MissionVision from './mission-vision.jsx';
import GetInTouchForm from './get-in-touch-form.jsx';
import ProductsCatalogue from './products-catalouge.jsx';
import EnquiryForm from './enquiry-form.jsx';
import ConsultancyPortfolio from './consultancy-portfolio.jsx';
import CivilConstruction from './civil-construction.jsx';
import ArchitectureStructuralDesigns from './architecture-structural-designs.jsx';
import InteriorDesigning from './interior-designing.jsx';
import AssociateForm from './associate-form.jsx';
import ServicesProfile from './services-profile.jsx';
import CallForm from './call-form.jsx';

const history = createBrowserHistory();

class App extends Component{
    render(){
        return(
            <div className="row">
                    <div className="row">
                        <Header/>
                    </div>
                    <div className=" main-container">
                        <section>
                            <div className="col-xs-14 col-sm-14 col-lg-2 ">
                                <Sidebar/>
                            </div>
                        </section>
                        <div className="col-xs-14 col-sm-14 col-lg-10">
                            <Router history={history}>
                                <Switch>
                                    <Route exact path='/' component={Home} />
                                    <Route path='/about-organization' component={AboutOrganization} />
                                    <Route path='/managing-directors-message' component={ManagingDirectorsMessage} />
                                    <Route path='/mission-vision' component={MissionVision} />
                                    <Route path='/association-scope-portfolio' component={AssociationScopePortfolio} />
                                    <Route path='/general-rules-regulations' component={GeneralRulesRegulations} />
                                    <Route path='/achievements-gallery' component={AchievementsGallery} />
                                    <Route path='/contactus' component={ContactUs} />
                                    <Route path='/ppm-surgicals' component={PPMSurgicals} />
                                    <Route path='/ppm-consultancy' component={PPMConsultancy} />
                                    <Route path='/ppm-constructions' component={PPMConstructions} />
                                    <Route path='/ppm-event-management' component={PPMEventManagement} />
                                    <Route path='/get-in-touch-form' component={GetInTouchForm} />
                                    <Route path='/products-catalouge' component={ProductsCatalogue} />
                                    <Route path='/enquiry-form' component={EnquiryForm} />
                                    <Route path='/consultancy-portfolio' component={ConsultancyPortfolio} />
                                    <Route path='/civil-construction' component={CivilConstruction} />
                                    <Route path='/architecture-structural-designs' component={ArchitectureStructuralDesigns} />
                                    <Route path='/interior-designing' component={InteriorDesigning} />
                                    <Route path='/associate-form' component={AssociateForm} />
                                    <Route path='/services-profile' component={ServicesProfile} />
                                    <Route path='/call-form' component={CallForm} />
                                </Switch>
                            </Router>
                        </div>
                    </div>
                    <div className="row"></div>
                    <div className="row">
                        <Footer/>
                    </div>
               
            </div>
        );
    }
};

export default App;
