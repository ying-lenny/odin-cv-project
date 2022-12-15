import React, { Component } from "react";
import Summary from "./Summary";
import data from "../data";

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumEdit: false,
        };
        this.editSum = this.editSum.bind(this); 
    }
    editSum() {
        this.setState({ sumEdit: !this.state.sumEdit });
    }

    render() {
        return (
            <article>
                <div>
                    Summary:
                </div>
                <div className="content">
                    <Summary summary={data.summary} />
                </div>
            </article>
        )
    }
}

export default Body