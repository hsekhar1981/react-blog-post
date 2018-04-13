import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import Footer from '../components/footer';
import SocialContact from '../components/header-social-contact';
import { rhythm } from "../utils/typography";
import Header from '../components/header'

import './includes/css/bootstrap.min.css';
import './includes/css/main.css';
import './includes/css/animate.css';
import './includes/css/owl.carousel.css';
import './includes/css/owl.theme.css';
import './includes/css/responsive.css';
import './includes/css/font-awesome.min.css';

const ListLink = props =>
  <li>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children, data }) =>
  <div className="wrapper">
    <div id="content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SocialContact />
            <Header />
          </div>
        </div>
        <div className="mb-40"></div>
        <div className="row">
          <div className="col-md-12">
            {children()}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`