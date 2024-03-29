import React, { Component } from "react";
import data from "../data";

class SocialInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            website: '',
            userName: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.addSocial = this.addSocial.bind(this);
    }
    addSocial(obj) {
        if (obj.website === '' || obj.userName === '') return;
        data.social = data.social.map((acc, index) => {
            return { ...acc, id: index };
        });
        data.social.push({ ...obj, id: data.social.length });
    }
    handleForm(e) {
        const obj = (() => {
            return {
                id: '',
                website: this.state.website.trim(),
                userName: this.state.userName.trim(),
            };
        })();
        this.addSocial(obj);
        this.props.done();
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.handleForm}>
                <label>Website: </label>
                <input
                    type="text"
                    placeholder="Think of a damn site boy"
                    id="website"
                    value={this.state.website}
                    onChange={this.handleChange}
                ></input>
                <br/>
                <label>Username: </label>
                <input
                    type="text"
                    placeholder="Think of a damn username boy"
                    id="userName"
                    value={this.state.userName}
                    onChange={this.handleChange}
                ></input>
                <br/>
                <button>Submit</button>
                <button onClick={this.props.done}>Cancel</button>
            </form>
        );
    }
}

export default SocialInput;