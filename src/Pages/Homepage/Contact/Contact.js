import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div class="contact">
            <div id='contact' class="container">
                <div class="row">
                <div class="col-md-12">
                    <div class="titlepage text_align_center">
                        <h1>Contact Us</h1>
                    </div>
                </div>
                </div>
                <div class="row d_flex">
                <div class="col-md-6">
                    <form id="request" class="main_form"  data-aos="fade-right">
                        <div class="row">
                            <div class="col-md-12">
                                <input class="contactus" type="text" name="name" placeholder="Name "/>
                            </div>
                            <div class="col-md-12">
                            <input class="contactus" type="text" name="phone" placeholder="Phone "/>
                            </div>
                            <div class="col-md-12">
                            <input class="contactus" type="text" name="email" placeholder="Email "/>
                            </div>
                            <div class="col-md-12">
                            <textarea class="textarea" placeholder="Message" type="text" name="Message"> </textarea>
                            </div>
                            <div class="col-md-12">
                            <button class="btn">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-md-6">
                    <div class="map_img" data-aos="fade-left">
                        <figure><img src="https://i.ibb.co/PhQLxB6/map.png" alt="#"/></figure>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Contact;