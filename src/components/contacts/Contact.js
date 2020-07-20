import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { deleteContact } from "../../actions/contactActions";

class Contact extends Component {
  state = { toggleInfo: true };

  onDeleteClick = (id) => {
    this.props.deleteContact(id);
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { toggleInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={() =>
              this.setState({
                toggleInfo: !this.state.toggleInfo,
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`contact/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "orange",
                marginRight: "1rem",
              }}
            />
          </Link>
          <Link to={`contact/${id}`}>
            <i
              className="fa fa-bars"
              style={{
                cursor: "pointer",
                float: "right",
                color: "red",
                marginRight: "1rem",
              }}
            />
          </Link>
        </h4>
        {toggleInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default connect(null, { deleteContact })(Contact);
