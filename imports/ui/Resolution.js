import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const deleteResolution = gql`
  mutation deleteResolution($id: String!) {
    deleteResolution(id: $id) {
      
    }
  }
`;

class Resolution extends Component {
  handleSubmit = () => {
      console.log("Handling Deletion...");
    this.props
      .deleteResolution({
        variables: {
          id: this.props.resolution._id
        }
      })
      .then(({ data }) => {
        this.props.refetch();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <li key={this.props.resolution._id}>
        {this.props.resolution.name}
        <button onClick={this.handleSubmit}>X</button>
      </li>
    );
  }
}

export default graphql(deleteResolution, {
  name: "deleteResolution"
})(Resolution);
