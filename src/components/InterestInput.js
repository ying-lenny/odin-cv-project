import React, { Component } from "react";
import data from "../data";

class InterestInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hobby: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.addHobby = this.addHobby.bind(this);
    }
    addHobby(e) {
        if (this.state.hobby.trim() === '') {
            this.props.done();
            return;
        }
        data.interests.push(this.state.hobby);
        this.props.done();
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.addHobby}>
                <label>Interest: </label>
                <input
                    type="text"
                    placeholder="Cooking"
                    id="hobby"
                    value={this.state.hobby}
                    onChange={this.handleChange}
                ></input>
                <br/>
                <button>Add</button>
                <button onClick={this.props.done}>Cancel</button>
            </form>
        );
    }
}

export default InterestInput;