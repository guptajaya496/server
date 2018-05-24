import React, {Component} from 'react';
import styles from '../dist/styles/style.css';
import $ from 'jquery';

class EnquiryForm extends Component{

    constructor(props){
        super(props);

        this.state= {
            firstName : "",
            lastName : "",
            email : "",
            phone : "",
            enqDesc : "",
            clientId : '146013505354-mc8d6hrafja7hk4uc16vqb72n9rnb2ps.apps.googleusercontent.com',
            apiKey : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
            scopes : 'https://www.googleapis.com/auth/gmail.readonly '+
                     'https://www.googleapis.com/auth/gmail.send'
        }
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    render(){
        const { firstName, lastName, email, phone, enqDesc} = this.state;
        return(
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="first_name" name="first_name" type="text" className="validate" onChange={this.onChange}/>
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="last_name" type="text" className="validate" onChange={this.onChange}/>
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">email</i>
                            <input id="email" type="email" className="validate" onChange={this.onChange}/>
                            <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                        </div>

                        <div className="input-field col s6">
                            <i className="material-icons prefix">phone</i>
                            <input id="phone" type="tel" className="validate" onChange={this.onChange}/>
                            <label htmlFor="phone">Telephone</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">description</i>
                            <textarea id="enq_Desc" className="materialize-textarea" onChange={this.onChange}></textarea>
                            <label htmlFor="enq_Desc">Enter Enquiry Description</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <button className="btn waves-effect waves-teal sendButtonColor" type="submit" name="sendMail" id="sendMail">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EnquiryForm;
