import React from "react";
import g from "glamorous";
import Link from "gatsby-link";
import get from 'lodash/get';
import Helmet from 'react-helmet';
import { rhythm } from "../utils/typography";

class LatestArticles extends React.Component {

  render() {
    const latestArticles = this.props.articles;
    return (
      <div>
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

export default LatestArticles;
