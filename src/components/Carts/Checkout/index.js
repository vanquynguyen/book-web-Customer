import React, { Component } from 'react';
import BreadCrumb from '../../Sections/Breadcrumb';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Config from '../../../constants/Config';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';
import { withRouter } from 'react-router';
import axios from 'axios';
import swal from 'sweetalert';
import { actFetchCartsRequest, actDeleteCartRequest } from '../../../actions/Carts/index';


const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
}

const email = (value) => {
    if (!isEmail(value)) {
        return <small className="form-text text-danger">Invalid email format</small>;
    }
}

const number = (value) => {
    if (isNaN(value) !== false) {
        return <small className="form-text text-danger">Phone must be number</small>;
    }
}

const minPhoneLength = (value) => {
    if (value.trim().length < 10) {
        return <small className="form-text text-danger">Phone must be at least 10 characters long</small>;
    }
}

class checkOut extends Component {

    constructor(props){
        super(props);
        this.state = {
            user_id: '',
            full_name: '',
            email: '',
            phone: '',
            gender: '',
            address: '',
            country: '',
            method: '',
            classPayment: '',
        };
    }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        const userId = localStorage.getItem('userId');
        this.props.fetchAllCarts(userId); 
    }

    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
            user_id: this.props.account.id,
            gender: this.refs.gender.value,
            country: this.refs.country.value,
            method: this.refs.method.value
            
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { carts } = this.props
        var totalPrice = 0;
        for (var i = 0; i < carts.length; i++) {
            totalPrice += carts[i].price
        }

        this.form.validateAll();
        if ( this.checkBtn.context._errors.length === 0 ) {
            var { user_id, full_name, email, phone, gender, address, country, method } = this.state;
            var data = new FormData()
            data.append("user_id", user_id);
            data.append("full_name", full_name);
            data.append("email", email);
            data.append("phone", phone);
            data.append("gender", gender);
            data.append("address", address);
            data.append("country", country);
            data.append("method", method);
            data.append("total_price", totalPrice);

            axios.post(Config.API_URL + '/orders', data).then(res => {
                swal("Good job!", "You clicked the button!", "success");
                const userId = localStorage.getItem('userId');
                this.props.fetchAllCarts(userId);
                if (res.data.status === 1) {
                    this.props.history.push(`/user/${user_id}/profile`);
                } else {
                    const orderId = res.data.orderId;
                    this.props.history.push(`/order/${orderId}/payment`);
                }
                this.setState({
                    classPayment: 'scroller'
                })
            });
        }
    }

    onMinus = (cart) => {

        const userId = this.props.account.id;
        var amountCart = cart.amount - 1;
        var price = cart.price/2;

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
        const classPayment = this.state.classPayment;
        const carts = this.props.carts;
        var totalPrice = 0;
        for (var i = 0; i < carts.length; i++) {
            totalPrice += carts[i].price
        }
       
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
                        <h3 className="tittle-w3l">Checkout
                            <span className="heading-style">
                            <i></i>
                            <i></i>
                            <i></i>
                            </span>
                        </h3>
                        <div className="checkout-right">
                            <h4>Your shopping cart contains:
                                <span style={{ marginLeft: '10px' }}>{carts.length} Products</span> {this.props.totalPrice}
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
                                Price Total: $ {totalPrice}
                            </div>
                        </div>
                        <div className="checkout-left">
                            <div className="address_form_agile">
                                <h4>Add a new Details</h4>
                                <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }} className="creditly-card-form agileinfo_form">
                                    <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                                        <div className="information-wrapper">
                                            <div className="first-row">
                                                <div className="controls">
                                                    <Input 
                                                        className="billing-address-name" 
                                                        type="text" 
                                                        name="full_name" 
                                                        placeholder="Full Name" 
                                                        validations={[required]}
                                                        onChange={this.onChangeHandler}
                                                    />
                                                </div>
                                                <div className="controls">
                                                    <Input 
                                                        className="billing-address-name" 
                                                        type="email" 
                                                        name="email" 
                                                        placeholder="Email" 
                                                        validations={[required, email]}
                                                        onChange={this.onChangeHandler}
                                                    />
                                                </div>
                                                <div className="w3_agileits_card_number_grids">
                                                    <div className="w3_agileits_card_number_grid_left">
                                                        <div className="controls">
                                                            <Input 
                                                                type="text" 
                                                                placeholder="Mobile Number" 
                                                                name="phone" 
                                                                validations={[required, minPhoneLength, number]}
                                                                onChange={this.onChangeHandler}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="controls">
                                                        <select 
                                                            className="option-w3ls"
                                                            ref="gender"
                                                            onChange={this.onChangeHandler}
                                                            validations={[required]}
                                                        >
                                                            <option>Select Gender</option>
                                                            <option value="0">Male</option>
                                                            <option value="1">Female</option>
                                                        </select>
                                                    </div>
                                                    <div className="w3_agileits_card_number_grid_right">
                                                        <div className="controls">
                                                            <Input 
                                                                ref="address"
                                                                type="text" 
                                                                placeholder="Address" 
                                                                name="address" 
                                                                validations={[required]}
                                                                onChange={this.onChangeHandler}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="controls">
                                                    <select 
                                                        className="option-w3ls"
                                                        ref="country"
                                                        onChange={this.onChangeHandler}
                                                        validations={[required]}
                                                    >
                                                        <option>Select Country</option>
                                                        <option value="0">Viet Nam</option>
                                                        <option value="1">Overseas</option>
                                                        <option value="1">Foreign</option>
                                                    </select>
                                                    </div>
                                                    <div className="clear"> </div>
                                                </div>
                                               
                                                <h2>Payment methods</h2>
                                                <hr />
                                                <div className="controls">
                                                    <select 
                                                        className="option-w3ls"
                                                        ref="method"
                                                        validations={[required]}
                                                        onChange={this.onChangeHandler}
                                                    >
                                                        <option>Select Method Payment</option>
                                                        <option value="0">Cash on delivery (COD)</option>
                                                        <option value="1">Credit/Debit(new)</option>
                                                    </select>
                                                </div>
                                                <hr />
                                                <div className="checkout-right-basket">
                                                    <button type="submit" className={ classPayment } style={{ cursor: 'pointer' }}>Make a Payment
                                                        <span className="fa fa-hand-o-right" aria-hidden="true"></span>
                                                    </button>
                                                </div>
                                                <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(checkOut));