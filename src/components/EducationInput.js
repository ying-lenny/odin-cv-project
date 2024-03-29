import React, { Component } from 'react';
import data from '../data';

class EducationInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startYear: '',
            endYear: '',
            year: '',
            school: '',
            title: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.addJob = this.addJob.bind(this);
    }
    addJob(e) {
        let {
            startYear,
            endYear,
            year,
            school,
            title,
        } = this.state;
        if (
            startYear.trim() === '' ||
            endYear.trim() === '' ||
            year.trim() === '' ||
            school.trim() === '' ||
            title.trim() === ''
        ) { 
            this.props.done();
            e.preventDefault();
            return;
        }
        year = startYear + ' - ' + endYear;
        const obj = (() => {
            return {id: '', year, school, title };
        })();
        data.education.push({ ...obj, id: data.education.length });
        this.props.done();
        e.preventDefault();
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.preventDefault });
    }
    render() {
        return (
            <div className="level box">
                <form onSubmit={this.addEdu}>
                    <label>Add Education Details:</label>
                    <br />
                    <label>Starting Year:</label>
                    <br />
                    <input
                        type="text"
                        placeholder="start year"
                        id="startYear"
                        value={this.state.startYear}
                        onChange={this.handleChange}
                    ></input>
                    <br />
                    <label>Ending Year:</label>
                    <br />
                    <input
                        type="text"
                        placeholder="end year(/current)"
                        id="endYear"
                        value={this.state.endYear}
                        onChange={this.handleChange}
                    ></input>
                    <br />
                    <label>College Name:</label>
                    <br />
                    <input
                        type="text"
                        placeholder="SETU"
                        id="school"
                        value={this.state.school}
                        onChange={this.handleChange}
                    ></input>
                    <br />
                    <label>Course Done:</label>
                    <br />
                    <input
                        type="text"
                        placeholder="BSc in SSD"
                        id="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    ></input>
                    <br />
                    <button>Submit</button>
                    <button onClick={this.props.done}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default EducationInput;