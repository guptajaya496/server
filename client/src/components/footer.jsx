
import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="page-footer col-xs-14 col-sm-14" style={{'backgroundColor':'#2e6da4'}}>
                <div className="row" style={{margin:0}}>
                    <div className="col-xs-4 col-xs-push-1 col-sm-2 col-sm-offset-1">
                        <h5 style={{fontSize:18+'px'}}>Links</h5>
                        <ul className="list-unstyled">
                            <li><a id="linkcolor" style={{color:'#ffffff'}}  href="/">Home</a></li>
                            <li><a id="linkcolor" style={{color:'#ffffff'}} href="/aboutus">About</a></li>
                            <li><a id="linkcolor" style={{color:'#ffffff'}} href="/contactus">Contact</a></li>
                        </ul>
                        <div className="row row-header">
                            <a href="http://google.com/+">
                                <i id="linkcolor" style={{color:'#ffffff'}} className="fa fa-google-plus-square" aria-hidden="true"></i>
                            </a>
                            <span style={{padding:5+'px'}}></span>
                            <a href="https://www.facebook.com/Praveen-Pharmacy-Medicals-593858677327090/?ref=bookmarks">
                                <i id="linkcolor"  style={{color:'#ffffff'}} className="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>
                            <span style={{padding:5+'px'}}></span>
                            <a href="https://www.linkedin.com/">
                                <i id="linkcolor"  style={{color:'#ffffff'}} className="fa fa-linkedin"></i>
                            </a>
                            <span style={{padding:5+'px'}}></span>
                            <a href="http://twitter.com/">
                                <i id="linkcolor"  style={{color:'#ffffff'}} className="fa fa-twitter"></i>
                            </a>
                            <span style={{padding:5+'px'}}></span>
                            <a href="http://youtube.com/">
                                <i id="linkcolor"  style={{color:'#ffffff'}} className="fa fa-youtube"></i>
                            </a>
                            <span style={{padding:5+'px'}}></span>
                            <a href="mailto:ppmjhansi@gmail.com">
                                <i id="linkcolor"  style={{color:'#ffffff'}} className="fa fa-envelope-o"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-xs-8 col-sm-offset-1">
                        <h5 className="col-sm-offset-4" style={{fontSize:18+'px'}}>Our Address</h5>

                        <div className="col-xs-4 col-sm-offset-1">
                        <address>
                            <strong>Head Office : </strong><br/>
                            Praveen Pharmacy & Medicals<br/>
                            Estuti Villa, S-26, K.K.Puri Colony,<br/>
                            Nandanpura, Jhansi - 284003<br/>
                            U.P. India<br/>
                            <i className="fa fa-phone" ></i>: +91 98890 03089<br/>
                            <i className="fa fa-fax"></i>: +91 98890 03089<br/>
                            <i className="fa fa-envelope"></i>:
                            <a id="linkcolor"  style={{color:'#ffffff'}} href="mailto:ppmjhansi@gmail.com">
                                ppmjhansi@gmail.com</a><br/>
                            <a id="linkcolor"  style={{color:'#ffffff'}} href="https://ppmserver.herokuapp.com">
                                website : ppmjhansi.co.in</a><br/>
                         </address>
                         </div>
                         <div className="col-xs-4 col-xs-push-0">
                           <address>
                             <strong>Factory Premises : </strong><br/>
                             Praveen Pharmacy & Medicals<br/>
                             B-49 & 50, Growth Centre,<br/>
                             Phase II, Bijauli Industrial Area,<br/>
                             Lalitpur Road, Jhansi - 284135<br/>
                             U.P. India<br/>
                          </address>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="col-xs-14 col-sm-14 col-lg-14 col-xs-offset-3  col-sm-offset-4 col-lg-offset-5">
                     © Copyright 2015 Praveen Pharmacy & Medicals
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
