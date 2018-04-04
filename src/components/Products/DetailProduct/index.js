import React from 'react';
import Breadscrumb from '../../Sections/Breadcrumb';

const DetailProduct = () => {
    return (
        <div>
            <Breadscrumb name='Detail'/>
            <div className="banner-bootom-w3-agileits">
                <div className="container">
                    <h3 className="tittle-w3l">Single Page
                        <span className="heading-style">
                        <i></i>
                        <i></i>
                        <i></i>
                        </span>
                    </h3>
                    <div className="col-md-5 single-right-left ">
                        <div className="grid images_3_of_2">
                            <div className="flexslider">
                                <div className="clearfix"></div>
                                <div className="flex-viewport" style={{overflow: 'hidden', position: 'relative'}}>
                                    <ul className="slides" style={{width: '1000%', transitionDuration: '0s', transform: 'translate3d(-437px, 0px, 0px)'}}>
                                        <li data-thumb="images/si3.jpg" className="clone" aria-hidden="true" style={{width: '437px', float: 'left', display: 'block'}}>
                                            <div className="thumb-image">
                                                <img src="images/si3.jpg" data-imagezoom="true" className="img-responsive" alt="" draggable="false" /> 
                                            </div>
                                        </li>
                                        <li data-thumb="images/si.jpg" style={{width: '437px', float: 'left', display: 'block'}} className="flex-active-slide">
                                            <div className="thumb-image">
                                                <img src="images/si.jpg" data-imagezoom="true" className="img-responsive" alt="" draggable="false" /> 
                                            </div>
                                        </li>
                                        <li data-thumb="images/si2.jpg" className="" style={{width: '437px', float: 'left', display: 'block'}}>
                                            <div className="thumb-image">
                                                <img src="images/si2.jpg" data-imagezoom="true" className="img-responsive" alt="" draggable="false" /> 
                                            </div>
                                        </li>
                                        <li data-thumb="images/si3.jpg" className="" style={{width: '437px', float: 'left', display: 'block'}}>
                                            <div className="thumb-image">
                                                <img src="images/si3.jpg" data-imagezoom="true" className="img-responsive" alt="" draggable="false" /> 
                                            </div>
                                        </li>
                                        <li data-thumb="images/si.jpg" style={{width: '437px', float: 'left', display: 'block'}} className="clone" aria-hidden="true">
                                            <div className="thumb-image">
                                                <img src="images/si.jpg" data-imagezoom="true" className="img-responsive" alt="" draggable="false" /> 
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <ol className="flex-control-nav flex-control-thumbs">
                                    <li><img src="images/si.jpg" className="flex-active" draggable="false" alt="" /></li>
                                    <li><img src="images/si2.jpg" draggable="false" className="" alt="" /></li>
                                    <li><img src="images/si3.jpg" draggable="false" className="" alt="" /></li>
                                </ol>
                                <ul className="flex-direction-nav">
                                    <li className="flex-nav-prev"><a className="flex-prev" >Previous</a></li>
                                    <li className="flex-nav-next"><a className="flex-next" >Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 single-right-left simpleCart_shelfItem">
                        <h3>Zeeba Premium Basmati Rice - 5 KG</h3>
                        <div className="rating1">
                            <span className="starRating">
                            <input id="rating5" type="radio" name="rating" value="5" />
                            <label>5</label>
                            <input id="rating4" type="radio" name="rating" value="4" />
                            <label>4</label>
                            <input id="rating3" type="radio" name="rating" value="3" checked="" />
                            <label>3</label>
                            <input id="rating2" type="radio" name="rating" value="2" />
                            <label>2</label>
                            <input id="rating1" type="radio" name="rating" value="1" />
                            <label>1</label>
                            </span>
                        </div>
                        <p>
                            <span className="item_price">$950.00</span>
                            <del>$1300.00</del>
                            <label>Free delivery</label>
                        </p>
                        <div className="single-infoagile">
                            <ul>
                                <li>
                                    Cash on Delivery Eligible.
                                </li>
                                <li>
                                    Shipping Speed to Delivery.
                                </li>
                                <li>
                                    Sold and fulfilled by Supple Tek (3.6 out of 5 | 8 ratings).
                                </li>
                                <li>
                                    1 offer from
                                    <span className="item_price">$950.00</span>
                                </li>
                            </ul>
                        </div>
                        <div className="product-single-w3l">
                            <p>
                                <i className="fa fa-hand-o-right" aria-hidden="true"></i>This is a
                                <label>Vegetarian</label> product.
                            </p>
                            <ul>
                                <li>
                                    Best for Biryani and Pulao.
                                </li>
                                <li>
                                    After cooking, Zeeba Basmati rice grains attain an extra ordinary length of upto 2.4 cm/~1 inch.
                                </li>
                                <li>
                                    Zeeba Basmati rice adheres to the highest food afety standards as your health is paramount to us.
                                </li>
                                <li>
                                    Contains only the best and purest grade of basmati rice grain of Export quality.
                                </li>
                            </ul>
                            <p>
                                <i className="fa fa-refresh" aria-hidden="true"></i>All food products are
                                <label>non-returnable.</label>
                            </p>
                        </div>
                        <div className="occasion-cart">
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                <form action="#" method="post">
                                    <fieldset>
                                        <input type="hidden" name="cmd" value="_cart" />
                                        <input type="hidden" name="add" value="1" />
                                        <input type="hidden" name="business" value=" " />
                                        <input type="hidden" name="item_name" value="Zeeba Premium Basmati Rice - 5 KG" />
                                        <input type="hidden" name="amount" value="950.00" />
                                        <input type="hidden" name="discount_amount" value="1.00" />
                                        <input type="hidden" name="currency_code" value="USD" />
                                        <input type="hidden" name="return" value=" " />
                                        <input type="hidden" name="cancel_return" value=" " />
                                        <input type="submit" name="submit" value="Add to cart" className="button" />
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="featured-section" id="projects">
            <div className="container">
                <h3 className="tittle-w3l">Add More
                    <span className="heading-style">
                    <i></i>
                    <i></i>
                    <i></i>
                    </span>
                </h3>
                <div className="content-bottom-in">
                    <div className="nbs-flexisel-container">
                        <div className="nbs-flexisel-inner">
                            <ul id="flexiselDemo1" className="nbs-flexisel-ul" style={{left: '-666.9px'}}>
                                <li className="nbs-flexisel-item" style={{width: '342px'}}>
                                    <div className="w3l-specilamk">
                                        <div className="speioffer-agile">
                                            <a href="single.html">
                                            <img src="images/s8.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-name-w3l">
                                            <h4>
                                                <a href="single.html">Cadbury Choclairs, 655.5g</a>
                                            </h4>
                                            <div className="w3l-pricehkj">
                                                <h6>$160.00</h6>
                                                <p>Save $60.00</p>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <fieldset>
                                                        <input type="hidden" name="cmd" value="_cart" />
                                                        <input type="hidden" name="add" value="1" />
                                                        <input type="hidden" name="business" value=" " />
                                                        <input type="hidden" name="item_name" value="Cadbury Choclairs, 655.5g" />
                                                        <input type="hidden" name="amount" value="160.00" />
                                                        <input type="hidden" name="discount_amount" value="1.00" />
                                                        <input type="hidden" name="currency_code" value="USD" />
                                                        <input type="hidden" name="return" value=" " />
                                                        <input type="hidden" name="cancel_return" value=" " />
                                                        <input type="submit" name="submit" value="Add to cart" className="button" />
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nbs-flexisel-item" style={{width: '342px'}}>
                                    <div className="w3l-specilamk">
                                        <div className="speioffer-agile">
                                            <a href="single.html">
                                            <img src="images/s8.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-name-w3l">
                                            <h4>
                                                <a href="single.html">Cadbury Choclairs, 655.5g</a>
                                            </h4>
                                            <div className="w3l-pricehkj">
                                                <h6>$160.00</h6>
                                                <p>Save $60.00</p>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <fieldset>
                                                        <input type="hidden" name="cmd" value="_cart" />
                                                        <input type="hidden" name="add" value="1" />
                                                        <input type="hidden" name="business" value=" " />
                                                        <input type="hidden" name="item_name" value="Cadbury Choclairs, 655.5g" />
                                                        <input type="hidden" name="amount" value="160.00" />
                                                        <input type="hidden" name="discount_amount" value="1.00" />
                                                        <input type="hidden" name="currency_code" value="USD" />
                                                        <input type="hidden" name="return" value=" " />
                                                        <input type="hidden" name="cancel_return" value=" " />
                                                        <input type="submit" name="submit" value="Add to cart" className="button" />
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nbs-flexisel-item" style={{width: '342px'}}>
                                    <div className="w3l-specilamk">
                                        <div className="speioffer-agile">
                                            <a href="single.html">
                                            <img src="images/s8.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-name-w3l">
                                            <h4>
                                                <a href="single.html">Cadbury Choclairs, 655.5g</a>
                                            </h4>
                                            <div className="w3l-pricehkj">
                                                <h6>$160.00</h6>
                                                <p>Save $60.00</p>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <fieldset>
                                                        <input type="hidden" name="cmd" value="_cart" />
                                                        <input type="hidden" name="add" value="1" />
                                                        <input type="hidden" name="business" value=" " />
                                                        <input type="hidden" name="item_name" value="Cadbury Choclairs, 655.5g" />
                                                        <input type="hidden" name="amount" value="160.00" />
                                                        <input type="hidden" name="discount_amount" value="1.00" />
                                                        <input type="hidden" name="currency_code" value="USD" />
                                                        <input type="hidden" name="return" value=" " />
                                                        <input type="hidden" name="cancel_return" value=" " />
                                                        <input type="submit" name="submit" value="Add to cart" className="button" />
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nbs-flexisel-item" style={{width: '342px'}}>
                                    <div className="w3l-specilamk">
                                        <div className="speioffer-agile">
                                            <a href="single.html">
                                            <img src="images/s8.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-name-w3l">
                                            <h4>
                                                <a href="single.html">Cadbury Choclairs, 655.5g</a>
                                            </h4>
                                            <div className="w3l-pricehkj">
                                                <h6>$160.00</h6>
                                                <p>Save $60.00</p>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <fieldset>
                                                        <input type="hidden" name="cmd" value="_cart" />
                                                        <input type="hidden" name="add" value="1" />
                                                        <input type="hidden" name="business" value=" " />
                                                        <input type="hidden" name="item_name" value="Cadbury Choclairs, 655.5g" />
                                                        <input type="hidden" name="amount" value="160.00" />
                                                        <input type="hidden" name="discount_amount" value="1.00" />
                                                        <input type="hidden" name="currency_code" value="USD" />
                                                        <input type="hidden" name="return" value=" " />
                                                        <input type="hidden" name="cancel_return" value=" " />
                                                        <input type="submit" name="submit" value="Add to cart" className="button" />
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nbs-flexisel-item" style={{width: '342px'}}>
                                    <div className="w3l-specilamk">
                                        <div className="speioffer-agile">
                                            <a href="single.html">
                                            <img src="images/s8.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="product-name-w3l">
                                            <h4>
                                                <a href="single.html">Cadbury Choclairs, 655.5g</a>
                                            </h4>
                                            <div className="w3l-pricehkj">
                                                <h6>$160.00</h6>
                                                <p>Save $60.00</p>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <fieldset>
                                                        <input type="hidden" name="cmd" value="_cart" />
                                                        <input type="hidden" name="add" value="1" />
                                                        <input type="hidden" name="business" value=" " />
                                                        <input type="hidden" name="item_name" value="Cadbury Choclairs, 655.5g" />
                                                        <input type="hidden" name="amount" value="160.00" />
                                                        <input type="hidden" name="discount_amount" value="1.00" />
                                                        <input type="hidden" name="currency_code" value="USD" />
                                                        <input type="hidden" name="return" value=" " />
                                                        <input type="hidden" name="cancel_return" value=" " />
                                                        <input type="submit" name="submit" value="Add to cart" className="button" />
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* <div className="nbs-flexisel-nav-left" style={{top: '174px'}}></div>
                            <div className="nbs-flexisel-nav-right" style={{top: '174px'}}></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default DetailProduct;