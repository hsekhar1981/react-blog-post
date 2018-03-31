import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";
import Example from '../components/Header/index';


import { rhythm } from "../utils/typography";

const linkStyle = css({ float: `right` })

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children, data }) =>
      
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
     
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink style={{color: 'white', textDecoration: 'none', fontSize: 'x-large'}} to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
      </ul>

     </header>
    
    {children()}
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