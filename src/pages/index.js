import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { rhythm } from "../utils/typography";

class BlogIndex extends React.Component {

  render() {

    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <main id="main">
          <section id="blogs">
            <div className="container">
              <div className="section-header">
                <h2>Blog</h2>
                <p></p>
              </div>
              <div className="row">
                {posts.map(({ node }) => {
                  const title = get(node, 'frontmatter.title') || node.fields.slug
                  return (
                    <div className="col-lg-6" key={node.fields.slug}>
                      <div className="box wow fadeInLeft">
                        <div className="icon"><i className="fa fa-bar-chart"></i></div>
                        <h4 className="title">
                          <Link to={node.fields.slug}>
                            {title}
                          </Link>
                        </h4>
                        <p className="description"
                          dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default BlogIndex;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`