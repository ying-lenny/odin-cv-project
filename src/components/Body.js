import React, { Component } from "react";
import Summary from "./Summary";
import SummaryInput from "./SummaryInput";
import Career from "./Career";
import CareerInput from "./CareerInput";
import Education from "./Education";
import EducationInput from "./EducationInput";
import Skills from "./Skills";
import SkillsInput from "./SkillsInput";
import data from "../data";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumEdit: false,
            careerEdit: false,
            educationEdit: false,
            skillEdit: false,
        };
        this.editSum = this.editSum.bind(this); 
        this.editCareer = this.editCareer.bind(this);
        this.editEducation = this.editEducation.bind(this);
        this.editSkill = this.editSkill.bind(this);
    }
    editSum() {
        this.setState({ sumEdit: !this.state.sumEdit });
    }
    editCareer() {
        this.setState({ careerEdit: !this.state.careerEdit });
    }
    editEducation() {
        this.setState({ educationEdit: !this.state.educationEdit });
    }
    editSkill() {
        this.setState({ skillEdit: !this.state.sumEdit });
    }

    render() {
        return (
            <div className="tile is-ancestor is-vertical">
                <div className="tile is-parent">
                    <article className="tile is-child notification box">
                        {/* Summary Section */}
                        <div className="subtitle per-heading">
                            Summary:
                            <i
                                className="fa fa-pencil per-edit"
                                aria-hidden="true"
                                onClick={this.editSum}
                            ></i>
                        </div>
                        <div className="content">
                            {this.state.sumEdit ? (
                                <SummaryInput done={this.editSum} />
                            ) : (
                                <Summary summary={data.summary} />
                            )}
                        </div>
                    </article>
                </div>
                {/* Career section */}
                <div className="tile is-parent">
                    <article className="tile is-child notification box">
                        <div className="subtitle per-heading">
                            Career:
                            <i
                                className="fa fa-pencil per-edit"
                                aria-hidden="true"
                                onClick={this.editCareer}
                            ></i>
                        </div>
                        <div className="content">
                            {this.state.careerEdit ? (
                                <CareerInput done={this.editCareer} />
                            ) : null}
                            <Career
                                career={data.career}
                                edit={this.state.careerEdit}
                            />
                        </div>
                    </article>
                </div>
                {/* Education Section */}
                <div className="tile is-parent">
                <article className="tile is-child notification box">
                        <div className="subtitle per-heading">
                            Education:
                            <i
                                className="fa fa-pencil per-edit"
                                aria-hidden="true"
                                onClick={this.editEducation}
                            ></i>
                        </div>
                        <div className="content">
                            {this.state.eduEdit ? (
                                <EducationInput done={this.editEducation} />
                            ) : null}
                            <Education
                                edu={data.education}
                                edit={this.state.editEducation}
                            />
                        </div>
                    </article>
                </div>
                {/* Skills section */}
                <div className="tile is-parent">
                    <article className="tile is-child notification box">
                        <div className="subtitle per-heading">
                            Skills:
                            <i
                                className="fa fa-pencil per-edit"
                                aria-hidden="true"
                                onClick={this.editSkill}
                            ></i>
                        </div>
                        <div className="content">
                            {this.state.skillEdit ? (
                                <SkillsInput done={this.editSkill} />
                            ) : null}
                            <Skills
                                skills={data.skills}
                                edit={this.state.skillEdit}
                            />
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}

export default Body