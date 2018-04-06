import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadscrumb from '../../Sections/Breadcrumb';
import { connect } from 'react-redux';
// import swal from 'sweetalert';
import { actGetBookRequest } from '../../../actions/Books/index';
import * as Config from '../../../constants/Config';
import axios from 'axios';

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
                            <h3>{this.state.title}</h3><span>(9 views)</span>
                            <h4 style={{marginTop: '10px'}}>
                                Author: 
                                {this.state.author}
                            </h4>
                            <div style={{marginTop: '10px'}} className="rating1">
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
                            <h4 style={{marginTop: '10px'}}>
                                Poster: 
                                <Link to={`/user/${this.state.user_id}/profile`} style={{color: '#8a6d3b', cursor: 'pointer'}}>
                                    {this.state.poster}
                                </Link>
                            </h4>
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
    }
};

const mapStateToProps = state => {
    return {
        booksEditing : state.booksEditing,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetBook: (id) => {
            dispatch(actGetBookRequest(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct);
