import React, { Component } from "react";
import data from "../data";

class CareerInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startYear: '',
            endYear: '',
            year: '',
            company: '',
            position: '',
            workDone: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.addJob = this.addJob.bind(this);
    }
    addJob(e) {
        let {
            startYear,
            endYear,
            year,
            company,
            position,
            workDone,
        } = this.state;
        if (
            startYear.trim() === '' ||
            endYear.trim() === '' ||
            company.trim() === '' ||
            position.trim() === '' ||
            workDone.trim() === ''
        ) {
            this.props.done();
            e.preventDefault();
            return;
        }
        year = startYear + ' - ' + endYear;
        const obj = (() => {
            return { id: '', year, company, position, workDone };
        })();
        data.career.push({ ...obj, id: data.career.length });
        this.props.done();
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.preventDefault });
    }
    render() {
        return (
            <div className="level box">
                {/* Form for adding a new job */}
                <form onSubmit={this.addJob}>
                    <label>Add Career Details: </label>
                    <br/>
                    {/* Starting Year */}
                    <label>Starting Year: </label>
                    <input
                        type="text"
                        placeholder="start year"
                        id="startYear"
                        value={this.state.startYear}
                        onChange={this.handleChange}
                    ></input>
                    <br />
                    {/* Ending Year */}
                    <label>Ending Year: </label>
                    <input
                        type="text"
                        placeholder="Final year"
                        id="endYear"
                        value={this.state.endYear}
                        onChange={this.handleChange}
                    ></input>
                    <br />
                    {/* Company Name */}
                    <label>Company Name: </label>
                    <input
                        type="text"
                        placeholder="Sunlife"
                        id="company"
                        value={this.state.company}
                        onChange={this.handleChange}
                    ></input>
                    <br />
                    {/* Position */}
                    <label>Position: </label>
                    <input
                        type="text"
                        placeholder="What position?"
                        id="position"
                        value={this.state.position}
                        onChange={this.handleChange}
                    ></input>
                    <br />
                    {/* Work */}
                    <label>Work: </label>
                    <textarea
                        type="text"
                        placeholder="Goofin"
                        id="workDone"
                        value={this.state.workDone}
                        onChange={this.handleChange}
                    />
                    <br />
                    <button>Submit</button>
                    <button onClick={this.props.done}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default CareerInput;