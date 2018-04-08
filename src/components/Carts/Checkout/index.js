import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Config from '../../../constants/Config';
import axios from 'axios';
import swal from 'sweetalert';
import { actFetchCartsRequest, actDeleteCartRequest } from '../../../actions/Carts/index';

class checkOut extends Component {

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
                    <img src="http://api-book.framgia.vn/image//2018/03/book/022cc11520a575b3ed61e0ccf0084401.jpg?p=thumbnail_web&s=1e5d93cf3f49841ae346eb30d0061468" alt=" " className="img-responsive" />
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
            <div className="privacy">
                <div className="container">
                    <h3 className="tittle-w3l">Checkout
                        <span className="heading-style">
                        <i></i>
                        <i></i>
                        <i></i>
                        </span>
                    </h3>
                    <div className="checkout-right">
                        <h4>Your shopping cart contains:
                            <span style={{ marginLeft: '10px' }}>{carts.length} Products</span>
                        </h4>
                        <div className="table-responsive">
                            <table className="timetable_sub">
                                <thead>
                                    <tr>
                                        <th>SL No.</th>
                                        <th>Product</th>
                                        <th>Quality</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listCarts}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="checkout-left">
                        <div className="address_form_agile">
                            <h4>Add a new Details</h4>
                            <form action="payment.html" method="post" className="creditly-card-form agileinfo_form">
                                <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                                    <div className="information-wrapper">
                                        <div className="first-row">
                                            <div className="controls">
                                                <input className="billing-address-name" type="text" name="name" placeholder="Full Name" required="" />
                                            </div>
                                            <div className="w3_agileits_card_number_grids">
                                                <div className="w3_agileits_card_number_grid_left">
                                                    <div className="controls">
                                                        <input type="text" placeholder="Mobile Number" name="number" required="" />
                                                    </div>
                                                </div>
                                                <div className="w3_agileits_card_number_grid_right">
                                                    <div className="controls">
                                                        <input type="text" placeholder="Landmark" name="landmark" required="" />
                                                    </div>
                                                </div>
                                                <div className="clear"> </div>
                                            </div>
                                            <div className="controls">
                                                <input type="text" placeholder="Town/City" name="city" required="" />
                                            </div>
                                            <div className="controls">
                                                <select className="option-w3ls">
                                                    <option>Select Address type</option>
                                                    <option>Office</option>
                                                    <option>Home</option>
                                                    <option>Commercial</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button className="submit check_out">Delivery to this Address</button>
                                    </div>
                                </div>
                            </form>
                            <div className="checkout-right-basket">
                                <a>Make a Payment
                                <span className="fa fa-hand-o-right" aria-hidden="true"></span>
                                </a>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(checkOut);