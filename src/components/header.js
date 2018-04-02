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
        <div>
            <header id="header">
                <div className="container">
                    {/* <div id="logo" className="pull-left">
                        <h1><a href="#body" className="scrollto">Reve<span>al</span></a></h1>
                        </div> */
                    }
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li><ListLink className="menu-active" to="/">Home</ListLink></li>
                            <li><ListLink className="menu-active" to="/">Blog</ListLink></li>
                            <li><ListLink to="/about/">Profile</ListLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
};