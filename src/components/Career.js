import React, { Component } from "react";
import data from "../data";

class Career extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data.career,
        };
        this.deleteJob = this.deleteJob.bind(this);
    }

    deleteJob(e) {
        data.career.splice(Number(e.target.id), 1);
        this.setState({career: data.career });
    }

    render() {
        let careerArray = this.props.career.map((work, index) => {
            return (
                <div className="level box" key={index}>
                    <div className="level left">
                        <div className="subtitle">{work.year}</div>
                    </div>
                    <div className="level right">
                        <div>
                            <div
                                className="subtitle"
                                style={{marginBottom: '10px'}}
                            >
                                {work.company}
                                    {this.props.edit ? (
                                        <span
                                            id={index}
                                            className="fa fa-trash info-del"
                                            onClick={this.delJob}
                                        ></span>
                                    ) : null}
                                </div>
                                <div className="heading">{work.position}</div>
                                <div className="work-done">{work.workDone}</div>
                        </div>
                    </div>
                </div>
            );
        });
        return <div>{careerArray}</div>
    }
}

export default Career;