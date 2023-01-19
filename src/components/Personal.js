import React from "react";
import data from '../data';
import NameInput from "./NameInput";
import Contact from "./Contact";
import ContactInput from "./ContactInput";

class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameEdit: false,
            contactEdit: false,
        };
        this.editName = this.editName.bind(this);
        this.editContact = this.editContact.bind(this);
    }
    editName() {
        this.setState({ nameEdit: !this.state.nameEdit});
    }
    editContact() {
        this.setState({ contactEdit: !this.state.contactEdit});
    }
    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        {/* Section for Name */}
                        {this.state.nameEdit ? (
                            <NameInput done={this.editName} />
                        ) : (
                            <div>
                                <span className="title">
                                    {' '}
                                    {data.name.first + ' '}{' '}
                                </span>
                                <span className="title">
                                    {' '}
                                    {data.name.last}{' '}
                                </span>
                                <i
                                    className="fa fa-pencil"
                                    aria-hidden="true"
                                    onClick={this.editName}
                                ></i>
                            </div>
                        )}
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