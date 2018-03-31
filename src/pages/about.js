import React from "react";
import Bio from '../components/Bio';
export default ({ data }) =>
  <div>
    <Bio />
  </div>

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`