import React, { Component } from 'react';

// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import swal from 'sweetalert';
import { actGetUserRequest } from '../../actions/Users/';
import { actCheckFollowRequest } from '../../actions/Follows';
import * as Config from '../../constants/Config';
import axios from 'axios';
import { database } from  '../../constants/firebase';

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
           openMessage: '',
           message: '',
           messageData: ''
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

        const messagesRef = database.ref('messages')
            .orderByKey()
            .limitToLast(100);
    
        messagesRef.on('child_added', snapshot => {
            const message = { data: snapshot.val(), id: snapshot.key };
            this.setState({ messageData: message })
        });
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

    openMessage = () => {
        this.setState({ openMessage: 'popup-box-on' })
    }

    closeMessage = () => {
        this.setState({ openMessage: '' })
    }

    addMessage = (e) => {

        database.ref('messages').push({
            message: this.state.message,
            sender_id: this.props.account.id,
            received_id: this.props.match.params.id
        });

        this.refs.message.value=''
    }

    render() {
        console.log(this.state.messageData)
        const messageData = this.state.messageData;
        const checkFollow = this.state.check;
        const openMessage = this.state.openMessage;
        return (
            <div style={{ height: 'auto' }}>
                <section className="relative fix m-bottom50 gray-bg" id="sc3">
                    <div className="hide-categoryIds"></div>
                    <div className="hide-userId" user-name="Nguyen Van Quy B" ></div>
                    <div className="wrap_content">
                        <div className="prcover prgreen-bg">
                            <div className="space-25"></div>
                            <h1 className="text-white prhellofont" style={{ fontSize: '100px' }}>Hello there</h1>
                            <h1 className="text-white">I'm {this.state.full_name}</h1>
                            <div style={{ float: 'right', marginTop: '-10px', marginRight: '10px' }}>
                                {!checkFollow.id ? (
                                    <button onClick={this.follow} className="btn" style={{backgroundColor: 'white', color: 'black', fontWeight: 'bold' }}><img src="/images/follow.png" width="24" alt="" />Follow</button>
                                ) : (
                                    <button onClick={this.unfollow} className="btn" style={{backgroundColor: 'white', color: 'black', fontWeight: 'bold' }}><img src="/images/tick.png" width="24" alt="" />Following</button>
                                )}
                                <button onClick={this.openMessage} className="btn" style={{backgroundColor: 'white', color: 'black', fontWeight: 'bold' }}><img src="/images/messenger.png" width="24" alt="" />Messenger</button>
                            </div>
                        </div>
                        <div className="prheadline">
                            <div className="pravatar">
                                <a href="/users/my_profile" className="">
                                    <img className="img-circle pravatar-image img-responsive" src={Config.LOCAL_URL+ '/images/' + this.state.avatar} alt="Avatar" />
                                </a>
                                <div className="text-center">
                                    <h2><strong>{ this.state.full_name }</strong></h2>
                                </div>
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
                        <div className="row" id="profile-content">
                            <div className="col-sm-3" style={{ marginTop: '30px' }}>
                                <div className="space-30"></div>
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
                                <div className="popup-box chat-popup" id={openMessage}>
                                    <div className="popup-head">
                                        <div className="popup-head-left pull-left"><img src="http://bootsnipp.com/img/avatars/bcf1c0d13e5500875fdd5a7e8ad9752ee16e7462.jpg" alt="iamgurdeeposahan" /> Gurdeep Osahan</div>
                                        <div className="popup-head-right pull-right">
                                            <div className="btn-group">
                                                <button className="chat-header-button" data-toggle="dropdown" type="button" aria-expanded="false">
                                                <i className="glyphicon glyphicon-cog"></i> </button>
                                            </div>
                                            <button onClick={this.closeMessage} id="removeclassName" className="chat-header-button pull-right" type="button"><i className="glyphicon glyphicon-off"></i></button>
                                        </div>
                                    </div>
                                    <div className="popup-messages">
                                        <div className="direct-chat-messages">
                                            <div className="chat-box-single-line">
                                                <abbr className="timestamp">October 8th, 2015</abbr>
                                            </div>

                                            <div className="direct-chat-msg doted-border">
                                                <div className="direct-chat-info clearfix">
                                                    <span className="direct-chat-name pull-left">Osahan</span>
                                                </div>

                                                <img alt="" src="http://bootsnipp.com/img/avatars/bcf1c0d13e5500875fdd5a7e8ad9752ee16e7462.jpg" className="direct-chat-img" />
                                                <div className="direct-chat-text">
                                                    Hey bro, how’s everything going ?
                                                </div>
                                                <div className="direct-chat-info clearfix">
                                                    <span className="direct-chat-timestamp pull-right">3.36 PM</span>
                                                </div>
                                                <div className="direct-chat-info clearfix">
                                                    <span className="direct-chat-img-reply-small pull-left">
                                                    </span>
                                                    <span className="direct-chat-reply-name">Singh</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="popup-messages-footer">
                                        <textarea 
                                            onChange={event => {this.setState({message: event.target.value})}}
                                            onKeyPress={event => {
                                                if (event.key === 'Enter') {
                                                    this.addMessage()
                                                }
                                            }}
                                            ref="message"
                                            id="status_message" 
                                            placeholder="Type a message..." 
                                            rows="10" 
                                            cols="40" 
                                            name="message"
                                        >
                                        </textarea>
                                        <div className="btn-footer">
                                            <button className="bg_none"><i className="glyphicon glyphicon-film"></i> </button>
                                            <button className="bg_none"><i className="glyphicon glyphicon-camera"></i> </button>
                                            <button className="bg_none"><i className="glyphicon glyphicon-paperclip"></i> </button>
                                            <button className="bg_none pull-right"><i className="glyphicon glyphicon-thumbs-up"></i> </button>
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
