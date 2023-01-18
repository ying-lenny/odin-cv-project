import React from "react";
import data from '../data';
import Contact from "./Contact";
import ContactInput from "./ContactInput";

class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactEdit: false,
        };
        this.editContact = this.editContact.bind(this);
    }
    editContact() {
        this.setState({ contactEdit: !this.state.contactEdit})
    }
    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                    <div>
                        <span className="title">
                            {' '}
                            {data.name.first + ' '}{' '}
                        </span>
                        <span className="title">
                            {' '}
                            {data.name.last}{' '}
                        </span>
                    </div>
                    {/* Section for Contact Info */}
                    {this.state.contactEdit ? (
                        <ContactInput done={this.editContact} />
                    ) : (
                        <Contact data={data.contact} done={this.editContact} />
                    )}
                    </div>
                </div>
            </section>
        )
        
    }
}

export default Personal