import React, { Component } from 'react';
import BreadCrumb from '../../Sections/Breadcrumb';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmpty } from 'validator';
import * as Config from '../../../constants/Config';
import axios from 'axios';
import swal from 'sweetalert';

const required = (value) => {
    if (isEmpty(value)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
}

const number = (value) => {
    if (isNaN(value) !== false) {
        return <small className="form-text text-danger">Phone must be number</small>;
    }
}

class Payment extends Component {

    constructor(props){
        super(props);
        this.state = {
            orderId: '',
            number_card: '',
            cvc: '',
            exp_month: '',
            exp_year: ''

        };
    }
    componentDidMount() {
        const isLogin = localStorage.getItem('userId');
        isLogin === '' && this.props.history.push('/');
    }

    componentWillMount() {
        var { match } = this.props;
        if (match) { // update
            var orderId = match.params.id;
            this.setState({
                orderId: orderId
            })
        }
    }

    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
            exp_month: this.refs.exp_month.value,
            exp_year: this.refs.exp_year.value,
            
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.form.validateAll();
        if ( this.checkBtn.context._errors.length === 0 ) {
            var { orderId, number_card, cvc, exp_month, exp_year } = this.state;
            var data = new FormData()
            data.append("orderId", orderId);
            data.append("number_card", number_card);
            data.append("cvc", cvc);
            data.append("exp_month", exp_month);
            data.append("exp_year", exp_year);

            axios.put(Config.API_URL + `/orders/${orderId}`, data).then(res => {
                // const userId = this.props.account.id;
                this.props.history.push(`/user/profile`);
                swal("Good job!", "You clicked the button!", "success");
            });
        }
    }

    render() {
        const auth = this.props.account;;

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
                        <div id="payment">
                            <br />
                            <div className="form-group col-sm-6 col-xs-12">
                                <label  className="blankLabel"></label>
                                <ul className="list-inline">
                                    <li><a ><img src="http://framgia-travel.herokuapp.com/images/img_sites/booking/master-card.jpg" alt="" /></a></li>
                                    <li><a ><img src="http://framgia-travel.herokuapp.com/images/img_sites/booking/discover.jpg" alt="" /></a></li>
                                    <li><a ><img src="http://framgia-travel.herokuapp.com/images/img_sites/booking/visa.jpg" alt="" /></a></li>
                                    <li><a ><img src="http://framgia-travel.herokuapp.com/images/img_sites/booking/paypal.jpg" alt="" /></a></li>
                                </ul>
                            </div>
                            <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                                <div className="form-group col-sm-6 col-xs-12">
                                    <label >Card Number</label>
                                    <Input 
                                        ref="number_card"
                                        type="text" 
                                        className="form-control" 
                                        name="number_card" 
                                        // value="4242424242424242" 
                                        validations={[required, number]}
                                        onChange={this.onChangeHandler}
                                    />
                                </div>
                                <div className="form-group col-sm-6 col-xs-12">
                                    <label >CVC</label>
                                    <Input 
                                        type="text" 
                                        className="form-control" 
                                        name="cvc" 
                                        // value="314" 
                                        validations={[required]}
                                        onChange={this.onChangeHandler}
                                    />
                                </div>
                                <div className="form-group col-sm-6 col-xs-12">
                                    <label  className="blankLabel">Expiration Month</label>
                                    <div className="bookingDrop">
                                        <select 
                                            ref="exp_month"
                                            name="exp_month" 
                                            className="form-control" 
                                            validations={[required]}
                                            onChange={this.onChangeHandler}
                                        >
                                            <option value="0">Month</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group col-sm-6 col-xs-12">
                                    <label >Expiration Year</label>
                                    <div className="">
                                        <select 
                                            ref="exp_year"
                                            name="exp_year"
                                            className="form-control" 
                                            validations={[required]}
                                            onChange={this.onChangeHandler}
                                        >
                                            <option value="0">Year</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="checkbox col-xs-12">
                                    <label>
                                    <input type="checkbox" />I will agree to UTT Book Shop
                                    <a >Term &amp; Condition</a>
                                    </label>
                                </div>
                                <div className="col-xs-12">
                                    <div className="buttonArea galleryBtnArea">
                                        <ul className="list-inline">
                                            <li>
                                                <div className="active nav nav-tab" role="tablist">
                                                    <Link to={`/user/${auth.id}/profile`} className="btn buttonTransparent btn-back" aria-expanded="true">
                                                    Back
                                                    </Link>
                                                </div>
                                            </li>
                                            <li className="pull-right">
                                                <button type="submit" id="btnt" className="btn buttonTransparent btn-payment">
                                                    Payment
                                                </button>
                                                <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        account: state.account,

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        //
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Payment));
