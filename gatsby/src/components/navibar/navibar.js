import * as React from "react";
import Logo from "../../images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Navibar = () => (
    <nav id="site-nav" className="navbar navbar-fixed-top navbar-custom navbar-expand-md">
        <div className="container">
            <div className="navbar-header">
                <div className="site-branding">
                    <a className="logo" href="index.html">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>
                <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target="#navbar-items"
                    aria-expanded="false"
                    aria-controls="navbarScroll"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbar-items">
                <ul className="nav navbar-nav ml-auto navbar-nav-scroll">
                    <li className="nav-item active">
                        <a data-scroll="" href="#about" class="nav-link">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a data-scroll="" href="#speakers" class="nav-link">
                            Speakers
                        </a>
                    </li>
                    <li className="nav-item">
                        <a data-scroll="" href="#schedule" class="nav-link">
                            Schedule
                        </a>
                    </li>
                    <li className="nav-item">
                        <a data-scroll="" href="#partner" class="nav-link">
                            Partner
                        </a>
                    </li>
                    <li className="nav-item">
                        <a data-scroll href="#faq" class="nav-link">
                            FAQ
                        </a>
                    </li>
                    <li className="nav-item">
                        <a data-scroll href="#photos" class="nav-link">
                            Photos
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navibar;
