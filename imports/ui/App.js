import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { rename } from "fs";
import ResolutionForm from "./ResolutionForm";
import Resolution from "./Resolution";

const App = ({ loading, resolutions, refetch }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <ResolutionForm />
      <ul>
        {resolutions.map(resolution => <Resolution refetch={refetch} key={resolution._id} resolution={resolution}/>)}
      </ul>
    </div>
  );
};

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
    }
  }
`;

export default graphql(resolutionsQuery,{
    props: ({data}) => ({...data})
})(App);
