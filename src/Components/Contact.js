import React, { Component } from 'react';
import './Contact.css';


function Contact(props) {

        return (
            <div className="Contact">
                <div>
                <img className='avatar' src={props.avatar} />
                </div>
                <div>
                    <h4 className="name">{props.name}</h4>
                    <div className={props.online ? "status-online" : "status-offline"}/>
                    <p className='status-text'>{props.online ? "Online" : "Offline"}</p>
                    

                </div>
            </div>
            
        )
    }


export default Contact;