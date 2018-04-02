import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import Footer from '../components/footer';
import SocialContact from '../components/header-social-contact';
import { rhythm } from "../utils/typography";
import Header from '../components/header'

import './includes/lib/bootstrap/css/bootstrap.min.css';
// import './includes/lib/ionicons/css/ionicons.min.css';
// import './includes/lib/animate/animate.min.css';
// import './includes/lib/magnific-popup/magnific-popup.css';
// import './includes/lib/owlcarousel/assets/owl.carousel.min.css';
import './includes/lib/font-awesome/css/font-awesome.min.css';

import './includes/css/style.css';

const ListLink = props =>
  <li>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children, data }) =>
  <div>
    <SocialContact />
    <Header />
    {children()}
    <Footer />
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