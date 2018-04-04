import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer-top">
                <div className="container-fluid">
                    <div className="col-xs-8 agile-leftmk">
                        <h2>Get your Groceries delivered from local stores</h2>
                        <p>Free Delivery on your first order!</p>
                        <form action="#" method="post">
                            <input type="email" placeholder="E-mail" name="email" required="" />
                            <input type="submit" value="Subscribe" />
                        </form>
                        <div className="newsform-w3l">
                            <span className="fa fa-envelope-o" aria-hidden="true"></span>
                        </div>
                    </div>
                    <div className="col-xs-4 w3l-rightmk">
                        <img src="images/tab3.png" alt=" " />
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <p className="footer-main">
                        <span>"Grocery Shoppy"</span> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magni dolores eos qui ratione voluptatem sequi nesciunt.Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.
                    </p>
                    <div className="w3l-grids-footer">
                        <div className="col-xs-4 offer-footer">
                            <div className="col-xs-4 icon-fot">
                                <span className="fa fa-map-marker" aria-hidden="true"></span>
                            </div>
                            <div className="col-xs-8 text-form-footer">
                                <h3>Track Your Order</h3>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="col-xs-4 offer-footer">
                            <div className="col-xs-4 icon-fot">
                                <span className="fa fa-refresh" aria-hidden="true"></span>
                            </div>
                            <div className="col-xs-8 text-form-footer">
                                <h3>Free & Easy Returns</h3>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="col-xs-4 offer-footer">
                            <div className="col-xs-4 icon-fot">
                                <span className="fa fa-times" aria-hidden="true"></span>
                            </div>
                            <div className="col-xs-8 text-form-footer">
                                <h3>Online cancellation </h3>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="footer-info w3-agileits-info">
                        <div className="col-sm-5 address-right">
                            <div className="col-xs-6 footer-grids">
                                <h3>Categories</h3>
                                <ul>
                                    <li>
                                        <a >Grocery</a>
                                    </li>
                                    <li>
                                        <a >Fruits</a>
                                    </li>
                                    <li>
                                        <a >Soft Drinks</a>
                                    </li>
                                    <li>
                                        <a >Dishwashers</a>
                                    </li>
                                    <li>
                                        <a >Biscuits & Cookies</a>
                                    </li>
                                    <li>
                                        <a >Baby Diapers</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-6 footer-grids agile-secomk">
                                <ul>
                                    <li>
                                        <a >Snacks & Beverages</a>
                                    </li>
                                    <li>
                                        <a >Bread & Bakery</a>
                                    </li>
                                    <li>
                                        <a >Sweets</a>
                                    </li>
                                    <li>
                                        <a >Chocolates & Biscuits</a>
                                    </li>
                                    <li>
                                        <a >Personal Care</a>
                                    </li>
                                    <li>
                                        <a >Dried Fruits & Nuts</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="col-sm-5 address-right">
                            <div className="col-xs-6 footer-grids">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <a href="about.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="help.html">Help</a>
                                    </li>
                                    <li>
                                        <a href="faqs.html">Faqs</a>
                                    </li>
                                    <li>
                                        <a href="terms.html">Terms of use</a>
                                    </li>
                                    <li>
                                        <a href="privacy.html">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xs-6 footer-grids">
                                <h3>Get in Touch</h3>
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker"></i> 123 Sebastian, USA.
                                    </li>
                                    <li>
                                        <i className="fa fa-mobile"></i> 333 222 3333 
                                    </li>
                                    <li>
                                        <i className="fa fa-phone"></i> +222 11 4444 
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope-o"></i>
                                        <a href="mailto:example@mail.com"> mail@example.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-2 footer-grids  w3l-socialmk">
                            <h3>Follow Us on</h3>
                            <div className="social">
                                <ul>
                                    <li>
                                        <a className="icon fb" >
                                        <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="icon tw" >
                                        <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="icon gp" >
                                        <i className="fa fa-google-plus"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="agileits_app-devices">
                                <h5>Download the App</h5>
                                <a >
                                <img src="images/1.png" alt="" />
                                </a>
                                <a >
                                <img src="images/2.png" alt="" />
                                </a>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="agile-sometext">
                        <div className="sub-some">
                            <h5>Online Grocery Shopping</h5>
                            <p>Order online. All your favourite products from the low price online supermarket for grocery home delivery in Delhi,
                                Gurgaon, Bengaluru, Mumbai and other cities in India. Lowest prices guaranteed on Patanjali, Aashirvaad, Pampers, Maggi,
                                Saffola, Huggies, Fortune, Nestle, Amul, MamyPoko Pants, Surf Excel, Ariel, Vim, Haldiram's and others.
                            </p>
                        </div>
                        <div className="sub-some">
                            <h5>Shop online with the best deals & offers</h5>
                            <p>Now Get Upto 40% Off On Everyday Essential Products Shown On The Offer Page. The range includes Grocery, Personal Care,
                                Baby Care, Pet Supplies, Healthcare and Other Daily Need Products. Discount May Vary From Product To Product.
                            </p>
                        </div>
                        <div className="sub-some">
                            <h5>Popular Brands</h5>
                            <ul>
                                <li>
                                    <a >Aashirvaad</a>
                                </li>
                                <li>
                                    <a >Amul</a>
                                </li>
                                <li>
                                    <a >Bingo</a>
                                </li>
                                <li>
                                    <a >Boost</a>
                                </li>
                                <li>
                                    <a >Durex</a>
                                </li>
                                <li>
                                    <a > Maggi</a>
                                </li>
                                <li>
                                    <a >Glucon-D</a>
                                </li>
                                <li>
                                    <a >Horlicks</a>
                                </li>
                                <li>
                                    <a >Head & Shoulders</a>
                                </li>
                                <li>
                                    <a >Dove</a>
                                </li>
                                <li>
                                    <a >Dettol</a>
                                </li>
                                <li>
                                    <a >Dabur</a>
                                </li>
                                <li>
                                    <a >Colgate</a>
                                </li>
                                <li>
                                    <a >Coca-Cola</a>
                                </li>
                                <li>
                                    <a >Closeup</a>
                                </li>
                                <li>
                                    <a > Cinthol</a>
                                </li>
                                <li>
                                    <a >Cadbury</a>
                                </li>
                                <li>
                                    <a >Bru</a>
                                </li>
                                <li>
                                    <a >Bournvita</a>
                                </li>
                                <li>
                                    <a >Tang</a>
                                </li>
                                <li>
                                    <a >Pears</a>
                                </li>
                                <li>
                                    <a >Oreo</a>
                                </li>
                                <li>
                                    <a > Taj Mahal</a>
                                </li>
                                <li>
                                    <a >Sprite</a>
                                </li>
                                <li>
                                    <a >Thums Up</a>
                                </li>
                                <li>
                                    <a >Fair & Lovely</a>
                                </li>
                                <li>
                                    <a >Lakme</a>
                                </li>
                                <li>
                                    <a >Tata</a>
                                </li>
                                <li>
                                    <a >Sunfeast</a>
                                </li>
                                <li>
                                    <a >Sunsilk</a>
                                </li>
                                <li>
                                    <a >Patanjali</a>
                                </li>
                                <li>
                                    <a >MTR</a>
                                </li>
                                <li>
                                    <a >Kissan</a>
                                </li>
                                <li>
                                    <a > Lipton</a>
                                </li>
                            </ul>
                        </div>
                        <div className="sub-some child-momu">
                            <h5>Payment Method</h5>
                            <ul>
                                <li>
                                    <img src="images/pay2.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay5.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay1.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay4.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay6.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay3.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay7.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay8.png" alt="" />
                                </li>
                                <li>
                                    <img src="images/pay9.png" alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copy-right">
                <div className="container">
                    <p>© 2017 Utt Shop book. All rights reserved | Design by
                        <a> Quy Nguyen.</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
