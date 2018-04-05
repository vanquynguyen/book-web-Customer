import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from '../Login/Login';
import Register from '../Login/Register';
import axios from 'axios';
import * as Config from '../../constants/Config';

import { connect } from 'react-redux';
// import { actFetchUserRequest } from '../../actions/Users';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            auth: {}
        };
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
            window.location = 'http://localhost:3000/'
            // this.props.history.push('/');
        })
    }

    render() {
        const auth = this.props.account;
        // console.log(this.state);
        return (
            <div>
                <div className="header-bot">
                    <div className="header-bot_inner_wthreeinfo_header_mid">
                        <div className="col-md-4 logo_agile">
                            <h1>
                                <Link to="/">
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
                                                <Link to={`/user/${auth.id}/profile`} className="dropdown-item" style={{color: 'black', cursor: 'pointer'}}>
                                                    <i className="fa fa-user"></i> Profile
                                                </Link>
                                                <br />
                                                <Link to="/user/add-book" className="dropdown-item" style={{color: 'black', cursor: 'pointer'}}><i className="fa fa-check"></i> Request books</Link>
                                                <br />
                                                <a className="dropdown-item" style={{color: 'black', cursor: 'pointer'}} onClick={this.Logout}><i className="fa fa-sign-out"></i> Logout</a>
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
                                <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                                    <form action="#" method="post" className="last">
                                        <input type="hidden" name="cmd" value="_cart" />
                                        <input type="hidden" name="display" value="1" />
                                        <button className="w3view-cart" type="submit" name="submit" value="">
                                        <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
                                        </button>
                                    </form>
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
        account: state.account
    }
}

export default connect(mapStateToProps)(withRouter(Header));
