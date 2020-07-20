import React, { Component } from "react";
import { connect } from "react-redux";
import Tabs from "../Helpers/Tabs";
import "../../App.css";
import {
  getContactPosts,
  getContactTodos,
  getContactAlbums,
} from "../../actions/contactActions";

class Contacts extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContactPosts(id);
    this.props.getContactTodos(id);
    this.props.getContactAlbums(id);
  }

  render() {
    const { contactPosts, contactTodos, contactAlbums } = this.props;
    return (
      <React.Fragment>
        <Tabs>
          <div label="Posts">
            {contactPosts.map((contact) => (
              <div className="card card-body mb-3" key={contact.id}>
                <h4>Post {contact.id} </h4>
                <ul className="list-group">
                  <li className="list-group-item">TITLE: {contact.title}</li>
                  <li className="list-group-item">BODY: {contact.body}</li>
                </ul>
              </div>
            ))}
          </div>
          <div label="Todos">
            {contactTodos.map((contact) => (
              <div className="card card-body mb-3" key={contact.id}>
                <h4>Todo {contact.id} </h4>
                <ul className="list-group">
                  <li className="list-group-item">TITLE: {contact.title}</li>
                  <li className="list-group-item">
                    Is It Completed? : {contact.completed ? "Yes" : "No"}
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div label="Albums">
            {contactAlbums.map((contact) => (
              <div className="card card-body mb-3" key={contact.id}>
                <h4>Albums {contact.id} </h4>
                <ul className="list-group">
                  <li className="list-group-item">TITLE: {contact.title}</li>
                </ul>
              </div>
            ))}
          </div>
        </Tabs>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contactPosts: state.myContact.contactPosts.slice(0, 2),
    contactTodos: state.myContact.contactTodos.slice(0, 2),
    contactAlbums: state.myContact.contactAlbums.slice(0, 2),
  };
};

export default connect(mapStateToProps, {
  getContactPosts,
  getContactTodos,
  getContactAlbums,
})(Contacts);
