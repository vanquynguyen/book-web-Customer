import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu'

const Header = () => {
    return (
        <div>
           <div className="header-bot">
                <div className="header-bot_inner_wthreeinfo_header_mid">
                    <div className="col-md-4 logo_agile">
                        <h1>
                            <Link to="/">
                            <span>U</span>TT
                            <span>B</span>ook
                            <img src="images/logo2.png" alt="" />
                            </Link>
                        </h1>
                    </div>
                    <div className="col-md-8 header">
                        <ul>
                            <li>
                                <a className="play-icon popup-with-zoom-anim" href="#small-dialog1">
                                <span className="fa fa-map-marker" aria-hidden="true"></span> Shop Locator</a>
                            </li>
                            <li>
                                <a  data-toggle="modal" data-target="#myModal1">
                                <span className="fa fa-truck" aria-hidden="true"></span>Track Order</a>
                            </li>
                            <li>
                                <span className="fa fa-phone" aria-hidden="true"></span> 001 234 5678
                            </li>
                            <li>
                                <a  data-toggle="modal" data-target="#myModal1">
                                <span className="fa fa-unlock-alt" aria-hidden="true"></span> Sign In </a>
                            </li>
                            <li>
                                <a  data-toggle="modal" data-target="#myModal2">
                                <span className="fa fa-pencil-square-o" aria-hidden="true"></span> Sign Up </a>
                            </li>
                        </ul>
                        <div className="agileits_search">
                            <form action="#" method="post">
                                <input name="Search" type="search" placeholder="How can we help you today?" required="" />
                                <button type="submit" className="btn btn-default" aria-label="Left Align">
                                <span className="fa fa-search" aria-hidden="true"> </span>
                                </button>
                            </form>
                        </div>
                        <div className="top_nav_right">
                            <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                                <form action="#" method="post" className="last">
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="display" value="1" />
                                    <button className="w3view-cart" type="submit" name="submit" value="">
                                    <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            <Menu />
        </div>
    );
};

export default Header;