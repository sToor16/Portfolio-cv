import React, { Component } from 'react';
import picture from './images/contact_page_image.jpg'
import './contact.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Contact extends Component {
    render() {
        return (
            <div className="contact-page-container">
                <div className="w3-container content-container">
                    <div className="w3-half w3-half-custom">
                        <img className="picture-style" src={picture} alt={"mypicture"}></img>
                    </div>
                    <div className="w3-half contact-details w3-center">
                        <div className="my-name height-25">
                            <span>Toor, Shubhpreet Singh</span>
                        </div>
                        <hr className="hr-in-contact-page"/>
                        <div className="height-25">
                            <FontAwesomeIcon className="icon-style" icon="phone-volume" /><br/>
                            <span>(949)870-5052</span>
                        </div>
                        <hr className="hr-in-contact-page"/>
                        <div className="height-25">
                            <FontAwesomeIcon className="icon-style" icon="envelope" /><br/>
                            <span>sstoor16@gmail.com<br></br>
                                shubhpreetsingh.toor@mavs.uta.edu
                            </span>
                        </div>
                        <hr className="hr-in-contact-page"/>
                        <div className="height-25">
                            <FontAwesomeIcon className="icon-style" icon="address-card" /><br/>
                            <span>507 SUMMIT AVE,<br/> APT #167<br/>
                                Arlington, Texas (76013)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
