
import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="page-footer col-xs-14 col-sm-14" style={{'backgroundColor':'#2e6da4'}}>
                <div className="row" style={{margin:0}}>
                    <div className="col-xs-6 col-xs-push-3 col-sm-2 col-sm-offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a id="linkcolor"  style={{color:'#ffffff'}} href="/">Home</a></li>
                            <li><a id="linkcolor" style={{color:'#ffffff'}} href="/aboutus">About</a></li>
                            <li><a id="linkcolor" style={{color:'#ffffff'}} href="/contactus">Contact</a></li>
                        </ul>
                        <div className="row row-header">
                            <a href="http://google.com/+">
                                <i id="linkcolor" style={{color:'#ffffff'}} className="fa fa-google-plus-square" aria-hidden="true"></i>
                            </a>
                            <span style={{padding:5+'px'}}></span>
                            <a href="http://www.facebook.com/profile.php?id=">
                                <i id="linkcolor"  style={{color:'#ffffff'}} className="fa fa-facebook-square" aria-hidden="true"></i>
                            </a>
                            <span style={{padding:5+'px'}}></span>
                            <a href="http://www.linkedin.com/in/">
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
                            <a href="mailto:">
                                <i id="linkcolor"  style={{color:'#ffffff'}} className="fa fa-envelope-o"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-xs-6 col-xs-push-3">
                        <h5>Our Address</h5>
                        <address>
                            100, State Beach, South Bay Road<br/>
                            Clear Water Bay, Ockland<br/>
                            United States<br/>
                            <i className="fa fa-phone" ></i>: +852 1234 5678<br/>
                            <i className="fa fa-fax"></i>: +852 8765 4321<br/>
                            <i className="fa fa-envelope"></i>:
                            <a id="linkcolor"  style={{color:'#ffffff'}} href="mailto:booksrfriends@edu.net">
                                booksrfriends@edu.net</a><br/>
                        </address>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="col-xs-offset-5">
                     © Copyright 2015 Praveen Pharmacy & Medicals
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
