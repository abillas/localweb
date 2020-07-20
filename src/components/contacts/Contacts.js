import React, { Component } from "react";
import { connect } from "react-redux";

import Contact from "./Contact";
import { getContacts } from "../../actions/contactActions";
import LogIn from "./LogIn";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts, user } = this.props;
    // console.log(user, "ddd");
    return user ? (
      <LogIn />
    ) : (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Contacts</span> List
        </h1>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: state.myContact.contacts,
    user: state.myContact.user,
  };
};

export default connect(mapStateToProps, { getContacts })(Contacts);
