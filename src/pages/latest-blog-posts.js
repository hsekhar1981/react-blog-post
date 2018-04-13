import React from "react";
import Link from "gatsby-link";
import get from 'lodash/get';

class LatestBlogPosts extends React.Component {
    render() {
        const latestPosts = this.props.posts;
        return (
            <div>
                <div className="sub-title">
                    <span>Blog Posts</span>
                </div>
                <section className="blog">
                    <div className="container">
                        <div className="row">
                            {latestPosts.map(({ node }) => {
                                const latestarticle = get(node, 'frontmatter.title') || node.fields.slug
                                return (
                                    <div className="col-sm-6 col-md-3" key={node.fields.slug}>
                                        <div className="blog-block">
                                            <div className="blog-content">
                                                <h3><Link to={node.fields.slug}>
                                                    {latestarticle}
                                                </Link></h3>
                                                <div className="meta-tags">
                                                    {/* <span className="date"><i className="lnr lnr-calendar-full"></i>on Mar 23, 2017</span>
                                                    <span className="comments"><a href="#"><i className="lnr lnr-bubble"></i> 24 Comments</a></span> */}
                                                </div>
                                                <Link to={node.fields.slug}>
                                                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />  </Link>
                                                <Link to={node.fields.slug} className="btn btn-common">
                                                    Read More </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <div className="mb-40"></div>
            </div>
        )
    }
}

export default LatestBlogPosts;

