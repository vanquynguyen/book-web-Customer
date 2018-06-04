import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Author from '../Sections/Author';
import NewBooks from './BookHome/NewBooks/index';
import TopBookings from './BookHome/TopBookings/index';
import TopReviews from './BookHome/TopReviews/index';

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        return (
            <div className="container">
                <div className="ads-grid">
                    <div className="container">
                        <h3 className="tittle-w3l">Our Top Books
                            <span className="heading-style">
                            <i></i>
                            <i></i>
                            <i></i>
                            </span>
                        </h3>
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
                                <TopBookings />
                                <TopReviews />
                            </div>
                        </div>
                        <div className="side-bar col-md-3">
                            <Author />              
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default List;
