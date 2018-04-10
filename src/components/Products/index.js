import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Author from '../Sections/Author';
import NewBooks from './BookHome/NewBooks/index';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        return (
            <div>
                <div className="ads-grid">
                    <div className="container">
                        <h3 className="tittle-w3l">Our Top Books
                            <span className="heading-style">
                            <i></i>
                            <i></i>
                            <i></i>
                            </span>
                        </h3>
                        <div className="side-bar col-md-3">
                        <Author />              
                        </div>
                        <div className="agileinfo-ads-display col-md-9">
                            <div className="wrapper">
                                <NewBooks />
                                <div className="product-sec1 product-sec2">
                                    <div className="col-xs-7 effect-bg">
                                        <h3 className="">Pure Energy</h3>
                                        <h6>Enjoy our all healthy Products</h6>
                                        <p>Get Extra 10% Off</p>
                                    </div>
                                    <h3 className="w3l-nut-middle">Reading &amp; Feeling Books</h3>
                                    <div className="col-xs-5 bg-right-nut">
                                        <img src="http://www.top7thuvi.com/wp-content/uploads/2017/03/me-before-you.jpg" width="240" alt="" />
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="product-sec1">
                                    <h3 className="heading-tittle">Top Booking</h3>
                                    <div className="col-md-4 product-men">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item">
                                                <img src="http://api-book.framgia.vn/image//2018/03/book/nen-giao-duc-cua-nguoi-giau-a.jpg?p=thumbnail_web&s=90fed494e914bae01c520352dbdb89c6" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>
                                            </div>
                                            <div className="item-info-product ">
                                                <h4>
                                                    <a href="single.html">Nền giáo dục của người giàu</a>
                                                </h4>
                                                <div className="info-product-price">
                                                    <span className="item_price">$200.00</span>
                                                    <del>$420.00</del>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                    <form action="#" method="post">
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="Cashew Nuts, 100g" />
                                                            <input type="hidden" name="amount" value="200.00" />
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
                                    </div>
                                    <div className="col-md-4 product-men">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item">
                                                <img src="http://api-book.framgia.vn/image//2018/03/book/nen-giao-duc-cua-nguoi-giau-a.jpg?p=thumbnail_web&s=90fed494e914bae01c520352dbdb89c6" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>
                                            </div>
                                            <div className="item-info-product ">
                                                <h4>
                                                    <a href="single.html">Nền giáo dục của người giàu</a>
                                                </h4>
                                                <div className="info-product-price">
                                                    <span className="item_price">$200.00</span>
                                                    <del>$420.00</del>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                    <form action="#" method="post">
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="Cashew Nuts, 100g" />
                                                            <input type="hidden" name="amount" value="200.00" />
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
                                    </div>
                                    <div className="col-md-4 product-men">
                                        <div className="men-pro-item simpleCart_shelfItem">
                                            <div className="men-thumb-item">
                                                <img src="http://api-book.framgia.vn/image//2018/03/book/nen-giao-duc-cua-nguoi-giau-a.jpg?p=thumbnail_web&s=90fed494e914bae01c520352dbdb89c6" alt="" />
                                                <div className="men-cart-pro">
                                                    <div className="inner-men-cart-pro">
                                                        <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                    </div>
                                                </div>
                                                <span className="product-new-top">New</span>
                                            </div>
                                            <div className="item-info-product ">
                                                <h4>
                                                    <a href="single.html">Nền giáo dục của người giàu</a>
                                                </h4>
                                                <div className="info-product-price">
                                                    <span className="item_price">$200.00</span>
                                                    <del>$420.00</del>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                    <form action="#" method="post">
                                                        <fieldset>
                                                            <input type="hidden" name="cmd" value="_cart" />
                                                            <input type="hidden" name="add" value="1" />
                                                            <input type="hidden" name="business" value=" " />
                                                            <input type="hidden" name="item_name" value="Cashew Nuts, 100g" />
                                                            <input type="hidden" name="amount" value="200.00" />
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
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="ph-20" style={{ marginTop: '30px', textAlign: 'center' }}><a className="btn btn-primary btn-block" style={{ width: '35%', background: '#f0ad4e', borderColor: 'rgb(254, 136, 0)'}}>View more</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default List;
