import React, { Component } from "react";
import data from "../data";

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            education: this.props.education,
        };
        this.deleteEducation = this.deleteEducation.bind(this);
    }

    deleteEducation(e) {
        data.education.splice(Number(e.target.id), 1);
        this.setState({education: data.education});
    }

    render() {
        let careerArray = this.props.education.map((study, index) => {
            return (
                <div className="level box" key={index}>
                    <div className="level-left">
                        <div className="subtitle">{study.year}</div>
                    </div>
                    <div className="level-right">
                        <div>
                            <div
                                className="subtitle"
                                style={{ marginBottom: '10px' }}
                            >
                                {study.title}
                                {this.props.edit ? (
                                    <span
                                        id={index}
                                        className="fa fa-trash info-del"
                                        onClick={this.deleteEducation}
                                    ></span>
                                ) : null}
                            </div>
                            <div className="heading work-done">
                                {study.school}
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        return <div>{careerArray}</div>
    }
}

export default Education;