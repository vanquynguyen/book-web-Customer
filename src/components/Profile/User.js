import React, { Component } from 'react';

// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { actGetUserRequest } from '../../actions/Users/';
import { actCheckFollowRequest } from '../../actions/Follows';
import * as Config from '../../constants/Config';
import axios from 'axios';
import { database, storageRef } from  '../../constants/firebase';

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
           messageData: {},
           imageTotals: [],
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
    
        messagesRef.on('value', snapshot => {
            const items = snapshot.val();
            const newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    sender_id: items[item].sender_id,
                    received_id: items[item].received_id,
                    message: items[item].message,
                    like: items[item].like,
                    image: items[item].image,
                    icon: items[item].icon,
                    gif: items[item].gif,
                    gifIcon: items[item].gifIcon,
                    time: items[item].time
                });
            }
            this.setState({
                messageData: newState
            });
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
        const imageTotals = this.state.imageTotals;
        const message = this.state.message;
        const time = new Date().toLocaleDateString();
        const result = database.ref('messages').push({
            message: message,
            image: imageTotals,
            sender_id: localStorage.getItem('userId'),
            received_id: this.props.match.params.id,
            time: time
        });
        if (result) {
            database.ref('notifications').push({
                full_name: this.props.account.full_name,
                avatar: this.props.account.avatar,
                sender_id: localStorage.getItem('userId'),
                received_id: this.props.match.params.id,
                time: time
            });
            this.setState({ 
                imageTotals: [],
                message: '',
            })
            this.refs.message.value='';
        }
    }

    like = () => {
        const time = new Date().toLocaleDateString();
        database.ref('messages').push({
            like: '/images/like.PNG',
            sender_id: localStorage.getItem('userId'),
            received_id: this.props.match.params.id,
            time: time
        });
        database.ref('notifications').push({
            full_name: this.props.account.full_name,
            avatar: this.props.account.avatar,
            sender_id: localStorage.getItem('userId'),
            received_id: this.props.match.params.id,
            time: time
        });

    }

    imageChange = (e) => {
        e.preventDefault();
        let files = e.target.files;
        const uploadImages = [];
        for (let i = 0; i < files.length; i++) {
            let uploadFirebase = storageRef.child(`images/${files[i].name}`).put(files[i]);
            uploadImages.push(uploadFirebase);
        }
     
        const imageTotals = this.state.imageTotals;
        for (let i = 0; i < uploadImages.length; i++) {
            uploadImages[i].then(snapshot => {
                let image =  uploadImages[i].snapshot.downloadURL
                imageTotals.push(image);
            })
        }

        swal({
            title: 'Are you sure?',
            buttons: true,
            dangerMode: true,
        })
        .then((willUpload) => {
            if (willUpload) {
                this.addMessage();
                swal("Success", {
                    icon: "success",
                });
            } else {
                swal("Cancel");
            }
        });
    }

    getIcon(e) {
        const time = new Date().toLocaleDateString();
        database.ref('messages').push({
            icon: e,
            sender_id: localStorage.getItem('userId'),
            received_id: this.props.match.params.id,
            time: time
        });
        database.ref('notifications').push({
            full_name: this.props.account.full_name,
            avatar: this.props.account.avatar,
            sender_id: localStorage.getItem('userId'),
            received_id: this.props.match.params.id,
            time: time
        });
    }

    getGif(e) {
        const time = new Date().toLocaleDateString();
        database.ref('messages').push({
            gif: e,
            sender_id: localStorage.getItem('userId'),
            received_id: this.props.match.params.id,
            time: time
        });
        database.ref('notifications').push({
            full_name: this.props.account.full_name,
            avatar: this.props.account.avatar,
            sender_id: localStorage.getItem('userId'),
            received_id: this.props.match.params.id,
            time: time
        });
    }

    getGifIcon(e) {
        const time = new Date().toLocaleDateString();
        database.ref('messages').push({
            gifIcon: e,
            sender_id: localStorage.getItem('userId'),
            received_id: this.props.match.params.id,
            time: time
        });
        database.ref('notifications').push({
            full_name: this.props.account.full_name,
            avatar: this.props.account.avatar,
            sender_id: localStorage.getItem('userId'),
            received_id: this.props.match.params.id,
            time: time
        });
    }

    render() {
        const checkFollow = this.state.check;
        const openMessage = this.state.openMessage;
        const messageData = this.state.messageData;
        const receiveId = this.props.match.params.id;
        const senderId = localStorage.getItem('userId');

        let listMessages;
        if (messageData.length > 0) {
            listMessages = messageData.map((message, index) =>
                <div key={index}>
                    {(message.received_id === receiveId && message.sender_id === senderId) || (message.received_id === senderId && message.sender_id === receiveId) ? (
                        (message.received_id === receiveId) ? (
                            <div style={{ marginBottom: '30px' }}>
                                {(typeof message.message !== 'undefined' && message.message !== '' && message.message !== '\n') ? (
                                    <div className="sender-message">
                                        <p>{message.message}</p>
                                    </div>
                                ) : (
                                    <div></div>
                                )}

                                {(typeof message.like !== 'undefined' && message.like !== '') ? (
                                    <img style={{ marginLeft: '208px' }} src={message.like} alt="" />
                                ) : (
                                    <div></div>
                                )}

                                {(typeof message.icon !== 'undefined' && message.icon !== '') ? (
                                    <img style={{ marginLeft: '208px' }} src={message.icon} alt="" />
                                ) : (
                                    <div></div>
                                )}
                        
                                {(typeof message.gif !== 'undefined' && message.gif !== '') ? (
                                    <img style={{ marginLeft: '100px', borderRadius: '10px' }} src={message.gif} width="150" height="120" alt="" />
                                ) : (
                                    <div></div>
                                )}

                                {(typeof message.gifIcon !== 'undefined' && message.gifIcon !== '') ? (
                                    <img style={{ marginLeft: '150px', borderRadius: '10px' }} src={message.gifIcon} width="80" height="80" alt="" />
                                ) : (
                                    <div></div>
                                )}

                                {(typeof message.image !== 'undefined' && message.image.length > 0) ? (
                                    message.image.map((img, index) => {
                                        return <div key={index}><img style={{ marginLeft: '150px' }} className="image-send" src={img} alt="" /></div>
                                    })
                                ) : (
                                    <div></div>
                                )}

                                {/* <div className="chat-box-single-line">
                                    <abbr className="timestamp">{message.time}</abbr>
                                </div> */}
                            </div>
                        ) : (
                            <div style={{ marginBottom: '30px' }}>
                                {(typeof message.message !== 'undefined' && message.message !== '' && message.message !== '\n') ? (
                                    <div className="receive-message">
                                        <p>{message.message}</p>
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                                
                                {(typeof message.like !== 'undefined' && message.like !== '') ? (
                                    <img src={message.like} alt="" />
                                ) : (
                                    <div></div>
                                )}

                                 {(typeof message.icon !== 'undefined' && message.icon !== '') ? (
                                    <img src={message.icon} alt="" />
                                ) : (
                                    <div></div>
                                )}

                                {(typeof message.gif !== 'undefined' && message.gif !== '') ? (
                                    <img style={{ marginLeft: '10px', borderRadius: '10px' }} src={message.gif} width="150" height="120" alt="" />
                                ) : (
                                    <div></div>
                                )}

                                {(typeof message.gifIcon !== 'undefined' && message.gifIcon !== '') ? (
                                    <img style={{ marginLeft: '10px', borderRadius: '10px' }} src={message.gifIcon} width="80" height="80" alt="" />
                                ) : (
                                    <div></div>
                                )}
         
                                {(typeof message.image !== 'undefined' && message.image.length > 0) ? (
                                    message.image.map((img, index) => {
                                        return <div key={index}><img style={{ marginLeft: '10px' }} className="image-send" src={img} alt="" /> </div>
                                    })
                                ) : (
                                    <div></div>
                                )}

                                {/* <div className="chat-box-single-line">
                                    <abbr className="timestamp">{message.time}</abbr>
                                </div> */}
                            </div>
                        )
                       
                    ) : (
                        <div></div>
                    )}
                </div>
            );
        }
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
                                        <div className="popup-head-left pull-left">
                                            <img src={Config.LOCAL_URL + '/images/' + this.state.avatar} alt="iamgurdeeposahan" /> {this.state.full_name}
                                        </div>
                                        <div className="popup-head-right pull-right">
                                            <div className="btn-group">
                                            <div className="dropdown">
                                                <i className="glyphicon glyphicon-cog"  data-toggle="dropdown"></i>
                                                    <ul className="dropdown-menu" style={{ float: 'left!important', marginLeft: '-108px' }}>
                                                        <li><a style={{ cursor: 'pointer' }} onClick={() => this.onRemoveMessage()}>Delete the chat</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                           <i onClick={this.closeMessage} className="glyphicon glyphicon-off"></i>
                                        </div>
                                    </div>
                                    <div className="popup-messages">
                                        <div className="direct-chat-messages">
                                            <div className="direct-chat-msg doted-border">
                                                <div className="direct-chat-info clearfix">
                                                    <span className="direct-chat-name pull-left"></span>
                                                </div>
                                                { listMessages }
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
                                            required
                                        >
                                        </textarea>
                                        <div className="btn-footer">
                                            <label className="bg_none file-upload btn btn-upload">
                                                <i className="glyphicon glyphicon-camera"></i>
                                                <input 
                                                    type="file" 
                                                    ref="imageFile"
                                                    onChange={(e)=>this.imageChange(e)}
                                                    multiple 
                                                />
                                            </label>
                                            <span>
                                                <div className="dropdown-menu drop-up" style={{ paddingLeft: '20px' }}>
                                                    <img onClick={e => this.getGifIcon('https://i.imgur.com/HhvtIqC.gif')} src="https://i.imgur.com/HhvtIqC.gif" width="50" height="50" className="icon-chat" alt="" />
                                                    <img onClick={e => this.getGifIcon('https://i.imgur.com/ODfrSnv.gif')} src="https://i.imgur.com/ODfrSnv.gif" className="icon-chat" width="50" height="50" alt="" />
                                                    <img onClick={e => this.getGifIcon('https://i.imgur.com/FAw737s.gif')} src="https://i.imgur.com/FAw737s.gif" className="icon-chat" width="50" height="50" alt="" />
                                                    <img onClick={e => this.getGifIcon('https://i.imgur.com/Ps8yhAY.png')} src="https://i.imgur.com/Ps8yhAY.png" className="icon-chat" width="50" height="50" alt="" />
                                                    <img onClick={e => this.getGifIcon('https://i.imgur.com/8zcWNEr.png')} src="https://i.imgur.com/8zcWNEr.png" className="icon-chat" width="50" height="50" alt="" />
                                                    <img onClick={e => this.getGifIcon('https://i.imgur.com/NN8rpyH.gif')} src="https://i.imgur.com/NN8rpyH.gif" className="icon-chat" width="50" height="50" alt="" />
                                                    <img onClick={e => this.getGifIcon('https://i.imgur.com/pzxHaeK.gif')} src="https://i.imgur.com/pzxHaeK.gif" className="icon-chat" width="50" height="50" alt="" />
                                                    <img onClick={e => this.getGifIcon('https://i.imgur.com/05mgh31.gif')} src="https://i.imgur.com/05mgh31.gif" className="icon-chat" width="50" height="50" alt="" />

                                                    <img onClick={e => this.getGifIcon('https://i.imgur.com/sdnJpYo.jpg')} src="https://i.imgur.com/sdnJpYo.jpg" className="icon-chat" width="50" height="50" alt="" />
                                                    <img onClick={e => this.getGifIcon('https://i.imgur.com/DO5IzE5.png')} src="https://i.imgur.com/DO5IzE5.png" className="icon-chat" width="50" height="50" alt="" />
                                                    <img onClick={e => this.getGifIcon('https://i.imgur.com/S2vbBhn.jpg?1')} src="https://i.imgur.com/S2vbBhn.jpg?1" className="icon-chat" width="50" height="50" alt="" />
                                                    <img onClick={e => this.getGifIcon('https://i.imgur.com/xcvt5EL.gif')} src="https://i.imgur.com/xcvt5EL.gif" className="icon-chat" width="50" height="50" alt="" />
                                                    <img onClick={e => this.getGifIcon('https://i.imgur.com/zrPiMzT.gif')} src="https://i.imgur.com/zrPiMzT.gif" className="icon-chat" width="50" height="50" alt="" />
                                                    <img onClick={e => this.getGifIcon('https://i.imgur.com/ktHWTDo.gif')} src="https://i.imgur.com/ktHWTDo.gif" className="icon-chat" width="50" height="50" alt="" />
                                                    <img onClick={e => this.getGifIcon('https://i.imgur.com/c5CAN2F.gif')} src="https://i.imgur.com/c5CAN2F.gif" className="icon-chat" width="50" height="50" alt="" />
                                                </div>
                                            
                                                <label className="bg_none file-upload btn btn-upload"  data-toggle="dropdown"><i className="glyphicon glyphicon-picture"></i> </label>
                                            </span>
                                            <span>
                                                <div className="dropdown-menu drop-up" >
                                                    <img onClick={e => this.getIcon('/images/smile1.PNG')} src="/images/smile1.PNG" className="icon-chat" width="35" alt="" />
                                                    <img onClick={e => this.getIcon('/images/smile2.PNG')} src="/images/smile2.PNG" className="icon-chat" width="35" alt="" />
                                                    <img onClick={e => this.getIcon('/images/smile3.PNG')} src="/images/smile3.PNG" className="icon-chat" width="35" alt="" />
                                                    <img onClick={e => this.getIcon('/images/smile4.PNG')} src="/images/smile4.PNG" className="icon-chat" width="35" alt="" />
                                                    <img onClick={e => this.getIcon('/images/smile5.PNG')} src="/images/smile5.PNG" className="icon-chat" width="35" alt="" />
                                                    <img onClick={e => this.getIcon('/images/smile6.PNG')} src="/images/smile6.PNG" className="icon-chat" width="35" alt="" />
                                                    <img onClick={e => this.getIcon('/images/smile7.PNG')} src="/images/smile7.PNG" className="icon-chat" width="35" alt="" />
                                                    <img onClick={e => this.getIcon('/images/smile8.PNG')} src="/images/smile8.PNG" className="icon-chat" width="35" alt="" />
                                                </div>
                                            
                                                <label className="bg_none file-upload btn btn-upload"  data-toggle="dropdown"><i className="fa fa-smile-o"></i> </label>
                                            </span>
                                            <span>
                                                <div className="dropdown-menu drop-up" style={{ textAlign: 'center', height: '275px', overflow: 'auto' }}>
                                                    <div>
                                                        <img onClick={e => this.getGif('https://media.tenor.co/images/c4a58d539badcfb605df02eb60a8d312/tenor.gif')} autoPlay loop muted style={{ marginLeft: '5px', marginBottom: '5px', borderRadius: '10px' }} src="https://media.tenor.co/images/c4a58d539badcfb605df02eb60a8d312/tenor.gif" width="150" height="120" alt="" />
                                                    </div>
                                                    <div>
                                                        <img onClick={e => this.getGif('https://media.tenor.co/images/1e0b5e9e6bb5853b6809e71f09faf2e5/tenor.gif')} autoPlay loop muted style={{ marginLeft: '5px', marginBottom: '5px', borderRadius: '10px' }} src="https://media.tenor.co/images/1e0b5e9e6bb5853b6809e71f09faf2e5/tenor.gif" width="150" height="120" alt="" />
                                                    </div>
                                                    <div>
                                                        <img onClick={e => this.getGif('https://lumiere-a.akamaihd.net/v1/images/monstersinc_zzzz_sassy_2e0938ab.gif')} autoPlay loop muted style={{ marginLeft: '5px', marginBottom: '5px', borderRadius: '10px' }} src="https://lumiere-a.akamaihd.net/v1/images/monstersinc_zzzz_sassy_2e0938ab.gif" width="150" height="120" alt="" />
                                                    </div>
                                                    <div>
                                                        <img onClick={e => this.getGif('https://lumiere-a.akamaihd.net/v1/images/dipper-celebrate-pig_08e0880a.gif')} autoPlay loop muted style={{ marginLeft: '5px', marginBottom: '5px', borderRadius: '10px' }} src="https://lumiere-a.akamaihd.net/v1/images/dipper-celebrate-pig_08e0880a.gif" width="150" height="120" alt="" />
                                                    </div>
                                                    <div>
                                                        <img onClick={e => this.getGif('https://lumiere-a.akamaihd.net/v1/images/toystory-whoa_ad8c0e8d.gif')} autoPlay loop muted style={{ marginLeft: '5px', marginBottom: '5px', borderRadius: '10px' }} src="https://lumiere-a.akamaihd.net/v1/images/toystory-whoa_ad8c0e8d.gif" width="150" height="120" alt="" />
                                                    </div>
                                                    <div>
                                                        <img onClick={e => this.getGif('https://lumiere-a.akamaihd.net/v1/images/cinderella-magic_b78d76ed.gif')} autoPlay loop muted style={{ marginLeft: '5px', marginBottom: '5px', borderRadius: '10px' }} src="https://lumiere-a.akamaihd.net/v1/images/cinderella-magic_b78d76ed.gif" width="150" height="120" alt="" />
                                                    </div>
                                                    <div>
                                                        <img onClick={e => this.getGif('https://media.tenor.co/images/40564c6ae1b3f87c5b0ce2d7b5af682c/tenor.gif')} autoPlay loop muted style={{ marginLeft: '5px', marginBottom: '5px', borderRadius: '10px' }} src="https://media.tenor.co/images/40564c6ae1b3f87c5b0ce2d7b5af682c/tenor.gif" width="150" height="120" alt="" />
                                                    </div>
                                                </div>
                                                <label className="bg_none file-upload btn btn-upload"  data-toggle="dropdown"><i className="glyphicon glyphicon-paperclip"></i> </label>
                                            </span>
                                            <button onClick={this.like} className="bg_none pull-right"><i className="glyphicon glyphicon-thumbs-up"></i> </button>
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
