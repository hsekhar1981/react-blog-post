import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { rhythm } from "../utils/typography";

class ResourceList extends React.Component {

    render() {

        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allMarkdownRemark.edges')

        return (
            
            <div>
                 <div className="sub-title">
              <span>Videos</span>
            </div>

            <div className="list-wrap">
			 
			 <div className="row row-spacer">
              <div className="col-md-3 col-sm-6 col-xs-12">
                <h3 className="list-title">Java</h3>
                <ul className="list-style arrow-list arrow-list-two pl-0">
                  <li>
                    <i className="fa fa-angle-double-right grey" aria-hidden="true"></i> Lorem ipsum dolor sit amet,
                  </li>
                  <li>
                    <i className="fa fa-angle-double-right grey" aria-hidden="true"></i> Consectetur adipiscing elit
                  </li>
                  <li>
                    <i className="fa fa-angle-double-right grey" aria-hidden="true"></i> Suspendisse viverra mauris eget
                  </li>
                  <li>
                    <i className="fa fa-angle-double-right grey" aria-hidden="true"></i> Tortor imperdiet vehicula.
                  </li>
                  <li>
                    <i className="fa fa-angle-double-right grey" aria-hidden="true"></i> Proin egestas diam ac mauris
                  </li>
                  <li>
                    <i className="fa fa-angle-double-right grey" aria-hidden="true"></i> Quisque nec nisi tortor
                  </li>
                </ul>
              </div>
              
             
            </div>
			 
			 </div>

                <div className="mb-40"></div>

            </div>
        )
    }
}

export default ResourceList;

export const query = graphql`
  query ResourceListQuery {
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