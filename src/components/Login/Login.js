import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';
import { withRouter } from 'react-router';
import axios from 'axios';
import * as Config from '../../constants/Config';
import { connect } from 'react-redux';
import { actFetchUserRequest } from '../../actions/Users';
import { actFetchCartsRequest } from '../../actions/Carts';
import jquery from 'jquery';
import { database } from '../../constants/firebase';

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

const minLength = (value) => {
    if (value.trim().length < 6) {
        return <small className="form-text text-danger">Password must be at least 6 characters long</small>;
    }
}

class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
            emailExist: ''
        };
    }

    componentWillMount() {
        const token = localStorage.getItem('token');
        if (token) {
            this.props.onFetchUser(token);
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            emailExist: ''
        })
       
    }

    onSubmit(e){
        e.preventDefault();
        this.form.validateAll();

        if ( this.checkBtn.context._errors.length === 0 ) {
            const {email , password} = this.state ;
          
            axios.post(Config.API_URL + '/login', {
                email, 
                password
            })
            .then(response=> {
                if(response.data.message) {
                    this.setState({
                        emailExist: response.data.message
                    });
 
                } else {
                    const data = response.data.token;
                    localStorage.setItem('token', data);
                    const token = localStorage.getItem('token');
                    const userId = response.data.user.id;
                    localStorage.setItem('userId', userId);
                    this.props.fetchAllCarts(userId);
                    const time = new Date().toLocaleDateString();
                    const onlineId = database.ref('onlines').push({
                        userId: userId + '',
                        full_name: response.data.user.full_name + '',
                        avatar: response.data.user.avatar + '',
                        time: time
                    });
                    const key = onlineId.key;
                    localStorage.setItem('onlineId', key)
            
                    if (token) {
                        this.props.onFetchUser(token);
                    }
                    jquery('.close').click();
                }
            })

        }
       
    }

    render() {
        const checkRequest = () => {
            if (this.state.emailExist.length > 0) {
                return <small className="form-text text-danger">invalid_email_or_password</small>;
            }
        }

        return (
            <div>
                <div className="modal fade" id="myModal1" tabIndex="-1" role="dialog" style={{ display: 'none' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            <div className="modal-body modal-body-sub_agile">
                                <div className="main-mailposi">
                                    <span className="fa fa-envelope-o" aria-hidden="true"></span>
                                </div>
                                <div className="modal_body_left modal_body_left1">
                                    <h3 className="agileinfo_sign">Sign In </h3>
                                    <p>
                                        Sign In now, Let's start your UTT Shop. Don't have an account?
                                        <a  data-toggle="modal" data-target="#myModal2" id="sign-up-click">
                                        Sign Up Now</a>
                                    </p>
                                    <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                                        <div className="styled-input agile-styled-input-top">
                                            <Input 
                                                name="email" 
                                                onChange={this.onChangeHandler}
                                                type="text" 
                                                placeholder="Email"
                                                className="form-control" 
                                                validations={[required, email]}
                                            />
                                        </div>
                                        <div className="styled-input">
                                            <Input 
                                                name="password" 
                                                onChange={this.onChangeHandler}
                                                type="password" 
                                                placeholder="Password"
                                                className="form-control" 
                                                validations={[required, minLength, checkRequest]}
                                            />
                                        </div>
                                        {/* <label>{emailExist}</label> */}
                                        <input type="submit" value="Sign In" />
                                        <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                                    </Form>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users : state.users,
        account: state.account,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchUser: (token) => {
            dispatch(actFetchUserRequest(token));
        },
        fetchAllCarts: (userId) => {
            dispatch(actFetchCartsRequest(userId));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));

