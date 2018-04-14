import React from "react";
import Link from "gatsby-link";
import get from 'lodash/get';
import fp from 'lodash/fp';
//import LatestBlogPosts from './latest-blog-posts';
//import LatestArticles from './latest-articles';

class BlogIndex extends React.Component {

  render() {
   const latestArticles =  this.props.data.latestArticles.edges;
    return (
      <div>
        {/* <LatestArticles articles={this.props.data.latestArticles.edges} />
        <LatestBlogPosts posts={this.props.data.latestBlogs.edges} /> */}

        <div className="sub-title">
          <span>Articles</span>
        </div>
        <div className="row">
          {latestArticles.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div className="col-md-4 col-sm-6" key={node.fields.slug}>
                <div className="service-box">
                  <div className="service-icon">
                    <i className="fa fa-cogs"></i>
                  </div>
                  <div className="service-content">
                    <h4>
                      <Link to={node.fields.slug}>
                        {title}
                      </Link>
                    </h4>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mb-40"></div>
          
          

      </div>
    )
  }
}

export default BlogIndex;

export const query = graphql`
  query IndexQuery {

    latestArticles: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}, 
      filter: {fileAbsolutePath: {regex: "/(latest-articles)/.*\\.md$/"}}
      ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
    
        
  }
`