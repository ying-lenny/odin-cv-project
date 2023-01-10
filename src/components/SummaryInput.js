import React, { Component } from 'react';
import data from '../data';

class SummaryInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summary: data.summary,
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeSum = this.changeSum.bind(this);
    }
    changeSum(e) {
        data.summary = this.state.summary.trim();
        this.props.done();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value});
    }

    render() {
        return (
            <form onSubmit={this.changeSum}>
                <textarea
                    placeholder='Give us a sumamry'
                    id='summary'
                    value={this.state.summary}
                    onChange={this.handleChange}
                    className="summary-ta"
                />
                <br />
                <button>Submit</button>
                <button onClick={this.props.done}> Cancel </button>
            </form>
        );
    }
}

export default SummaryInput;