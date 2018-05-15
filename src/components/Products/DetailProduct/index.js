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
        if (this.props.booksEditing.amount !== 0) {
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
                        // console.log(response)
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
                            title: `Added 1 products`,
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
                            <h4 style={{marginTop: '10px'}}>
                                Author: 
                                {this.state.author}
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
                                <Review id={this.state.id}/>
                            </div>
                            <h4 style={{marginTop: '10px'}}>
                                Poster: 
                                <Link to={`/user/${this.state.user_id}/profile`} style={{color: '#8a6d3b', cursor: 'pointer'}}>
                                    {this.state.poster}
                                </Link>
                            </h4>
                            <h4>Amount: {this.state.amount}</h4>
                            <p style={{marginTop: '10px'}}>
                                <span className="item_price">${this.state.price}</span>
                                {/* <label>Free delivery</label> */}
                            </p>
                            <div className="single-infoagile">
                                <ul>
                                    <li>
                                        {/* Cash on Delivery Eligible. */}
                                    </li>
                                    <li>
                                        {/* Shipping Speed to Delivery. */}
                                    </li>
                                    <li>
                                        {/* Sold and fulfilled by Supple Tek (3.6 out of 5 | 8 ratings). */}
                                    </li>
                                    <li>
                                        {/* 1 offer from
                                        <span className="item_price">$950.00</span> */}
                                    </li>
                                </ul>
                            </div>
                            <div className="product-single-w3l">
                                <p>
                                    <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                    {this.state.description}
                                </p>
                                {/* <ul>
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
                                </ul> */}
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
                            Giới thiệu: Sách giáo khoa vật lý 12, bao gồm 8 chương:
                            CHƯƠNG I – DAO ĐỘNG CƠ
                            CHƯƠNG II – SÓNG CƠ VÀ SÓNG ÂM
                            CHƯƠNG III – DÒNG ĐIỆN XOAY CHIỀU
                            CHƯƠNG IV – DAO ĐỘNG VÀ SÓNG ĐIỆN TỪ
                            CHƯƠNG V – SÓNG ÁNH SÁNG
                            CHƯƠNG VI – LƯỢNG TỰ ÁNH SÁNG
                            CHƯƠNG VII – HẠT NHÂN NGUYÊN TỬ
                            CHƯƠNG VIII – TỪ VI MÔ ĐÊN VĨ MÔ
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
    }
};

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
