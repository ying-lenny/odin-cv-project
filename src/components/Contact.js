import React, {Component} from "react";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { phone, email, linkedIn } = this.props.data;
        return (
            <div className="container has-text-black">
                {phone === '' || (
                    <div className="container">
                        <span className="subtitle has-text-black">Phone: </span>
                        <span className="subtitle has-text-black">{phone}</span>
                    </div>
                )}
                {email === '' || (
                    <div className="container has-text-black">
                        <span className="subtitle has-text-black">Email: </span>
                        <span className="subtitle has-text-black">{email}</span>
                    </div>
                )}
                {linkedIn === '' || (
                    <div className="container has-text-black">
                        <span className="subtitle has-text-black">
                            LinkedIn:{' '}
                        </span>
                        <span className="subtitle has-text-black">
                            {linkedIn}
                        </span>
                    </div>
                )}
            </div>
        )
    }
}

export default Contact;