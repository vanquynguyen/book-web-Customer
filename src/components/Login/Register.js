import React, { Component } from 'react';

class Register extends Component {
    
    constructor() {
        super();
        this.state = {
          
        };
      
    }

    render() {
       
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
                                        Come join the Grocery Shoppy! Let's set up your Account.
                                    </p>
                                    <form action="#" method="post">
                                        <div className="styled-input agile-styled-input-top">
                                            <input type="text" placeholder="Name" name="Name" required="" />
                                        </div>
                                        <div className="styled-input">
                                            <input type="email" placeholder="E-mail" name="Email" required="" />
                                        </div>
                                        <div className="styled-input">
                                            <input type="password" placeholder="Password" name="password" id="password1" required="" />
                                        </div>
                                        <div className="styled-input">
                                            <input type="password" placeholder="Confirm Password" name="Confirm Password" id="password2" required="" />
                                        </div>
                                        <input type="submit" value="Sign Up" />
                                    </form>
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
