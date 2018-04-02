import React from 'react';

export default () => {
    return (
        <div>
            <section id="topbar" className="d-none d-lg-block">
                <div className="container clearfix">
                    <div className="contact-info float-left">
                        <i className="fa fa-envelope-o"></i> <a href="mailto:hsekhar1981@gmail.com">hsekhar1981@gmail.com</a>
                        <i className="fa fa-phone"></i> +91 8658 633 201
        </div>
                    <div className="social-links float-right">
                        <a href="https://twitter.com/hsekhar_biswal" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="https://www.facebook.com/himanshusekhar.biswal.3" className="facebook"><i className="fa fa-facebook"></i></a>
                        {/* <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
                        <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a> */}
                    </div>
                </div>
            </section>
        </div>
    )
};