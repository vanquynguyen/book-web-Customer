import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';

// import { actAddUserRequest } from '../../actions/Users';
// import { connect } from 'react-redux';
import swal from 'sweetalert';
import axios from 'axios';
import * as Config from '../../constants/Config';

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

class Register extends Component {
    
    constructor() {
        super();
        this.state = {
            full_name: '',
            email: '',
            password: '',
            comfirm_password: '',
            emailExist: ''
        };
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            emailExist: ''
        })
       
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.form.validateAll();
        if ( this.checkBtn.context._errors.length === 0 ) {
            var { full_name, email, password } = this.state;
            var user = new FormData();
            user.append("full_name", full_name);
            user.append("email", email);
            user.append("password", password);
            axios.post(Config.API_URL + '/register', user).then(res => {
                if(res.data === 403) {
                    this.setState({
                        emailExist: 403
                    });
                    
                    // swal("Email already exist!", "You clicked the button!", "warning");
                } else {
                    // this.props.onAddUser(user);
                    swal("Register Success!", "You clicked the button!", "success");
                    // this.props.history.push('/') ;
                }
               
            });
        }
    }

    render() {
        const confirmPass = () => {
            if (this.state.password !== this.state.comfirm_password) {
                return <small className="form-text text-danger">Password must be confirmed</small>;
            }
        } 

        const emailExist = () => {
            if (this.state.emailExist === 403) {
                return <small className="form-text text-danger">Email already exist</small>;
            }
        }

        return (
            <div>
                <div className="modal fade in" id="myModal2" tabIndex="-1" role="dialog" style={{ display: 'none' }}>
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
                                    <h3 className="agileinfo_sign">Sign Up</h3>
                                    <p>
                                        Come join the UTT SHOP! Let's set up your Account.
                                    </p>
                                    <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                                        <div className="styled-input agile-styled-input-top">
                                            <Input 
                                                name="full_name" 
                                                onChange={this.onChangeHandler}
                                                type="text" 
                                                placeholder="Name"
                                                className="form-control" 
                                                validations={[required]}
                                            />
                                        </div>
                                        <div className="styled-input">
                                            <Input 
                                                name="email" 
                                                onChange={this.onChangeHandler}
                                                type="text" 
                                                placeholder="Email"
                                                className="form-control" 
                                                validations={[required, email, emailExist]}
                                            />
                                        </div>
                                        <div className="styled-input">
                                            <Input 
                                                name="password" 
                                                onChange={this.onChangeHandler}
                                                type="password" 
                                                placeholder="Password"
                                                className="form-control" 
                                                validations={[required, minLength]}
                                            />
                                        </div>
                                        <div className="styled-input">
                                             <Input 
                                                name="comfirm_password" 
                                                onChange={this.onChangeHandler}
                                                type="password" 
                                                placeholder="Comfirmation Password"
                                                className="form-control" 
                                                validations={[required, minLength, confirmPass]}
                                            />
                                        </div>
                                        <input type="submit" value="Sign Up" />
                                        <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                                    </Form>
                                    <p>
                                        <a >By clicking register, I agree to your terms</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Register;
