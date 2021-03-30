import * as React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../components/useSiteMetaData.js";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

//css
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";

//components
import Navibar from "../components/navibar/navibar";
import Header from "../components/header/header";
import About from "../components/about/about";
import About2 from "../components/about2/about2";
import Speakers from "../components/speakers/speakers";
import Partner from "../components/partner/partner";
import Photos from "../components/photos/photos";

const IndexPage = ({ data }) => {
    const { title, description, author, keywords } = useSiteMetadata();
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="author" content={author} />
                <meta name="keywords" content={keywords} />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
            </Helmet>
            <Navibar />
            <Header />
            <About />
            <section id="facts" className="section bg-image-1 facts text-center">
                <div className="container">
                    <div className="row">
                    <div className="col-md-3">
                        <ion-icon size="large" name="calendar-outline" />
                        <h3>2021<br />May 14-17</h3>
                    </div>
                    <div className="col-md-3">
                        <ion-icon size="large" name="location-outline" />
                        {/* <h3>California<br>IIT Mandi</h3> */}
                    </div>
                    <div className="col-md-3">
                        <ion-icon size="large" name="pricetags-outline" />
                        {/* <h3>150<br>Tickets</h3> */}
                    </div>
                    <div className="col-md-3">
                        <ion-icon size="large" name="mic-outline" />
                        <h3>06<br />Speakers</h3>
                    </div>
                    </div>
                    {/* row */}
                </div>
                {/* container */}
                </section>
            <Speakers />
            <About2 />
            <section id="schedule" className="section schedule">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <h3 className="section-title">Event Schedule</h3>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="schedule-box">
                        <div className="time">
                            <time dateTime="09:00">09:00 am</time>-
                            <time dateTime="22:00">10:00 am</time>
                        </div>
                        <h3>Welcome and intro</h3>
                        <p>Mustafizur Khan, SD Asia</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="schedule-box">
                        <div className="time">
                            <time dateTime="10:00">10:00 am</time>-
                            <time dateTime="22:00">10:00 am</time>
                        </div>
                        <h3>Tips and share</h3>
                        <p>Mustafizur Khan, SD Asia</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="schedule-box">
                        <div className="time">
                            <time dateTime="10:00">10:00 am</time>-
                            <time dateTime="22:00">10:00 am</time>
                        </div>
                        <h3>View from the top</h3>
                        <p>Mustafizur Khan, SD Asia</p>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
            <Partner />
            <Photos />
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <p className="site-info"> Developed by AstraX Team
                        </p>
                        <ul className="social-block">
                        <li><a href=""><ion-icon size="large" name="logo-facebook" /></a></li>
                        <li><a href=""><ion-icon size="large" name="logo-twitter" /></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
            { /* <div>
            <section id="speakers" className="section speakers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="section-title">Speakers</h3>
                        </div>
                    </div>
                    <div className="row">
                        {data.allFile.edges[0].node.childrenSpeakersJson.map(
                            (i) => {
                                return (
                                    <div className="col-md-4">
                                        <div className="speaker">
                                            <figure>
                                                <GatsbyImage
                                                    image={getImage(i.image)}
                                                    alt={`Speaker - ${i.name}`}
                                                    className="img-responsive center-block"
                                                />
                                            </figure>

                                            <h4>{i.name}</h4>

                                            <p>{i.title}</p>
                                            <ul className="social-block">
                                                <li>
                                                    <a href="">
                                                        <i className="ion-social-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="ion-social-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="ion-social-linkedin-outline"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="">
                                                        <i className="ion-social-googleplus"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </section>

            <section id="schedule" className="section schedule">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="section-title">Event Schedule</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="schedule-box">
                                <div className="time">
                                    <time datetime="09:00">09:00 am</time> -{" "}
                                    <time datetime="22:00">10:00 am</time>
                                </div>
                                <h3>Welcome and intro</h3>
                                <p>Mustafizur Khan, SD Asia</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="schedule-box">
                                <div className="time">
                                    <time datetime="10:00">10:00 am</time> -{" "}
                                    <time datetime="22:00">10:00 am</time>
                                </div>
                                <h3>Tips and share</h3>
                                <p>Mustafizur Khan, SD Asia</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="schedule-box">
                                <div className="time">
                                    <time datetime="10:00">10:00 am</time> -{" "}
                                    <time datetime="22:00">10:00 am</time>
                                </div>
                                <h3>View from the top</h3>
                                <p>Mustafizur Khan, SD Asia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="partner" className="section partner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="section-title">Event Partner</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3">
                            <a className="partner-box partner-box-1"></a>
                        </div>
                        <div className="col-sm-3">
                            <a className="partner-box partner-box-2"></a>
                        </div>
                        <div className="col-sm-3">
                            <a className="partner-box partner-box-3"></a>
                        </div>
                        <div className="col-sm-3">
                            <a className="partner-box partner-box-4"></a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-3">
                            <a className="partner-box partner-box-5"></a>
                        </div>
                        <div className="col-sm-3">
                            <a className="partner-box partner-box-6"></a>
                        </div>
                        <div className="col-sm-3">
                            <a className="partner-box partner-box-7"></a>
                        </div>
                        <div className="col-sm-3">
                            <a className="partner-box partner-box-8"></a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="photos" className="section photos">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="section-title">Photos</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="grid">
                                <li className="grid-item grid-item-sm-6">
                                    <img
                                        alt=""
                                        className="img-responsive center-block"
                                        src="../images/photos/photos-1.jpg"
                                    />
                                </li>

                                <li className="grid-item grid-item-sm-3">
                                    <img
                                        alt=""
                                        className="img-responsive center-block"
                                        src="../images/photos/photos-2.jpg"
                                    />
                                </li>

                                <li className="grid-item grid-item-sm-3">
                                    <img
                                        alt=""
                                        className="img-responsive center-block"
                                        src="../images/photos/photos-3.jpg"
                                    />
                                </li>

                                <li className="grid-item grid-item-sm-3">
                                    <img
                                        alt=""
                                        className="img-responsive center-block"
                                        src="../images/photos/photos-5.jpg"
                                    />
                                </li>

                                <li className="grid-item grid-item-sm-3">
                                    <img
                                        alt=""
                                        className="img-responsive center-block"
                                        src="../images/photos/photos-6.jpg"
                                    />
                                </li>

                                <li className="grid-item grid-item-sm-3">
                                    <img
                                        alt=""
                                        className="img-responsive center-block"
                                        src="../images/photos/photos-7.jpg"
                                    />
                                </li>

                                <li className="grid-item grid-item-sm-3">
                                    <img
                                        alt=""
                                        className="img-responsive center-block"
                                        src="../images/photos/photos-8.jpg"
                                    />
                                </li>

                                <li className="grid-item grid-item-sm-3">
                                    <img
                                        alt=""
                                        className="img-responsive center-block"
                                        src="../images/photos/photos-2.jpg"
                                    />
                                </li>

                                <li className="grid-item grid-item-sm-3">
                                    <img
                                        alt=""
                                        className="img-responsive center-block"
                                        src="../images/photos/photos-3.jpg"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="location" className="section location">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <h3 className="section-title">Event Location</h3>
                            <address>
                                <p>
                                    Eardenia
                                    <br /> The Grand Hall
                                    <br /> House # 08, Road #52, Street
                                    <br /> Phone: +1159t3764
                                    <br /> Email: example@mail.com
                                </p>
                            </address>
                        </div>
                        <div className="col-sm-9">
                            <iframe
                                title="Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96706.50013548559!2d-78.9870674333782!3d40.76030630398601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sbd!4v1436299406518"
                                width="100%"
                                height="450"
                                frameborder="0"
                                style={{ border: 0 }}
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="site-info">
                                Designed and <br /> Developed by{" "}
                                <a href="http://technextit.com">
                                    Technext Limited
                                </a>
                            </p>
                            <ul className="social-block">
                                <li>
                                    <a href="">
                                        <i className="ion-social-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="ion-social-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="ion-social-linkedin-outline"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="ion-social-googleplus"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div> */}
        </>
    );
};

export default IndexPage;

export const query = graphql`
    {
        allFile(filter: { sourceInstanceName: { eq: "speakers" } }) {
            edges {
                node {
                    childrenSpeakersJson {
                        name
                        title
                        image {
                            childrenImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                }
            }
        }
    }
`;
