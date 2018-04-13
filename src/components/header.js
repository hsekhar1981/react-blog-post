import React from 'react';
import Link from "gatsby-link";

const ListLink = props =>
  <li>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default () => {
  return (
    // <div>
    //     <header id="header">
    //         <div className="container">
    //             {/* <div id="logo" className="pull-left">
    //                 <h1><a href="#body" className="scrollto">Reve<span>al</span></a></h1>
    //                 </div> */
    //             }
    //             <nav id="nav-menu-container">
    //                 <ul className="nav-menu">
    //                     <li><ListLink className="menu-active" to="/">Home</ListLink></li>
    //                     <li><ListLink className="menu-active" to="/">Blog</ListLink></li>
    //                     <li><ListLink to="/about/">Profile</ListLink></li>
    //                 </ul>
    //             </nav>
    //         </div>
    //     </header>
    // </div>

    <div>
      <nav className="navbar navbar-toggleable-sm navbar-light bg-default">
        <div className="container">
          <a className="navbar-brand" href="index.html"><img src="img/logo.png" alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar5" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbar5">
            <ul className="navbar-nav">
              <li className="nav-item">
              <ListLink className="menu-active" to="/"> Home </ListLink>
              </li>
              
              {/* <li className="nav-item">
                <a className="nav-link" href="index.html">Articles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index.html">Resources</a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="/about/">About Me</a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
};