import React, { Component } from "react";
import Summary from "./Summary";
import SummaryInput from "./SummaryInput";
import Skills from "./Skills";
import SkillsInput from "./SkillsInput";
import data from "../data";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumEdit: false,
            skillEdit: false
        };
        this.editSum = this.editSum.bind(this); 
        this.editSkill = this.editSkill.bind(this);
    }
    editSum() {
        this.setState({ sumEdit: !this.state.sumEdit });
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