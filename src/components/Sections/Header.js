import React from 'react';

const Header = () => {
    return (
        <div className="header-container">
            <header id="header">
                <div className="banner">
                    <div className="container">
                        <div id="inCartLayered" className="row">
                            <div id="layer_cart">
                                <div className="clearfix">
                                    <div className="layer_cart_product col-xs-12 col-md-6">
                                        <span className="cross" title="Close window"></span>
                                        <h2>
                                            <i className="fa fa-ok"></i>
                                            Product successfully added to your shopping cart
                                        </h2>
                                        <div className="product-image-container layer_cart_img">
                                        </div>
                                        <div className="layer_cart_product_info">
                                            <span id="layer_cart_product_title" className="product-name"></span>
                                            <span id="layer_cart_product_attributes"></span>
                                            <div>
                                                <strong className="dark">Quantity</strong>
                                                <span id="layer_cart_product_quantity"></span>
                                            </div>
                                            <div>
                                                <strong className="dark">Total</strong>
                                                <span id="layer_cart_product_price"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="layer_cart_cart col-xs-12 col-md-6">
                                        <h2>
                                            <span className="ajax_cart_product_txt_s  unvisible" style={{display: 'none'}}>
                                            There are <span className="ajax_cart_quantity" style={{display: 'none'}}>0</span> items in your cart.
                                            </span>
                                            <span className="ajax_cart_product_txt " style={{display: 'none'}}>
                                            There is 1 item in your cart.
                                            </span>
                                        </h2>
                                        <div className="layer_cart_row">
                                            <strong className="dark">
                                            Total products
                                            </strong>
                                            <span className="ajax_block_products_total">$0.00</span>
                                        </div>
                                        <div className="layer_cart_row">
                                            <strong className="dark unvisible">
                                            Total shipping&nbsp;					</strong>
                                            <span className="ajax_cart_shipping_cost unvisible">To be determined</span>
                                        </div>
                                        <div className="layer_cart_row">	
                                            <strong className="dark">
                                            Total
                                            </strong>
                                            <span className="ajax_block_cart_total">$0.00</span>
                                        </div>
                                        <div className="button-container">	
                                            <span className="continue btn btn-default btn-sm icon-left" title="Continue shopping">
                                            <span>
                                            Continue shopping
                                            </span>
                                            </span>
                                            <a className="btn btn-default btn-sm icon-right" href="http://livedemo00.template-help.com/prestashop_54824/index.php?controller=order&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=" title="Proceed to checkout" rel="nofollow">
                                            <span>
                                            Proceed to checkout
                                            </span>
                                            </a>	
                                        </div>
                                    </div>
                                </div>
                                <div className="crossseling"></div>
                            </div>
                            <div className="layer_cart_overlay"></div>
                        </div>
                    </div>
                </div>
                <div id="stickBox">
                    <div className="stickUpTop" style={{position: 'static', top: '0px'}}>
                        <div className="stickUpHolder">
                            <div className="mainHeader">
                                <div className="nav">
                                    <span className="close"></span><span className="open"></span>
                                    <nav>
                                        <div id="tmsearch" className="clearfix">
                                            <form id="tmsearchbox" method="get" action="//livedemo00.template-help.com/prestashop_54824/index.php?controller=search">
                                                <input type="hidden" name="controller" value="search" />
                                                <input type="hidden" name="orderby" value="position" />
                                                <input type="hidden" name="orderway" value="desc" />
                                                <div className="currentBox"></div>
                                                <input className="tm_search_query form-control toogle_content_box ac_input" type="text" id="tm_search_query" name="search_query" placeholder="Search" value="" autoComplete="off" style={{display: 'none'}} />
                                                <button type="submit" name="tm_submit_search" className="btn btn-default button-search">
                                                <span>Search</span>
                                                </button>
                                            </form>
                                        </div>
                                        <div id="header-login">
                                            <div className="currentBox header_user_info login"><a ><span>Sign in</span></a></div>
                                            <ul id="header-login-content" className="toogle_content_box" style={{display: 'none'}}>
                                                <li>
                                                    <form action="" method="post" id="header_login_form">
                                                        <div id="create_header_account_error" className="alert alert-danger" style={{display: 'none'}}></div>
                                                        <div className="form_content clearfix">
                                                            <div className="form-group">
                                                                <input className="is_required validate account_input form-control" data-validate="isEmail" type="text" id="header-email" name="header-email" placeholder="Email address" value="" />
                                                            </div>
                                                            <div className="form-group">
                                                                <span><input className="is_required validate account_input form-control" type="password" data-validate="isPasswd" id="header-passwd" name="header-passwd" placeholder="Password" value="" autoComplete="off" /></span>
                                                            </div>
                                                            <p className="submit">
                                                                <button type="button" id="HeaderSubmitLogin" name="HeaderSubmitLogin"><span>Sign in</span></button>
                                                            </p>
                                                            <p>
                                                                <a className="create"><span>Create an account</span></a>
                                                            </p>
                                                            <div className="clearfix">
                                                                <a className="btn btn-default btn-sm btn-login-facebook" title="Login with Your Facebook Account">
                                                                Facebook Login
                                                                </a>
                                                                <a className="btn btn-default btn-sm btn-login-google" title="Login with Your Google Account">
                                                                Google Login
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="currency_language">
                                            <div className="currentBox"></div>
                                            <div className="toogle_content_box" style={{display: 'none'}}>
                                                <div id="currencies-block-top">
                                                    <form id="setCurrency" action="" method="post">
                                                        <div className="current">
                                                            <input type="hidden" name="id_currency" id="id_currency" value="" />
                                                            <input type="hidden" name="SubmitCurrency" value="" />
                                                            <span className="cur-label">Currency :</span>
                                                            <strong>USD</strong>																
                                                        </div>
                                                        <ul id="first-currencies" className="currencies_ul toogle_content">
                                                            <li className="selected">
                                                                <a rel="nofollow" title="Dollar (USD)">
                                                                Dollar (USD)
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a rel="nofollow" title="Euro (EUR)">
                                                                Euro (EUR)
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </form>
                                                </div>
                                                <div id="languages-block-top" className="languages-block">
                                                    <div className="current">
                                                        <span>English</span>
                                                    </div>
                                                    <ul id="first-languages" className="languages-block_ul toogle_content" >
                                                        <li className="selected">
                                                            <span>English</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                <div id="header_logo">
                                    <a title="Book Hangover">
                                    <img className="logo img-responsive" src="http://livedemo00.template-help.com/prestashop_54824/img/new-store-logo-1433086504.jpg" alt="Book Hangover" width="66" height="62" />
                                    </a>
                                </div>
                                <div className="cartBox clearfix">
                                    <div className="shopping_cart ">
                                        <a title="View my shopping cart" rel="nofollow">
                                        <b>Cart</b>
                                        <span className="ajax_cart_quantity unvisible" style={{display: 'none'}}>0</span>
                                        <span className="ajax_cart_product_txt unvisible" style={{display: 'none'}}>Product</span>
                                        <span className="ajax_cart_product_txt_s unvisible" style={{display: 'none'}}>Products</span>
                                        <span className="ajax_cart_total unvisible" style={{display: 'none'}}>$0.00</span>
                                        <span className="ajax_cart_no_product" style={{display: 'inline-block'}}>(empty)</span>
                                        </a>
                                        <div className="cart_block block">
                                            <div className="block_content">
                                                <div className="cart_block_list">
                                                    <p className="cart_block_no_products">
                                                        No products
                                                    </p>
                                                    <div className="cart-prices">
                                                        <div className="cart-prices-line first-line  unvisible">
                                                            <span className="cart_block_shipping_cost ajax_cart_shipping_cost">To be determined</span>
                                                            <span>
                                                            Shipping
                                                            </span>
                                                        </div>
                                                        <div className="cart-prices-line last-line">
                                                            <span className="price cart_block_total ajax_block_cart_total">$0.00</span>
                                                            <span>Total</span>
                                                        </div>
                                                    </div>
                                                    <p className="cart-buttons">
                                                        <a id="button_order_cart" className="btn btn-default btn-sm icon-right" title="Check out" rel="nofollow">
                                                        <span>
                                                        Check out
                                                        </span>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container top_menu">
                                    <div className="menu-title">Menu</div>
                                    <ul className="menu clearfix sf-js-enabled sf-arrows">
                                        <li className="">
                                            <a className="sf-with-ul">Biographies</a>
                                            <div className="is-megamenu" style={{display: 'none'}}>
                                                <div id="megamenu-row-1" className="megamenu-row row megamenu-row-1">
                                                    <div id="column-1-1" className="megamenu-col megamenu-col-1-1 col-sm-3 ">
                                                        <ul className="content">
                                                            <li className="category">
                                                                <a title="Aliquam congue" className="sf-with-ul">Aliquam congue</a>
                                                                <ul style={{display: 'none'}}>
                                                                    {/* <li className="category"><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=5&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=" title="Lorem ipsum dolor">Lorem ipsum dolor</a></li>
                                                                    <li className="category"><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=6&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=" title="Sit amet conse">Sit amet conse</a></li>
                                                                    <li className="category"><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=7&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=" title="Ctetur adipisicing elit">Ctetur adipisicing elit</a></li>
                                                                    <li className="category"><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=8&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=" title="Sed do eiusmod">Sed do eiusmod</a></li>
                                                                    <li className="category"><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=9&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=" title="Tempor incididunt ut">Tempor incididunt ut</a></li>
                                                                    <li className="category"><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=10&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=" title="Labore et dolore">Labore et dolore</a></li> */}
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div id="column-1-2" className="megamenu-col megamenu-col-1-2 col-sm-3 ">
                                                        <ul className="content">
                                                            <li className="category">
                                                                <a title="Pellentesque sed" className="sf-with-ul">Pellentesque sed</a>
                                                                <ul style={{display: 'none'}}>
                                                                    {/* <li className="category"><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=12&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=" title="Lorem ipsum dolor">Lorem ipsum dolor</a></li>
                                                                    <li className="category"><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=13&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=" title="Sit amet conse">Sit amet conse</a></li>
                                                                    <li className="category"><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=14&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=" title="Ctetur adipisicing elit">Ctetur adipisicing elit</a></li>
                                                                    <li className="category"><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=15&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=" title="Sed do eiusmod">Sed do eiusmod</a></li>
                                                                    <li className="category"><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=16&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=" title="Tempor incididunt ut">Tempor incididunt ut</a></li>
                                                                    <li className="category"><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=17&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=" title="Labore et dolore">Labore et dolore</a></li> */}
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div id="column-1-3" className="megamenu-col megamenu-col-1-3 col-sm-3  first-in-line-sm">
                                                        <ul className="content">
                                                            <li className="category">
                                                                <a title="Enim adipiscing" className="sf-with-ul">Enim adipiscing</a>
                                                                <ul style={{display: 'none'}}>
                                                                    <li className="category"><a title="Lorem ipsum dolor">Lorem ipsum dolor</a></li>
                                                                    <li className="category"><a title="Sit amet conse">Sit amet conse</a></li>
                                                                    <li className="category"><a title="Ctetur adipisicing elit">Ctetur adipisicing elit</a></li>
                                                                    <li className="category"><a title="Sed do eiusmod">Sed do eiusmod</a></li>
                                                                    <li className="category"><a title="Tempor incididunt ut">Tempor incididunt ut</a></li>
                                                                    <li className="category"><a title="Labore et dolore">Labore et dolore</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div id="column-1-4" className="megamenu-col megamenu-col-1-4 col-sm-3 ">
                                                        <ul className="content">
                                                            <li className="category">
                                                                <a title="Phasellus" className="sf-with-ul">Phasellus</a>
                                                                <ul style={{display: 'none'}}>
                                                                    <li className="category"><a title="Lorem ipsum dolor">Lorem ipsum dolor</a></li>
                                                                    <li className="category"><a title="Sit amet conse">Sit amet conse</a></li>
                                                                    <li className="category"><a title="Ctetur adipisicing elit">Ctetur adipisicing elit</a></li>
                                                                    <li className="category"><a title="Sed do eiusmod">Sed do eiusmod</a></li>
                                                                    <li className="category"><a title="Tempor incididunt ut">Tempor incididunt ut</a></li>
                                                                    <li className="category"><a title="Labore et dolore">Labore et dolore</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div id="megamenu-row-2" className="megamenu-row row megamenu-row-2">
                                                    <div id="column-2-1" className="megamenu-col megamenu-col-2-1 col-sm-6 ">
                                                        <ul className="content">
                                                            <li>
                                                                <a href="index.php?id_category=20&amp;controller=category">
                                                                <img className="img-responsive" src="/prestashop_54824/modules/tmmegamenu/images/05d6cb62e91b3364b5139a67099471b0040b69a3_baner-menu1.jpg" alt="Banner Menu 1" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div id="column-2-3" className="megamenu-col megamenu-col-2-3 col-sm-6 ">
                                                        <ul className="content">
                                                            <li>
                                                                <a href="index.php?id_category=21&amp;controller=category">
                                                                <img className="img-responsive" src="/prestashop_54824/modules/tmmegamenu/images/1cbe22f81b5013240a8c1e8866a1faf2eeab7218_baner-menu2.jpg" alt="Banner Menu 2" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className=""><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=39&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=">business</a></li>
                                        <li className=""><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=40&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=">education</a></li>
                                        <li className=""><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=41&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=">history</a></li>
                                        <li className=""><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=42&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=">Children's</a></li>
                                        <li className=""><a href="http://livedemo00.template-help.com/prestashop_54824/index.php?id_category=43&amp;controller=category&amp;id_lang=1&amp;live_configurator_token=fac41fb15d68e448596047e959ba6881&amp;id_shop=1&amp;id_employee=2&amp;theme=&amp;theme_font=">classNameic</a></li>
                                    </ul>
                                </div>
                                <div id="gear-right2">
                                    <a id="enable_config" ><i className="fa fa-cogs icon-2x icon-light"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pseudoStickyBlock" style={{position: 'relative', display: 'block', height: '0px'}}></div>
                </div>
            </header>
        </div>
    );
};

export default Header;