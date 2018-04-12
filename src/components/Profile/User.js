import React, { Component } from 'react';

// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import swal from 'sweetalert';
import { actGetUserRequest } from '../../actions/Users/';
import { actCheckFollowRequest } from '../../actions/Follows';
import * as Config from '../../constants/Config';
import axios from 'axios';

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
           check: '',
        };
    }

    componentWillMount() {
        var { match } = this.props;
        if (match) { // update
            var id = match.params.id;
            const following_id = localStorage.getItem('userId');
            this.props.onGetUser(id)
            const data = {
                follower_id: id,
                following_id: following_id
            }
            axios({
                method: 'post',
                url: Config.API_URL + '/user/check-follow', 
                data: data
            }).then(res => {
                this.setState({
                    check: res.data
                })
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.usersEditing && nextProps.check){
            var {usersEditing, check} = nextProps;
            this.setState({
                id: usersEditing.id,
                full_name: usersEditing.full_name,
                avatar: usersEditing.avatar,
                email: usersEditing.email,
                address: usersEditing.address,
                gender: usersEditing.gender,
                check: check
            })
        }
    }

    follow = () => {
        const data = {
            follower_id: this.state.id,
            following_id: this.props.account.id
        }

        axios.post(Config.API_URL + '/user/follow', data).then(res => {
            this.props.onCheckFollow(data);
           
        });
    }

    unfollow = () => {
        const data = {
            follower_id: this.state.id,
            following_id: this.props.account.id
        }

        axios.post(Config.API_URL + '/user/unfollow', data).then(res => {
            this.props.onCheckFollow(data);
        });
    }

    render() {
        const checkFollow = this.state.check;

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
                                        <a href="#overview" aria-controls="overview" role="tab" data-toggle="tab" aria-expanded="true">Overview</a>
                                    </li>
                                    <li role="presentation" className="">
                                        <a href="#itinerary" aria-controls="itinerary" role="tab" data-toggle="tab" aria-expanded="false">Itinerary</a>
                                    </li>
                                    <li role="presentation" className="">
                                        <a href="#start_at" aria-controls="start_at" role="tab" data-toggle="tab" aria-expanded="false">Start at</a>
                                    </li>
                                    <li role="presentation" className="">
                                        <a href="#note" aria-controls="note" role="tab" data-toggle="tab" aria-expanded="false">Note</a>
                                    </li>
                                    <li role="presentation" className="">
                                        <a href="#comment" aria-controls="comment" role="tab" data-toggle="tab" aria-expanded="false">Comments</a>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    <div role="tabpanel" className="tab-pane active" id="overview">
                                    
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="itinerary">
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="start_at">
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="note">
                                    </div>
                                    <div role="tabpanel" className="tab-pane" id="comment">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="space-30"></div>
                                <div className="text-center">
                                    <h2><strong>{ this.state.full_name }</strong></h2>
                                </div>
                                {!checkFollow.id ? (
                                    <button onClick={this.follow} className="btn" style={{ marginLeft: '188px', marginTop: '10px', backgroundColor: '#ffb13b', color: 'white', fontWeight: 'bold' }}>Follow</button>
                                ) : (
                                    <button onClick={this.unfollow} className="btn" style={{ marginLeft: '188px', marginTop: '10px', backgroundColor: '#ffb13b', color: 'white', fontWeight: 'bold' }}>UnFollow</button>
                                )}
                                
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
                                            <p className=""><a href="" data-toggle="modal" data-target="#followed">1 people</a></p>
                                            <h4 className="tip-left">Following: </h4>
                                            <p className=""><a href="" data-toggle="modal" data-target="#following">0 people</a></p>
                                            {/* <h4><a href="javascript:void(0);" data-toggle="modal" data-target="#favoritecategories"> <i className="icofont icofont-arrow-right"></i></a></h4> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="title-bar"></div>
                            </div>
                            <div className="col-sm-9">
                                {/* <div className="tab-content" style={{ marginTop: '60px' }}>
                                    <div>
                                        <h1>hihi</h1>
                                    </div>
                                    <div>
                                        <h1>hihi</h1>
                                    </div>
                                    <div>
                                        <h1>hihi</h1>
                                    </div>

                                     <div>
                                        <h1>hihi</h1>
                                    </div>
                                    <div>
                                        <h1>hihi</h1>
                                    </div>
                                     <div>
                                        <h1>hihi</h1>
                                    </div>
                                </div> */}
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
        check: state.check
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetUser: (id) => {
            dispatch(actGetUserRequest(id));
        },
        onCheckFollow: (data) => {
            dispatch(actCheckFollowRequest(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
