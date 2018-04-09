import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from '../Login/Login';
import Register from '../Login/Register';
import axios from 'axios';
import swal from 'sweetalert';
import * as Config from '../../constants/Config';
import $ from 'jquery';

import { connect } from 'react-redux';
import { actFetchCartsRequest, actDeleteCartRequest } from '../../actions/Carts';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            auth: {},
            carts: []
        };
    }

    componentDidMount() {
       // Gọi trước khi component đc render lần đầu tiên
        const userId = localStorage.getItem('userId');
        this.props.fetchAllCarts(userId);
    }

    onDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
                this.props.onDeleteCart(id);
                console.log(id)
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }

    Logout = () => {
        const token = localStorage.getItem('token');
        axios({
            method: 'get',
            url: Config.API_URL + '/logout',
            params: {token: token},
        })
        .then(response=> {
            localStorage.setItem('token', '');
            localStorage.setItem('userId', '');
            window.location = 'http://localhost:3000/';
        })
       
    }

    render() {
        const auth = this.props.account;
        const carts = this.props.carts;
        
        const listCarts = carts.map((cart, index) => {
            return <div className="cart-item" key={index}>
                        <img src="https://sachgiai.com/uploads/book/sach-giao-khoa-toan-1/sach-giao-khoa-toan-1-0.jpg" alt="" width="32"/>
                        {cart.title}
                        <i className="fa fa-times" style={{ float: 'right', marginTop: '13px' }} onClick={() => this.onDelete(cart.id)}></i>
                        <div style={{ marginTop: '10px' }}>
                            <span style={{ color: '#ff5722' }}>
                                $ {cart.price}
                            </span>
                            <span style={{ float: 'right' }}>
                                {cart.amount} products
                            </span>
                        </div>
                    </div>
        });

        return (
            <div>
                <div className="header-bot">
                    <div className="header-bot_inner_wthreeinfo_header_mid">
                        <div className="col-md-4 logo_agile">
                            <h1>
                                <Link to="/" className="scroller-home">
                                    <span>UTT</span>
                                    <span>BOOK</span>
                                    <img src="/images/logo2.png" alt="" />
                                </Link>
                            </h1>
                        </div>
                        <div className="col-md-8 header">
                            <ul>
                                <li>
                                    <a className="play-icon popup-with-zoom-anim" href="#small-dialog1">
                                    <span className="fa fa-map-marker" aria-hidden="true"></span> Shop Locator</a>
                                </li>
                                <li>
                                    <a  data-toggle="modal" data-target="#myModal1">
                                    <span className="fa fa-truck" aria-hidden="true"></span>Track Order</a>
                                </li>
                                <li>
                                    <span className="fa fa-phone" aria-hidden="true"></span> 001 234 5678
                                </li>
                                {auth.id ? (
                                    <li>
                                        <div className="dropdown">
                                            <a style={{color: 'white'}} className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img width="20" src="https://images.viblo.asia/avatar/398ff412-f7d3-4e32-85b3-50efae907d6b.png" alt=""/> {auth.email}
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{ paddingLeft: '12px' }}>
                                                <Link to={`/user/${auth.id}/profile`} className="dropdown-item scroller" style={{color: 'black', cursor: 'pointer', fontSize: '15px'}}>
                                                    <i className="fa fa-user"></i> Profile
                                                </Link>
                                                <br />
                                                <Link to="/user/add-book" className="dropdown-item scroller" style={{color: 'black', cursor: 'pointer', fontSize: '15px'}}><i className="fa fa-check"></i> Request books</Link>
                                                <br />
                                                <a className="dropdown-item scroller" style={{color: 'black', cursor: 'pointer', fontSize: '15px'}} onClick={this.Logout}><i className="fa fa-sign-out"></i> Logout</a>
                                            </ul>
                                        </div>
                                    </li>
                                ) : (
                                    <span>
                                        <li>
                                            <a  data-toggle="modal" data-target="#myModal1">
                                        <span className="fa fa-unlock-alt" aria-hidden="true"></span> Sign In </a>
                                        </li>
                                        <li>
                                            <a  data-toggle="modal" data-target="#myModal2">
                                            <span className="fa fa-pencil-square-o" aria-hidden="true"></span> Sign Up </a>
                                        </li>
                                    </span>
                                )}
                            </ul>
                            <div className="agileits_search">
                                <form action="#" method="post">
                                    <input name="Search" type="search" placeholder="How can we help you today?" required="" />
                                    <button type="submit" className="btn btn-default" aria-label="Left Align">
                                    <span className="fa fa-search" aria-hidden="true"> </span>
                                    </button>
                                </form>
                            </div>
                            <div className="top_nav_right">
                                <div className="wthreecartaits wthreecartaits2 cart cart box_1" >
                                    <div className="dropdown">
                                        <a className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fa-cart-arrow-down" aria-hidden="true" style={{ fontSize: '40px', color: 'white' }}></i>
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{ paddingLeft: '12px', width:'265px',border: '1px solid #d7d7d7', borderRadius: '4px', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)', font: '15px/normal arial, helvetica', maxHeight: '450px !important' }}>
                                            {carts.length > 0 && auth.id ? ( 
                                                <div>
                                                    <span> {listCarts}</span>
                                                    <hr />
                                                    <Link to='/checkout' className="scroller" id="checkout" style={{marginLeft: '27px'}}> <button className="minicartk-submit">Check out & Payment</button> </Link>
                                                </div>
                                            ) : (
                                                <span>Your shopping cart is empty</span>
                                            )}
                                        </ul>
                                    </div>
                                    {carts.length > 0 && auth.id ? (
                                        <div className="UTT-cart-number">
                                            <span>{carts.length}</span>
                                        </div>
                                    ) : (
                                        <span></span>
                                    )}
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <Login />
                <Register />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        account: state.account,
        carts: state.carts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCarts: (userId) => {
            dispatch(actFetchCartsRequest(userId));
        },
        onDeleteCart: (id) => {
            dispatch(actDeleteCartRequest(id))
        }
    }
}

$(document).ready(function(){  
    $('.scroller').click(function() {
        $('html, body').animate({scrollTop:0}, 'slow');
    });
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
