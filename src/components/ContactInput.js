import React, { Component } from "react";
import data from "../data";

class ContactInput extends Component {
    constructor(props) {
        super(props);
        this.state = { ...data.contact };
        this.handleChange = this.handleChange.bind(this);
        this.changeContact = this.changeContact.bind(this);
    }
    changeContact(e) {
        data.contact.phone = this.state.phone.trim();
        data.contact.email = this.state.email.trim();
        data.contact.linkedIn = this.state.linkedIn.trim();
        this.props.done();
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.changeContact}>
                <label>Phone: </label>
                <input
                    type="text"
                    placeholder="Phone"
                    id="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                ></input>
                <br />
                <label>Email: </label>
                <input
                    type="text"
                    placeholder="email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                ></input>
                <br />
                <label>Linkedin profile: </label>
                <input
                    type="text"
                    placeholder="Linkedin"
                    id="linkedIn"
                    value={this.state.linkedIn}
                    onChange={this.handleChange}
                ></input>
                <br />
                <button>Submit</button>
                <button onClick={this.props.done}>Cancel</button>
            </form>
        );
    }
}

export default ContactInput;