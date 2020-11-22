import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        online: false,
    };
}

render() {
    return (
        <div className="Contact">
        <div>
        <img className='avatar' src={this.props.avatar} />
        </div>
        <div>
            <h4 className="name">{this.props.name}</h4>
            <span
              className={this.state.online? "status-online" : "status-offline"}
              onClick={event => {
                const newOnline = !this.state.online;
                this.setState({ online: newOnline });
              }}
            >
            </span>
            <p className="status-text">{this.state.online ? "Online" : "Offline"}</p>
        </div>
    </div>
    );
  }
}
                    

export default Contact;