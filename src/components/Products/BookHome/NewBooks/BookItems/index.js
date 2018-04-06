import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Config from '../../../../../constants/Config';
import axios from 'axios';

class BooksItem extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(1)
        const data = {
            id: this.props.book.id,
            user_id: this.props.account.id
        }
        axios.post(Config.API_URL+ '/carts', data).then(response =>{
           
            console.log(data)
        });
        // axios.get(Config.API_URL+ '/carts').then(response =>{
          
        // });
    }

    render() {
        var { book } = this.props;
        return (
            <div className="col-md-4 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                        <Link to={`/book/${book.id}/detail`}>
                            <img src={Config.LOCAL_URL+ '/images/books/' + book.image} alt="" width="150" height="200"/>
                        </Link>
                        <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                                <Link to={`/book/${book.id}/detail`} className="link-product-add-cart">Quick View</Link>
                            </div>
                        </div>
                        <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                        <h4 className="title-book">
                        {book.title}
                        </h4>
                        <div className="info-product-price">
                            <span className="item_price">${book.price}</span>
                        </div>
                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form onSubmit={e => this.onSubmit(e)}>
                                <input type="submit" name="submit" value="Add to cart" className="button" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.books,
        account: state.account
    }
}


export default connect(mapStateToProps)(BooksItem);
