import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadscrumb from '../../Sections/Breadcrumb';
import NavTab from './navTab';
import Review from './review';
import { connect } from 'react-redux';
import { actGetBookRequest } from '../../../actions/Books/index';
import { actFetchCartsRequest } from '../../../actions/Carts';
import { actFetchReviewsRequest } from '../../../actions/Reviews';
import * as Config from '../../../constants/Config';
import axios from 'axios';
import swal from 'sweetalert';

class DetailProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
           id: '',
           user_id: '',
           poster: '',
           title: '',
           image: '',
           description: '',
           author: '',
           price: '',
           sale: '',
           amount: '',
        };
    }

    componentDidMount() {
        var { match } = this.props;
        // var userId = localStorage.getItem('userId');
        if (match) { // update
            var id = match.params.id;
            
            this.props.fetchAllReviews(id);
        }
    }

    componentWillMount() {
        var { match } = this.props;
        if (match) { // update
            var id = match.params.id;
            this.props.onGetBook(id)
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.booksEditing){
            var {booksEditing} = nextProps;
            axios.get(Config.API_URL + `/users/${booksEditing.user_id}`).then(response=> {
                this.setState({
                    poster: response.data.full_name
                });
            });
            this.setState({
                id: booksEditing.id,
                user_id: booksEditing.user_id,
                title: booksEditing.title,
                image: booksEditing.image,
                description: booksEditing.description,
                author: booksEditing.author,
                price: booksEditing.price,
                sale: booksEditing.sale,
                amount: booksEditing.amount,
            })
        }
    }
    onSubmit(id) {
        const bookId = id
        const userId = localStorage.getItem('userId');
        const data = {
            bookId: bookId,
            userId: userId
        }

        if (this.state.amount !== 0) {
            axios.post(Config.API_URL+ '/cart/get-book-id', data).then(res => {
                var result = res.data;
     
                if (result.length > 0) {
                    var bookId = id;
                    var addedAmount = result['0'].amount + 1;
                    var price = result['0'].price*2;
                    var request = {
                        'amount' : addedAmount,
                        'price' : price
                    }
                    axios.get(Config.API_URL+ `/books/${bookId}`).then(response => {
                        const amountBook = response.data.amount;
                        const userId = this.props.account.id;
                        if (addedAmount <= amountBook) {
                            axios.put(Config.API_URL+ `/carts/${result['0'].id}`, request).then(response => {
                               
                                swal({
                                    title: `Added ${addedAmount} / ${amountBook} products`,
                                    text: "You clicked the button!",
                                    icon: "success",
                                });
                                this.props.fetchAllCarts(userId);
                            });
                        } else {
                            swal({
                                title: "Too many amount allowed!",
                                text: "You clicked the button!",
                                icon: "warning",
                            });
                        }
                    });
                } else {
                    const userId = this.props.account.id;
                    const bookId = id;
                    const data = {
                        bookId: bookId,
                        userId: userId
                    }
                    axios.post(Config.API_URL+ '/carts', data).then(response => {
                        swal({
                            title: `Added 1 / ${this.state.amount} products`,
                            text: "You clicked the button!",
                            icon: "success",
                        });

                        this.props.fetchAllCarts(userId);
                    });
                }
    
            });
        } else {
            swal({
                title: "Oversell!",
                text: "You clicked the button!",
                icon: "warning",
            });
        }
    }
    
    render () {
        const image = this.state.image;
        const amount = this.state.amount;
        return (
            <div>
                <Breadscrumb name='Detail'/>
                <div className="banner-bootom-w3-agileits">
                    <div className="container">
                        <h3 className="tittle-w3l">Detail Book
                            <span className="heading-style">
                            <i></i>
                            <i></i>
                            <i></i>
                            </span>
                        </h3>
                        <div className="col-md-5 single-right-left ">
                            {image ? (
                                <img src={Config.LOCAL_URL + '/images/books/' + image} alt="" style={{ width: '70%'}}/>
                            ) : (
                                <img src="" alt=""/>
                            )}
                        </div>
                        <div className="col-md-7 single-right-left simpleCart_shelfItem">
                            <h3>{this.state.title}</h3>
                            <h4>View: (9 views)</h4>
                            <div id="fb-root"></div>
                            <div className="fb-like" data-href={Config.LOCAL_URL + `/${this.props.id}`} data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
                            <h4 style={{marginTop: '10px'}}>
                                Author: {this.state.author}
                            </h4>
                            <div style={{marginTop: '10px'}} className="rating1">
                                <a data-toggle="modal" data-target="#review-rate"> 
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
                                </a>
                                <Review id={this.state.id} userId={this.state.user_id}/>
                            </div>
                            <h4 style={{marginTop: '10px'}}>
                                Poster: <Link to={`/user/${this.state.user_id}/profile`} style={{color: '#8a6d3b', cursor: 'pointer'}}>
                                    {this.state.poster}
                                </Link>
                            </h4>
                            <h4>Amount: {amount > 0 ? amount: '(het hang)'}</h4>
                            <p style={{marginTop: '10px'}}>
                                { this.state.sale !== '' && this.state.sale > 0 ? (
                                    <div>
                                        <span className="item_price-old">${this.state.price}</span>
                                        <span className="item_price">${this.state.price*this.state.sale/100}</span>
                                    </div>
                                ) : (
                                    <span className="item_price">${this.state.price}</span>
                                )}  
                            </p>
                            <div className="product-single-w3l">
                                <p>
                                    <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                    {this.state.description}
                                </p>
                               
                                <p>
                                    <i className="fa fa-refresh" aria-hidden="true"></i>{this.state.description}
                                </p>
                            </div>
                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                <input type="button" name="submit" value="Add to cart" onClick={e => this.onSubmit(this.state.id)} className="button" />
                            </div>
                        </div>
                        
                    </div>
                    <div className="container" style={{ marginTop: '20px'}}>
                        <h3>Description</h3>
                        <p>
                            {this.state.description}
                        </p>
                    </div>
                    <NavTab id={this.state.id} reviews={this.props.reviews}/>
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
                                                <img src="https://codercuibap.com/wp-content/uploads/2018/04/20160713002241-816x459-740x414.jpg" alt="" width="120" />
                                                </a>
                                            </div>
                                            <div className="product-name-w3l">
                                                <h4>
                                                    <a href="single.html">Book redux good, 200$</a>
                                                </h4>
                                                <div className="w3l-pricehkj">
                                                    <h6>$160.00</h6>
                                                    <p>Save $40.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nbs-flexisel-item" style={{width: '342px'}}>
                                        <div className="w3l-specilamk">
                                            <div className="speioffer-agile">
                                                <a href="single.html">
                                                    <img src="http://holistics.io/blog/content/images/2017/10/angtovu@2x-8.png" alt="" width="120" />
                                                </a>
                                            </div>
                                            <div className="product-name-w3l">
                                                <h4>
                                                    <a href="single.html">Angular vs Vuejs, 180$</a>
                                                </h4>
                                                <div className="w3l-pricehkj">
                                                    <h6>$160.00</h6>
                                                    <p>Save $20.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nbs-flexisel-item" style={{width: '342px'}}>
                                        <div className="w3l-specilamk">
                                            <div className="speioffer-agile">
                                                <a href="single.html">
                                                    <img src="http://itplus-academy.edu.vn/upload/fbcc5395a262ff88a84928982483826f/files/giphy.gif" alt="" width="120" />
                                                </a>
                                            </div>
                                            <div className="product-name-w3l">
                                                <h4>
                                                    <a href="single.html">Vuejs Framework, 200$</a>
                                                </h4>
                                                <div className="w3l-pricehkj">
                                                    <h6>$160.00</h6>
                                                    <p>Save $40.00</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.0';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

const mapStateToProps = state => {
    return {
        booksEditing : state.booksEditing,
        account: state.account,
        reviews: state.reviews
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetBook: (id) => {
            dispatch(actGetBookRequest(id));
        },
        fetchAllCarts: (userId) => {
            dispatch(actFetchCartsRequest(userId));
        },
        fetchAllReviews: (id) => {
            dispatch(actFetchReviewsRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
