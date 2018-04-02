import React from "react";
import Bio from '../components/Bio';
export default ({ data }) =>
<div className="middle">
<div className="container">
  <div className="col-md-9 content">
    <Bio />
  </div>
</div>
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