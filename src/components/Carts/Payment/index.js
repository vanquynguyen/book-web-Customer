import React, { Component } from 'react';
import BreadCrumb from '../../Sections/Breadcrumb';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Config from '../../../constants/Config';
import axios from 'axios';
import swal from 'sweetalert';
import { actFetchCartsRequest, actDeleteCartRequest } from '../../../actions/Carts/index';

class Payment extends Component {

    constructor(props){
        super(props);
        this.state = {
            carts: {},
            amount: {},
            price: {}
        };
    }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        const userId = localStorage.getItem('userId');
        this.props.fetchAllCarts(userId); 
    }

    onMinus = (cart) => {
        // const amountBook = response.data.amount;
        const userId = this.props.account.id;
        var amountCart = cart.amount - 1;
        var price = cart.price/2;
        // parseInt
        const data = {
            'amount' : amountCart,
            'price' : price
        }
        if (amountCart > 0) {
            axios.put(Config.API_URL+ `/carts/${cart.id}`, data).then(response => {
                this.props.fetchAllCarts(userId);
            });
        } else {
            swal({
                title: "Quantity must be greater than 0!",
                text: "You clicked the button!",
                icon: "warning",
              });
        }
    }

    onPlus = (cart) => {
        axios.get(Config.API_URL+ `/books/${cart.book_id}`).then(response => {
            const amountBook = response.data.amount;
            const userId = this.props.account.id;
            var amountCart = cart.amount + 1;
            var price = cart.price*2;
            // parseInt
            const data = {
                'amount' : amountCart,
                'price' : price
            }
            if (amountCart <= amountBook) {
                axios.put(Config.API_URL+ `/carts/${cart.id}`, data).then(response => {
                    this.props.fetchAllCarts(userId);
                });
            } else {
                swal({
                    title: "Too many amount allowed!",
                    text: "You clicked the button!",
                    icon: "warning",
                  });
            }
        })
    }

    onDelete = (id) => {
        console.log(id)
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

    render() {
        const auth = this.props.account;
        const carts = this.props.carts;
        const listCarts = carts.map((cart, index) =>
            <tr className="rem1" key={index}>
                <td className="invert">{index + 1}</td>
                <td className="invert-image">
                    <a>
                    <img src={Config.LOCAL_URL + '/images/books/' + cart.image} alt="" style={{ width: '64px'}} className="img-responsive" />
                    </a>
                </td>
                <td className="invert">
                    <div className="quantity">
                        <div className="quantity-select">
                            <div className="entry value-minus" onClick={() => this.onMinus(cart)}>&nbsp;</div>
                            <div className="entry value">
                                <span>{cart.amount}</span>
                            </div>
                            <div className="entry value-plus active" onClick={() => this.onPlus(cart)}>&nbsp;</div>
                        </div>
                    </div>
                </td>
                <td className="invert">{cart.title}</td>
                <td className="invert">${cart.price}</td>
                <td className="invert">
                    <div className="rem">
                        <div className="close1" onClick={() => this.onDelete(cart.id)}></div>
                    </div>
                </td>
            </tr>
        );

        return (
            <div>
                <BreadCrumb name="Checkout"/>
                <div className="privacy">
                    <div className="container">
                        <h3 className="tittle-w3l">Payment
                            <span className="heading-style">
                            <i></i>
                            <i></i>
                            <i></i>
                            </span>
                        </h3>
                        {/* <div className="checkout-right">
                            <div id="parentHorizontalTab" style={{ display: 'block', width: '100%', margin: '0px' }}>
                                <ul className="resp-tabs-list hor_1">
                                    <li className="resp-tab-item hor_1" aria-controls="hor_1_tab_item-0" role="tab" style={{ backgroundColor: 'rgb(245, 245, 245)', borderColor: 'rgb(193, 193, 193)'}}>Cash on delivery (COD)</li>
                                    <li className="resp-tab-item hor_1" aria-controls="hor_1_tab_item-1" role="tab" style={{ backgroundColor: 'rgb(245, 245, 245)', borderColor: 'rgb(193, 193, 193)'}}>Credit/Debit</li>
                                    <li className="resp-tab-item hor_1" aria-controls="hor_1_tab_item-2" role="tab" style={{ backgroundColor: 'rgb(245, 245, 245)', borderColor: 'rgb(193, 193, 193)'}}>Net Banking</li>
                                    <li className="resp-tab-item hor_1 resp-tab-active" aria-controls="hor_1_tab_item-3" role="tab" style={{ backgroundColor: 'white', borderColor: 'rgb(193, 193, 193)' }}>Paypal Account</li>
                                </ul>
                                <div className="resp-tabs-container hor_1" style={{ borderColor: 'rgb(193, 193, 193)' }}>
                                    <h2 className="resp-accordion hor_1" role="tab" aria-controls="hor_1_tab_item-0" style={{ background: 'none rgb(245, 245, 245)', borderColor: 'rgb(193, 193, 193)' }}><span className="resp-arrow"></span>Cash on delivery (COD)</h2>
                                    <div className="resp-tab-content hor_1" aria-labelledby="hor_1_tab_item-0">
                                        <div className="vertical_post check_box_agile">
                                            <h5>COD</h5>
                                            <div className="checkbox">
                                                <div className="check_box_one cashon_delivery">
                                                    <label className="anim">
                                                    <input type="checkbox" className="checkbox" />
                                                    <span> We also accept Credit/Debit card on delivery. Please Check with the agent.</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="resp-accordion hor_1" role="tab" aria-controls="hor_1_tab_item-1" style={{ background: 'none rgb(245, 245, 245)', borderColor: 'rgb(193, 193, 193)' }}><span className="resp-arrow"></span>Credit/Debit</h2>
                                    <div className="resp-tab-content hor_1" aria-labelledby="hor_1_tab_item-1">
                                        <form action="#" method="post" className="creditly-card-form agileinfo_form">
                                            <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                                                <div className="credit-card-wrapper">
                                                    <div className="first-row form-group">
                                                        <div className="controls">
                                                            <label className="control-label">Name on Card</label>
                                                            <input className="billing-address-name form-control" type="text" name="name" placeholder="John Smith" />
                                                        </div>
                                                        <div className="w3_agileits_card_number_grids">
                                                            <div className="w3_agileits_card_number_grid_left">
                                                                <div className="controls">
                                                                    <label className="control-label">Card Number</label>
                                                                    <input className="number credit-card-number form-control" type="text" name="number"  placeholder="•••• •••• •••• ••••" />
                                                                </div>
                                                            </div>
                                                            <div className="w3_agileits_card_number_grid_right">
                                                                <div className="controls">
                                                                    <label className="control-label">CVV</label>
                                                                    <input className="security-code form-control" type="text" name="security-code" placeholder="•••" />
                                                                </div>
                                                            </div>
                                                            <div className="clear"> </div>
                                                        </div>
                                                        <div className="controls">
                                                            <label className="control-label">Expiration Date</label>
                                                            <input className="expiration-month-and-year form-control" type="text" name="expiration-month-and-year" placeholder="MM / YY" />
                                                        </div>
                                                    </div>
                                                    <button className="submit">
                                                    <span>Make a payment </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <h2 className="resp-accordion hor_1" role="tab" aria-controls="hor_1_tab_item-2" style={{ background: 'none rgb(245, 245, 245)', borderColor: 'rgb(193, 193, 193)' }}><span className="resp-arrow"></span>Net Banking</h2>
                                    <div className="resp-tab-content hor_1" aria-labelledby="hor_1_tab_item-2">
                                        <div className="vertical_post">
                                            <form action="#" method="post">
                                                <h5>Select From Popular Banks</h5>
                                                <div className="swit-radio">
                                                    <div className="check_box_one">
                                                        <div className="radio_one">
                                                            <label>
                                                            <input type="radio" name="radio" checked="" />
                                                            <i></i>Syndicate Bank</label>
                                                        </div>
                                                    </div>
                                                    <div className="check_box_one">
                                                        <div className="radio_one">
                                                            <label>
                                                            <input type="radio" name="radio" />
                                                            <i></i>Bank of Baroda</label>
                                                        </div>
                                                    </div>
                                                    <div className="check_box_one">
                                                        <div className="radio_one">
                                                            <label>
                                                            <input type="radio" name="radio" />
                                                            <i></i>Canara Bank</label>
                                                        </div>
                                                    </div>
                                                    <div className="check_box_one">
                                                        <div className="radio_one">
                                                            <label>
                                                            <input type="radio" name="radio" />
                                                            <i></i>ICICI Bank</label>
                                                        </div>
                                                    </div>
                                                    <div className="check_box_one">
                                                        <div className="radio_one">
                                                            <label>
                                                            <input type="radio" name="radio" />
                                                            <i></i>State Bank Of India</label>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>
                                                <h5>Or Select Other Bank</h5>
                                                <div className="section_room_pay">
                                                    <select className="year">
                                                        <option value="">=== Other Banks ===</option>
                                                        <option value="ALB-NA">Allahabad Bank NetBanking</option>
                                                        <option value="ADB-NA">Andhra Bank</option>
                                                        <option value="BBK-NA">Bank of Bahrain and Kuwait NetBanking</option>
                                                        <option value="BBC-NA">Bank of Baroda Corporate NetBanking</option>
                                                        <option value="BBR-NA">Bank of Baroda Retail NetBanking</option>
                                                        <option value="BOI-NA">Bank of India NetBanking</option>
                                                        <option value="BOM-NA">Bank of Maharashtra NetBanking</option>
                                                        <option value="CSB-NA">Catholic Syrian Bank NetBanking</option>
                                                        <option value="CBI-NA">Central Bank of India</option>
                                                        <option value="CUB-NA">City Union Bank NetBanking</option>
                                                        <option value="CRP-NA">Corporation Bank</option>
                                                        <option value="DBK-NA">Deutsche Bank NetBanking</option>
                                                        <option value="DCB-NA">Development Credit Bank</option>
                                                        <option value="DC2-NA">Development Credit Bank - Corporate</option>
                                                        <option value="DLB-NA">Dhanlaxmi Bank NetBanking</option>
                                                        <option value="FBK-NA">Federal Bank NetBanking</option>
                                                        <option value="IDS-NA">Indusind Bank NetBanking</option>
                                                        <option value="IOB-NA">Indian Overseas Bank</option>
                                                        <option value="ING-NA">ING Vysya Bank (now Kotak)</option>
                                                        <option value="JKB-NA">Jammu and Kashmir NetBanking</option>
                                                        <option value="JSB-NA">Janata Sahakari Bank Limited</option>
                                                        <option value="KBL-NA">Karnataka Bank NetBanking</option>
                                                        <option value="KVB-NA">Karur Vysya Bank NetBanking</option>
                                                        <option value="LVR-NA">Lakshmi Vilas Bank NetBanking</option>
                                                        <option value="OBC-NA">Oriental Bank of Commerce NetBanking</option>
                                                        <option value="CPN-NA">PNB Corporate NetBanking</option>
                                                        <option value="PNB-NA">PNB NetBanking</option>
                                                        <option value="RSD-DIRECT">Rajasthan State Co-operative Bank-Debit Card</option>
                                                        <option value="RBS-NA">RBS (The Royal Bank of Scotland)</option>
                                                        <option value="SWB-NA">Saraswat Bank NetBanking</option>
                                                        <option value="SBJ-NA">SB Bikaner and Jaipur NetBanking</option>
                                                        <option value="SBH-NA">SB Hyderabad NetBanking</option>
                                                        <option value="SBM-NA">SB Mysore NetBanking</option>
                                                        <option value="SBT-NA">SB Travancore NetBanking</option>
                                                        <option value="SVC-NA">Shamrao Vitthal Co-operative Bank</option>
                                                        <option value="SIB-NA">South Indian Bank NetBanking</option>
                                                        <option value="SBP-NA">State Bank of Patiala NetBanking</option>
                                                        <option value="SYD-NA">Syndicate Bank NetBanking</option>
                                                        <option value="TNC-NA">Tamil Nadu State Co-operative Bank NetBanking</option>
                                                        <option value="UCO-NA">UCO Bank NetBanking</option>
                                                        <option value="UBI-NA">Union Bank NetBanking</option>
                                                        <option value="UNI-NA">United Bank of India NetBanking</option>
                                                        <option value="VJB-NA">Vijaya Bank NetBanking</option>
                                                    </select>
                                                </div>
                                                <input type="submit" value="PAY NOW" />
                                            </form>
                                        </div>
                                    </div>
                                    <h2 className="resp-accordion hor_1 resp-tab-active" role="tab" aria-controls="hor_1_tab_item-3" style={{ background: 'none rgb(245, 245, 245)', borderColor: 'rgb(193, 193, 193)' }}><span className="resp-arrow"></span>Paypal Account</h2>
                                    <div className="resp-tab-content hor_1 resp-tab-content-active" aria-labelledby="hor_1_tab_item-3" style={{ display: 'block' }}>
                                        <div id="tab4" className="tab-grid" style={{ display: 'block' }}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img className="pp-img" src="images/paypal.png" alt="Image Alternative text" title="Image Title" />
                                                    <p>Important: You will be redirected to PayPal's website to securely complete your payment.</p>
                                                    <a className="btn btn-primary">Checkout via Paypal</a>
                                                </div>
                                                <div className="col-md-6 number-paymk">
                                                    <form className="cc-form">
                                                        <div className="clearfix">
                                                            <div className="form-group form-group-cc-number">
                                                                <label>Card Number</label>
                                                                <input className="form-control" placeholder="xxxx xxxx xxxx xxxx" type="text" />
                                                                <span className="cc-card-icon"></span>
                                                            </div>
                                                            <div className="form-group form-group-cc-cvc">
                                                                <label>CVV</label>
                                                                <input className="form-control" placeholder="xxxx" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="clearfix">
                                                            <div className="form-group form-group-cc-name">
                                                                <label>Card Holder Name</label>
                                                                <input className="form-control" type="text" />
                                                            </div>
                                                            <div className="form-group form-group-cc-date">
                                                                <label>Valid Thru</label>
                                                                <input className="form-control" placeholder="mm/yy" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="checkbox checkbox-small">
                                                            <label>
                                                            <input className="i-check" type="checkbox" checked="" />Add to My Cards</label>
                                                        </div>
                                                        <input type="submit" className="submit" value="Proceed Payment" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        books: state.books,
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


export default connect(mapStateToProps, mapDispatchToProps)(Payment);
