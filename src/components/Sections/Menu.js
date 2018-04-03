import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <div className="ban-top">
                <div className="container">
                    <div className="agileits-navi_search">
                        <form action="#" method="post">
                            <select id="agileinfo-nav_search" name="agileinfo_search" required="">
                                <option value="">All Categories</option>
                                <option value="Kitchen">Kitchen</option>
                                <option value="Household">Household</option>
                                <option value="Snacks &amp; Beverages">Snacks & Beverages</option>
                                <option value="Personal Care">Personal Care</option>
                                <option value="Gift Hampers">Gift Hampers</option>
                                <option value="Fruits &amp; Vegetables">Fruits & Vegetables</option>
                                <option value="Baby Care">Baby Care</option>
                                <option value="Soft Drinks &amp; Juices">Soft Drinks & Juices</option>
                                <option value="Frozen Food">Frozen Food</option>
                                <option value="Bread &amp; Bakery">Bread & Bakery</option>
                                <option value="Sweets">Sweets</option>
                            </select>
                        </form>
                    </div>
                    <div className="top_nav_left">
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                                        aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    </button>
                                </div>
                                <div className="collapse navbar-collapse menu--shylock" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav menu__list">
                                        <li className="active">
                                            <a className="nav-stylehead" href="index.html">Home
                                            <span className="sr-only">(current)</span>
                                            </a>
                                        </li>
                                        <li className="">
                                            <a className="nav-stylehead" href="about.html">About Us</a>
                                        </li>
                                        <li className="dropdown">
                                            <a  className="dropdown-toggle nav-stylehead" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Kitchen
                                            <span className="caret"></span>
                                            </a>
                                            <ul className="dropdown-menu multi-column columns-3">
                                                <div className="agile_inner_drop_nav_info">
                                                    <div className="col-sm-4 multi-gd-img">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                                <a >Bakery</a>
                                                            </li>
                                                            <li>
                                                                <a >Baking Supplies</a>
                                                            </li>
                                                            <li>
                                                                <a >Coffee, Tea & Beverages</a>
                                                            </li>
                                                            <li>
                                                                <a >Dried Fruits, Nuts</a>
                                                            </li>
                                                            <li>
                                                                <a >Sweets, Chocolate</a>
                                                            </li>
                                                            <li>
                                                                <a >Spices & Masalas</a>
                                                            </li>
                                                            <li>
                                                                <a >Jams, Honey & Spreads</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-4 multi-gd-img">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                                <a >Pickles</a>
                                                            </li>
                                                            <li>
                                                                <a >Pasta & Noodles</a>
                                                            </li>
                                                            <li>
                                                                <a >Rice, Flour & Pulses</a>
                                                            </li>
                                                            <li>
                                                                <a >Sauces & Cooking Pastes</a>
                                                            </li>
                                                            <li>
                                                                <a >Snack Foods</a>
                                                            </li>
                                                            <li>
                                                                <a >Oils, Vinegars</a>
                                                            </li>
                                                            <li>
                                                                <a >Meat, Poultry & Seafood</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-4 multi-gd-img">
                                                        <img src="images/nav.png" alt="" />
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a  className="dropdown-toggle nav-stylehead" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Household
                                            <span className="caret"></span>
                                            </a>
                                            <ul className="dropdown-menu multi-column columns-3">
                                                <div className="agile_inner_drop_nav_info">
                                                    <div className="col-sm-6 multi-gd-img">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                                <a >Kitchen & Dining</a>
                                                            </li>
                                                            <li>
                                                                <a >Detergents</a>
                                                            </li>
                                                            <li>
                                                                <a >Utensil Cleaners</a>
                                                            </li>
                                                            <li>
                                                                <a >Floor & Other Cleaners</a>
                                                            </li>
                                                            <li>
                                                                <a >Disposables, Garbage Bag</a>
                                                            </li>
                                                            <li>
                                                                <a >Repellents & Fresheners</a>
                                                            </li>
                                                            <li>
                                                                <a > Dishwash</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-sm-6 multi-gd-img">
                                                        <ul className="multi-column-dropdown">
                                                            <li>
                                                                <a >Pet Care</a>
                                                            </li>
                                                            <li>
                                                                <a >Cleaning Accessories</a>
                                                            </li>
                                                            <li>
                                                                <a >Pooja Needs</a>
                                                            </li>
                                                            <li>
                                                                <a >Crackers</a>
                                                            </li>
                                                            <li>
                                                                <a >Festive Decoratives</a>
                                                            </li>
                                                            <li>
                                                                <a >Plasticware</a>
                                                            </li>
                                                            <li>
                                                                <a >Home Care</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="">
                                            <a className="nav-stylehead" href="faqs.html">Faqs</a>
                                        </li>
                                        <li className="dropdown">
                                            <a className="nav-stylehead dropdown-toggle" data-toggle="dropdown">Pages
                                            <b className="caret"></b>
                                            </a>
                                            <ul className="dropdown-menu agile_short_dropdown">
                                                <li>
                                                    <a href="icons.html">Web Icons</a>
                                                </li>
                                                <li>
                                                    <a href="typography.html">Typography</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="">
                                            <a className="nav-stylehead" href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;