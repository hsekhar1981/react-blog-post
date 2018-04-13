import React from 'react';

export default () => {
    return (
        // <div>
        //     <section id="topbar" className="d-none d-lg-block">
        //         <div className="container clearfix">
        //             <div className="contact-info float-left">
        //                 <i className="fa fa-envelope-o"></i> <a href="mailto:hsekhar1981@gmail.com">hsekhar1981@gmail.com</a>
        //                 <i className="fa fa-phone"></i> +91 8658 633 201
        // </div>
        //             <div className="social-links float-right">
        //                 <a href="https://twitter.com/hsekhar_biswal" className="twitter"><i className="fa fa-twitter"></i></a>
        //                 <a href="https://www.facebook.com/himanshusekhar.biswal.3" className="facebook"><i className="fa fa-facebook"></i></a>
        //               </div>
        //         </div>
        //     </section>
        // </div>
        <div className="top-menu">
        <p> <span className="left">
            <a href="#"><i className="fa fa-map-marker"></i>Bhubaneswar, India</a>
            <a href="#"><i className="fa fa-mobile-phone"></i>+91 86586 33201</a>
            <a href="#"><i className="fa fa-envelope"></i>himanshu.biswal@gmail.com</a>
            </span> <span className="right hidden-sm-down">
            <a href="https://www.facebook.com/himanshusekhar.biswal.3"><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com/hsekhar_biswal"><i className="fa fa-twitter"></i></a>
            <a href="https://twitter.com/hsekhar_biswal"><i className="fa fa-google-plus"></i></a>
            <a href="https://twitter.com/hsekhar_biswal"><i className="fa fa-pinterest"></i></a>
            <a href="https://twitter.com/hsekhar_biswal"><i className="fa fa-linkedin"></i></a>
            <a href="https://twitter.com/hsekhar_biswal"><i className="fa fa-dribbble"></i></a>
            </span> </p>
      </div> 
    )
};