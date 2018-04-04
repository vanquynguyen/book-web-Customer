import React, { Component } from 'react';

class Login extends Component {
    
    constructor() {
        super();
        this.state = {
          
        };
      
    }

    render() {
       
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
                                        Sign In now, Let's start your Grocery Shopping. Don't have an account?
                                        <a  data-toggle="modal" data-target="#myModal2" id="sign-up-click">
                                        Sign Up Now</a>
                                    </p>
                                    <form action="#" method="post">
                                        <div className="styled-input agile-styled-input-top">
                                            <input type="text" placeholder="User Name" name="Name" required="" />
                                        </div>
                                        <div className="styled-input">
                                            <input type="password" placeholder="Password" name="password" required="" />
                                        </div>
                                        <input type="submit" value="Sign In" />
                                    </form>
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

export default Login;
