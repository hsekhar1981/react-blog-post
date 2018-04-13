import React from "react";
import Link from "gatsby-link";
import get from 'lodash/get';
import fp from 'lodash/fp';
import LatestBlogPosts from './latest-blog-posts';
import LatestArticles from './latest-articles';
import LatestResources from './resource-list';

class BlogIndex extends React.Component {

  render() {
    const resourceList = get(this, 'props.data.resources.edges')
    const portfolios = fp.filter(fp.flow(
      fp.get('node.frontmatter.type'),
      fp.isEqual('res')
    ))(resourceList);
    console.log(portfolios);
    return (
      <div>
        <LatestArticles articles={this.props.data.latestArticles.edges} />
        <LatestBlogPosts posts={this.props.data.latestBlogs.edges} />
        {/* <LatestResources /> */}
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
            type
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
    
    latestBlogs: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }, 
      filter: {fileAbsolutePath: {regex: "/(latest-blogs)/.*\\.md$/"}}
      ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          frontmatter {
            type
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }

    resources: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }, 
      filter: {fileAbsolutePath: {regex: "/(resources)/.*\\.md$/"}}
      ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          frontmatter {
            type
            title
            date(formatString: "MMMM DD, YYYY")
            category
            
          }
          fields {
            slug
          }
        }
      }
    }



  }
`