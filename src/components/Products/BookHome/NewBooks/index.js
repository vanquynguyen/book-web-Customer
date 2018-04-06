import React, { Component } from 'react';

// import Breadscrumb from '../Sections/Breadcrumb';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import BooksItem from './BookItems/index';
import { actFetchHomeBooksRequest } from '../../../../actions/Books';

class NewBooks extends Component {
    
    constructor() {
        super();
        this.state = {
            // books: [],
        };
    }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        this.props.fetchAllBooks();
    }

    showBooks(books) {
        const data = this.props.books;

        var result = null;
        if (data.length > 0) {
            result = data.map((book, index) => {
                return <BooksItem key={index} book={book} />
            });
        }
        return result;
    }

  
    render() {
        var books = this.props.books;

        return (
            <div className="product-sec1">
                <h3 className="heading-tittle">New Books</h3>
                {this.showBooks(books)}
                
                {/* <div className="col-md-4 product-men">
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
                            <img src="http://api-book.framgia.vn/image//2018/03/book/thinking-fast-and-slow-01u4939d20170915t105730179978.jpg?p=thumbnail_web&s=2484713d7aa14c67574a31e1d70e126b" alt="" />
                            <div className="men-cart-pro">
                                <div className="inner-men-cart-pro">
                                    <a href="single.html" className="link-product-add-cart">Quick View</a>
                                </div>
                            </div>
                            <span className="product-new-top">New</span>
                        </div>
                        <div className="item-info-product ">
                            <h4>
                                <a href="single.html">Tư duy nhanh và chậm 123</a>
                            </h4>
                            <div className="info-product-price">
                                <span className="item_price">$520.99</span>
                                <del>$600.99</del>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                <form action="#" method="post">
                                    <fieldset>
                                        <input type="hidden" name="cmd" value="_cart" />
                                        <input type="hidden" name="add" value="1" />
                                        <input type="hidden" name="business" value=" " />
                                        <input type="hidden" name="item_name" value="Pista, 250g" />
                                        <input type="hidden" name="amount" value="520.99" />
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
                </div> */}
                <div className="clearfix"></div>
                <div className="ph-20" style={{ marginTop: '30px', textAlign: 'center' }}><a className="btn btn-primary btn-block" style={{ width: '35%', background: '#f0ad4e', borderColor: 'rgb(254, 136, 0)'}}>View more</a></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllBooks: () => {
            dispatch(actFetchHomeBooksRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBooks);
