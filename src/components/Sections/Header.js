import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from '../Login/Login';
import Register from '../Login/Register';
import axios from 'axios';
import swal from 'sweetalert';
import * as Config from '../../constants/Config';

import { connect } from 'react-redux';
import { actFetchCartsRequest, actDeleteCartRequest } from '../../actions/Carts';
import { actFetchUserRequest } from '../../actions/Users';
import { database } from '../../constants/firebase';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            auth: {},
            carts: [],
            books: [],
            display: 'show-search',
            search: '',
            notifications: {},
            sender: [],
        };
    }

    componentDidMount() {
       // Gọi trước khi component đc render lần đầu tiên
        const userId = localStorage.getItem('userId');
        this.props.fetchAllCarts(userId);
    }

    componentWillMount() {
        const notifications = database.ref('notifications')
    
        notifications.on('value', snapshot => {
            const items = snapshot.val();
            const newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    full_name: items[item].full_name,
                    avatar: items[item].avatar,
                    approved: items[item].approved,
                    sender_id: items[item].sender_id,
                    received_id: items[item].received_id,
                    content: items[item].content,
                    book_id: items[item].book_id,
                    time: items[item].time
                });
            }
            this.setState({
                notifications: newState
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.account){
            var { account } = nextProps;
            this.setState({
                auth: account
            })
        }
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
            this.setState({
                auth: {}
            })
        })
       
    }

    onSearch = (event) => {
        var keywork = event.target.value;
        this.setState({
            search: keywork
        })
        if (this.state.search !== '') {
            axios.get(Config.API_URL + '/book/search', {params:{keywork:keywork}}).then(res => {
                this.setState({
                    books: res.data
                })
            });
        }
    }

    onRemoveNoti = (id) => {
        database.ref('notifications').child(id).remove()
    }

    render() {
        const display = this.state.display
        const check = this.state.search
        const books = this.state.books
        const auth = this.state.auth;
        const carts = this.props.carts;

        const listCarts = carts.map((cart, i) => {
            return  <div className="cart-item" key={i}>
                        <img style={{ float: 'left'}} src={Config.LOCAL_URL + '/images/books/' + cart.image} alt="" width="32"/>
                        <p className="dropdown-cart-title">{cart.title}</p>
                        <i className="fa fa-times" style={{ float: 'right', marginTop: '13px' }} onClick={() => this.onDelete(cart.id)}></i>
                        <div style={{ marginTop: '60px' }}>
                            <span style={{ color: '#ff5722' }}>
                                $ {cart.price}
                            </span>
                            <span style={{ float: 'right' }}>
                                Amount: {cart.amount}x
                            </span>
                        </div>
                    </div>
        });

        const listBooks = books.map((book, index) => {
            return <div className="search-result" id={check === '' ? display: ''} style={{backgroundColor: 'white', width: '90%', zIndex: '1030'}} key={index}>
                    <li className="row" style={{ paddingLeft: '30px', paddingTop: '10px' }}>
                        <Link to={`/book/${book.id}/detail`} class="scroller">
                            <img style={{ float: 'left', marginRight: '15px'}} src={Config.LOCAL_URL + '/images/books/' + book.image} alt="" width="50"/>
                            <p>{book.title}</p>
                        </Link>
                   </li>
                   <br />
                </div>
        });

        const notiData = this.state.notifications;
        const receiveId = localStorage.getItem('userId');
        let listNoti;
        let count = 0;
    
        if (notiData.length > 0) {
            listNoti = notiData.map((noti, key) => {
                return  <div key={key}>
                            {(noti.received_id === receiveId || noti.received_id === `"${receiveId}"`) ? ( 
                                <div>
                                    {((typeof noti.avatar !== 'undefined' && noti.avatar !== '') || (typeof noti.full_name !== 'undefined' && noti.full_name !== '')) ? (
                                        <div className="row" style={{ marginBottom: '5px', width: '100%' }}>
                                            <img className="img-circle pravatar-image img-responsive col-sm-3" style={{ width: '32px', height: '32px', padding: '0' }} src={Config.LOCAL_URL+ '/images/' + noti.avatar} alt="" />
                                            <div className="col-sm-9" style={{ marginTop: '7px' }}>
                                                <Link to={`/user/${noti.sender_id}`} style={{ color: 'black' }} onClick={() => this.onRemoveNoti(noti.id)}>
                                                    You have a message from {noti.full_name}
                                                </Link>
                                            </div>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                    {(typeof noti.approved !== 'undefined' && noti.approved !=='') ? (
                                        <div className="row" style={{ marginBottom: '5px', width: '100%' }}>
                                            <img className="img-circle pravatar-image img-responsive col-sm-3" style={{ width: '32px', height: '32px', padding: '0' }} src={Config.LOCAL_URL+ '/images/' + this.props.account.avatar} alt="" />
                                            <div className="col-sm-9" style={{ marginTop: '7px' }}>
                                                <Link to='user/profile' style={{ color: 'black' }}  onClick={() => this.onRemoveNoti(noti.id)}>
                                                    Your book have a reviews from {noti.full_name}
                                                </Link>
                                            </div>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                    {(typeof noti.content !== 'undefined' && noti.content ==='review_book') ? (
                                        <div className="row" style={{ marginBottom: '5px', width: '100%' }}>
                                            <img className="img-circle pravatar-image img-responsive col-sm-3" style={{ width: '32px', height: '32px', padding: '0' }} src={Config.LOCAL_URL+ '/images/' + this.props.account.avatar} alt="" />
                                            <div className="col-sm-9" style={{ marginTop: '7px' }}>
                                                <Link to={`book/${noti.book_id}/detail`} style={{ color: 'black' }}  onClick={() => this.onRemoveNoti(noti.id)}>
                                                    Your book have approved
                                                </Link>
                                            </div>
                                        </div>
                                    ) : (
                                        <div></div>
                                    )}
                                    <div style={{ display: 'none' }}>{count++}</div>
                                </div>
                            ) : (
                                <div></div>
                            )}
                        </div>
            })
        }
        
        return (
            <div>
                <div className="header-bot">
                    <div className="header-bot_inner_wthreeinfo_header_mid">
                        <div className="col-md-4 logo_agile">
                            <h1>
                                <Link to="/" className="scroller">
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
                                {auth.id ? (
                                    <li style={{ height: '17px' }}>
                                        <div style={{ width: '170px' }}>
                                            <div className="UTT-noti-number">
                                                <span style={{ marginRight: '0', fontSize: '13px' }}>{count}</span>
                                            </div>  
                                            <div className="dropdown">
                                                <a className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i className="fa fa-bell-o" aria-hidden="true" style={{ fontSize: '20px', color: 'white' }}></i>
                                                </a>
                                                <ul className="dropdown-menu dropdown-carts" aria-labelledby="dropdownMenuLink" style={{ paddingLeft: '12px', width:'400px',border: '1px solid #d7d7d7', borderRadius: '4px', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)', font: '15px/normal arial, helvetica', maxHeight: '450px !important',  position: 'relative!important', left: '-500px!important', marginLeft: '300px' }}>
                                                    <div style={{ color: 'black' }}>
                                                        {count > 0 ? (
                                                            <div>{ listNoti }</div>
                                                        ) : (
                                                            <div>No notifications</div>
                                                        )}
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                ) : (
                                    <span></span>
                                )}
                                {auth.id ? (
                                    <li>
                                        <div className="dropdown">
                                            <a style={{color: 'white'}} className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img width="20" src="https://images.viblo.asia/avatar/398ff412-f7d3-4e32-85b3-50efae907d6b.png" alt=""/> {auth.email}
                                            </a>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{ paddingLeft: '12px' }}>
                                                <Link to={`/user/profile`} className="dropdown-item scroller" style={{color: 'black', cursor: 'pointer', fontSize: '15px'}}>
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
                                            <a data-toggle="modal" data-target="#myModal1">
                                                <span className="fa fa-unlock-alt" aria-hidden="true"></span> Sign In 
                                            </a>
                                        </li>
                                        <li>
                                            <a data-toggle="modal" data-target="#myModal2">
                                                <span className="fa fa-pencil-square-o" aria-hidden="true"></span> Sign Up 
                                            </a>
                                        </li>
                                    </span>
                                )}
                            </ul>
                            <div className="agileits_search">
                                <form action="" method="post">
                                    <input name="Search" type="search" onChange={this.onSearch} placeholder="How can we help you today?" required="" />
                                    {/* <button type="button" className="btn btn-default" aria-label="Left Align">
                                    <span className="fa fa-search" aria-hidden="true"> </span>
                                    </button> */}
                                </form>
                                {listBooks}
                            </div>
                            <div className="top_nav_right">
                                <div className="wthreecartaits wthreecartaits2 cart cart box_1" style={{ width: '160px' }}>
                                    {carts.length > 0 && auth.id ? (
                                        <div className="UTT-cart-number">
                                            <span>{carts.length}</span>
                                        </div>
                                    ) : (
                                        <span></span>
                                    )}
                                    <div className="dropdown">
                                        <a className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fa-cart-arrow-down" aria-hidden="true" style={{ fontSize: '40px', color: 'white' }}></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-carts" aria-labelledby="dropdownMenuLink" style={{ height: '400px', overflow: 'auto', paddingLeft: '12px', width:'326px',border: '1px solid #d7d7d7', borderRadius: '4px', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)', font: '15px/normal arial, helvetica', maxHeight: '450px !important',  position: 'relative!important', left: '-500px!important' }}>
                                            {carts.length > 0 && auth.id ? ( 
                                                <div>
                                                    <span> {listCarts}</span>
                                                    <hr />
                                                    <Link to='/checkout' className="scroller" id="checkout" style={{marginLeft: '55px'}}> <button className="minicartk-submit">Check out & Payment</button> </Link>
                                                </div>
                                            ) : (
                                                <span>Your shopping cart is empty</span>
                                            )}
                                        </ul>
                                    </div>
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
        },
        onFetchUser: (token) => {
            dispatch(actFetchUserRequest(token));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
