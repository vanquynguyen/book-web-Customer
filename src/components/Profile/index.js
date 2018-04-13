import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
// import swal from 'sweetalert';
import BooksList from './Books/BookListsPage';
import HistoryOrder from './Order/HistoryOrder';
import { actGetUserRequest } from '../../actions/Users/';
import { actCheckFollowRequest } from '../../actions/Follows';
// import axios from 'axios';
import * as Config from '../../constants/Config';
import { actFollowersRequest, actFollowingsRequest } from '../../actions/Follows';

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
           id: '',
           full_name: '',
           avatar: '',
           email: '',
           address: '',
           gender: '',
           openFollower: false,
           openFollowing: false,
           Followings: '',
           Followers: '',
           check: '',
        };
    }

    componentDidMount() {
        const id = localStorage.getItem('userId');
        this.props.onGetFollowers(id);
        this.props.onGetFollowings(id);
    }

    componentWillMount() {
        const id = localStorage.getItem('userId');
        this.props.onGetUser(id);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.usersEditing) {
            var {usersEditing} = nextProps;
            this.setState({
                id: usersEditing.id,
                full_name: usersEditing.full_name,
                avatar: usersEditing.avatar,
                email: usersEditing.email,
                address: usersEditing.address,
                gender: usersEditing.gender,
            })
        }

        if(nextProps && nextProps.Followings) {
            var {Followings} = nextProps;
            this.setState({
                Followings: Followings
            })
        }

        if(nextProps && nextProps.Followers) {
            var {Followers} = nextProps;
            this.setState({
                Followers: Followers
            })
        }
    }

    onOpenModalFollower = () => {
        this.setState({ openFollower: true });
    };

    onOpenModalFollowing = () => {
        this.setState({ 
            openFollowing: true
        });
    };
     
    onCloseModalFollower = () => {
        this.setState({ openFollower: false });
    };

    onCloseModalFollowing = () => {
        this.setState({ openFollowing: false });
    };

    render() {
      
        const openFollower = this.state.openFollower;
        const openFollowing = this.state.openFollowing;
        const Followings = this.state.Followings;
        const Followers = this.props.Followers;
        let listFollowings
        if (Followings.length > 0 ) {
            listFollowings = Followings.map((following, index) => 
                <div className="row" key={index} style={{ marginBottom: '10px' }}>
                    <div className="col-md-8">
                        <img src="http://localhost:8000/images/avatar.png" clasName="img-circle" width="50px" alt="" />
                        <span style={{ marginLeft: '5px' }}>{following.follower_user.full_name}</span>
                    </div>
                    <div className="col-md-4">
                        <Link to={`/user/${following.follower_user.id}`} className="scroller"><button className="btn" style={{ backgroundColor: '#ffb13b', color: 'white', fontWeight: 'bold' }}>Detail</button></Link>
                    </div>
                </div>
            )
        }

        let listFollowers
         if (Followers.length > 0 ) {
            listFollowers = Followers.map((follower, index) => 
                <div className="row" key={index} style={{ marginBottom: '10px' }}>
                    <div className="col-md-8">
                        <img src="http://localhost:8000/images/avatar.png" clasName="img-circle" width="50px" alt="" />
                        <span style={{ marginLeft: '5px' }}>{follower.following_user.full_name}</span>
                    </div>
                    <div className="col-md-4">
                        <Link to={`/user/${follower.following_user.id}`} className="scroller"><button onClick={this.follow} className="btn" style={{ marginTop: '10px', backgroundColor: '#ffb13b', color: 'white', fontWeight: 'bold' }}>Detail</button></Link>
                    </div>
                </div>
            )
        }
       
        return (
            <div style={{ height: 'auto' }}>
                <section className="relative fix m-bottom50 gray-bg" id="sc3">
                    <div className="hide-categoryIds" data-category-ids="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35"></div>
                    <div className="hide-userId" user-name="Nguyen Van Quy B" follow="unfollow" data-user-id="98"></div>
                    <div className="wrap_content">
                        <div className="prcover prgreen-bg">
                            <div className="space-25"></div>
                            <h1 className="text-white prhellofont" style={{ fontSize: '100px' }}>Hello there</h1>
                            <h1 className="text-white">I'm {this.state.full_name}</h1>
                        </div>
                        <div className="prheadline">
                            <div className="pravatar"><a href="/users/my_profile" className="">
                                <img className="img-circle pravatar-image img-responsive" src={Config.LOCAL_URL+ '/images/' + this.state.avatar} alt="Avatar" />
                                </a>
                            </div>
                            <div className="prheadlineinfo pull-right navbar-collapse">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li role="presentation" className="active">
                                        <a href="#manage-book" aria-controls="manage-book" role="tab" data-toggle="tab" aria-expanded="true">Manage Books</a>
                                    </li>
                                    {/* <li role="presentation" className="">
                                        <a href="#my-order" aria-controls="my-order" role="tab" data-toggle="tab" aria-expanded="false">Manage Order</a>
                                    </li> */}
                                    <li role="presentation" className="">
                                        <a href="#history-order" aria-controls="history-order" role="tab" data-toggle="tab" aria-expanded="false">History Order</a>
                                    </li>
                                    <li role="presentation" className="">
                                        <a href="#note" aria-controls="note" role="tab" data-toggle="tab" aria-expanded="false">Note</a>
                                    </li>
                                    <li role="presentation" className="">
                                        <a href="#comment" aria-controls="comment" role="tab" data-toggle="tab" aria-expanded="false">Comments</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="space-30"></div>
                                <div className="text-center">
                                    <h2><strong>{ this.state.full_name }</strong></h2>
                                </div>
                                <hr className="hr-profile"/>
                                <div className="title-bar"></div>
                                <div>
                                    <div className="book-content book-content-profile">
                                        <div className="book-details-item">
                                            <h4 className="tip-left">Email: </h4>
                                            <p className="">{ this.state.email }</p>
                                            <h4 className="tip-left">Phone: </h4>
                                            <p className=""></p>
                                            <h4 className="tip-left">Code: </h4>
                                            <p className=""></p>
                                            <h4 className="tip-left">Address: </h4>
                                            <p className="">{this.state.address}</p>
                                            <h4 className="tip-left">Follower: </h4>
                                            <p className=""><a onClick={this.onOpenModalFollower}>{Followers.length} people</a></p>
                                            <h4 className="tip-left">Following: </h4>
                                            <p className=""><a data-toggle="modal" data-target="#myModal123" onClick={this.onOpenModalFollowing}>{Followings.length} people</a></p>
                                            {/* <h4><a href="javascript:void(0);" data-toggle="modal" data-target="#favoritecategories"> <i className="icofont icofont-arrow-right"></i></a></h4> */}
                                        </div>
                                    </div>
                                </div>
                                <Modal open={openFollower} onClose={this.onCloseModalFollower} little>
                                    <h3>Follower</h3>
                                    <div className="modal-body modal-body-sub_agile">
                                        <div className="main-mailposi">
                                            <span className="fa fa-book" aria-hidden="true"></span>
                                        </div>
                                        <div className="modal_body_left modal_body_left1">
                                            {listFollowers}
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </Modal>
                                <Modal open={openFollowing} onClose={this.onCloseModalFollowing} little>
                                    <h3>Following</h3>
                                    <div className="modal-body modal-body-sub_agile">
                                        <div className="main-mailposi">
                                            <span className="fa fa-book" aria-hidden="true"></span>
                                        </div>
                                        <div className="modal_body_left modal_body_left1">
                                            {listFollowings}
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </Modal>
                                <div className="title-bar"></div>
                            </div>
                            <div className="col-sm-9">
                                <div className="tab-content">
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane active" id="manage-book">
                                            <div className="ads-grid">
                                                <div className="container">
                                                    <div className="agileinfo-ads-display">
                                                        <div className="wrapper">
                                                            <div className="product-sec1">
                                                                <h3 className="heading-tittle">Books</h3>
                                                                <hr />
                                                                <BooksList />
                                                                <div className="clearfix"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                        
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div role="tabpanel" className="tab-pane" id="my-order">
                                        </div> */}
                                        <div role="tabpanel" className="tab-pane" id="history-order">
                                            <div className="ads-grid">
                                                <div className="container">
                                                    <div className="agileinfo-ads-display">
                                                        <div className="wrapper">
                                                            <div className="product-sec1">
                                                                <h3 className="heading-tittle">View Orders</h3>
                                                                <hr />
                                                                <HistoryOrder />
                                                                <div className="clearfix"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                        
                                                </div>
                                            </div>
                                        </div>
                                        <div role="tabpanel" className="tab-pane" id="note">
                                        </div>
                                        <div role="tabpanel" className="tab-pane" id="comment">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        usersEditing : state.usersEditing,
        account: state.account,
        Followers:  state.Followers,
        Followings: state.Followings
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetUser: (id) => {
            dispatch(actGetUserRequest(id));
        },
        onGetFollowers: (id) => {
            dispatch(actFollowersRequest(id));
        },
        onGetFollowings: (id) => {
            dispatch(actFollowingsRequest(id));
        },
        onCheckFollow: (data) => {
            dispatch(actCheckFollowRequest(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
