import React from "react";
import data from '../data';
import NameInput from "./NameInput";
import Contact from "./Contact";
import ContactInput from "./ContactInput";
import Social from "./Social";
import SocialInput from "./SocialInput";
import Interests from "./Interests";
import InterestInput from "./InterestInput";

class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameEdit: false,
            contactEdit: false,
            socialEdit: false,
            socData: data.social,
            interestEdit: false,
        };
        this.editName = this.editName.bind(this);
        this.editContact = this.editContact.bind(this);
        this.editSocial = this.editSocial.bind(this);
        this.editInterest = this.editInterest.bind(this);
    }
    editName() {
        this.setState({ nameEdit: !this.state.nameEdit });
    }
    editContact() {
        this.setState({ contactEdit: !this.state.contactEdit });
    }
    editSocial() {
        this.setState({ socialEdit: !this.state.socialEdit });
    }
    editInterest() {
        this.setState({ interestEdit: !this.state.interestEdit });
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
                    </div>
                    {/* Section for Contact Info */}
                    {this.state.contactEdit ? (
                            <ContactInput done={this.editContact} />
                    ) : (
                        <Contact data={data.contact} done={this.editContact} />
                    )}
                    {/* Section for Social Media Info */}
                    {data.social && (
                        <div className="container has-text-black">
                            <div className="is-size-5 has-text-weight-bold per-heading">
                                Social Media
                                <i
                                    className="fa fa-pencil per-edit"
                                    aria-hidden="true"
                                    onClick={this.editSocial}
                                ></i>
                            </div>
                            {this.state.socialEdit ? (
                                <SocialInput done={this.editSocial} />
                            ) : null}
                            <Social
                                data={data.social}
                                edit={this.state.socialEdit}
                            />
                        </div>
                    )}
                    {/* Section for Interests */}
                    {data.interests && (
                        <div className="container has-text-black">
                            <div className="is-size-5 has-text-weight-bold per-heading">
                                Interests
                                <i
                                    className="fa fa-pencil per-edit"
                                    aria-hidden="true"
                                    onClick={this.editInterest}
                                ></i>
                            </div>
                            {this.state.interestEdit ? (
                                <InterestInput done={this.editInterest} />
                            ) : null}
                            <Interests
                                data={data.interests}
                                edit={this.state.interestEdit}
                            />
                        </div>
                    )}
                </div>
            </section>
        )
    }
}

export default Personal