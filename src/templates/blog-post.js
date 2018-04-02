import React from "react";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
     <div className="middle">
      <div className="container">
        <div className="col-md-9 content">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;