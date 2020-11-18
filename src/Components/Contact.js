import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <div>
                <img className='avatar' src='https://randomuser.me/api/portraits/men/19.jpg' alt='Contact Image' />
                </div>
                <div>
                    <h4 className="name">Everett Kelley</h4>
                    <div className='status-online'></div>
                    <p className='status-text'>online</p>
                    

                </div>
            </div>
            
        )
    }
}

export default Contact;