import React, { Component } from "react";
import data from "../data";

class Skills extends Component {
    constructor(props) {
        super(props);
            this.state = {
                skills: this.props.skills,
            };
            this.delSkill = this.delSkill.bind(this);
        }

        delSkill(e) {
            data.skills.splice(Number(e.target.id), 1);
            this.setState({skills: data.skills });
        }
        loadStars(num) {
            let stars = [...Array(5).keys()];
            let starArray = stars.map((n, index) => {
                if (n < num)
                    return <span key={index} className="fa fa-star fa-lg"></span>;
                else 
                    return <span key={index} className="fa fa-star-o fa-lg"></span>
            });
            return <div>{starArray}</div>;
        }
        render() {
            const starArray = this.props.skills.map((skill, index) => {
                return (
                    <div className="level" key={index}>
                        <div className="level-item">
                            <div>
                                <div className="subtitle">{skill.name}</div>
                            </div>
                        </div>
                        <div className="level-item">
                            {this.loadStars(skill.rating)}
                        </div>
                        {this.props.edit ? (
                            <span
                                id={index}
                                className="fa fa-trash info-del"
                                onClick={this.delSkill}
                            ></span>
                        ) : null}
                    </div>
                );
            });
            return <div className="container">{starArray}</div>
        }
    }

    export default Skills;