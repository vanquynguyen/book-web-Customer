import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './author.css';
import { connect } from 'react-redux';
import { FetchUserRequest, searchUserRequest } from '../../actions/Users';
import * as Config from '../../constants/Config';
import { database } from '../../constants/firebase';

class Author extends Component {
    
    constructor() {
        super();
        this.state = {
            users: [],
            onlines: []
        };
    }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        this.props.fetchAllUsers();
    }

    componentWillMount() {
        const onlines = database.ref('onlines')
    
        onlines.on('value', snapshot => {
            const items = snapshot.val();
            const newState = [];
            for (let item in items) {
                newState.push({
                    id: item,
                    userId: items[item].userId,
                    time: items[item].time
                });
            }
            this.setState({
                onlines: newState
            });
        });
    }

    onSearch = (event) => {
        this.props.onSearchUser(event.target.value);
    }

    render() {
        const onlines = this.state.onlines;
        let onlineArray = [];
        for(let key in onlines) {
            onlineArray.push(onlines[key].userId)
        }
        function isInArray(value, array) {
            for (var i = 0; i < array.length; i++) {
                if (array[i] === value) {
                    return true;
                }
            }
            return false;
        }

        const users = this.props.users;
        let listUsers;
        let count = 0;
        users.length && (listUsers = users.map((user, key) => (
            <div key={key}>
               
                    {(isInArray(user.id + '', onlineArray))? (
                        <Link to={`/user/${user.id}`} className="scroller">
                            <div className="row" style={{ marginBottom: '10px', width: '100%'}}>
                                <div className="col-md-4" style={{ padding: '0' }}>
                                    <div className="wow pulse animated avatar-animation" data-wow-delay="0.5s" data-wow-iteration="infinite" data-wow-duration="0.5s" id="load-animate">
                                        <img 
                                            className="img-circle pravatar-image img-responsive col-sm-3" 
                                            style={{ width: '40px', height: '40px', padding: '0' }} 
                                            src={Config.LOCAL_URL+ '/images/' + user.avatar} 
                                            alt="" 
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 user-name-online" style={{ marginTop: '5px' }}>
                                    {user.full_name}
                                </div>
                                <div className="col-md-2" style={{ marginTop: '-14px', width: '66%' }}>
                                    <div className="wow pulse animated avatar-animation" data-wow-delay="300ms" data-wow-iteration="infinite" data-wow-duration="2s" id="load-animate">
                                        <span className="pull-right label label-success label-online">Online</span>
                                    </div>
                                </div>
                                <div style={{ display: 'none' }}>{count++}</div>
                            </div>
                            <hr />
                        </Link>
                    ) : (
                        <div style={{ display: 'none' }}></div>
                        // <div className="row" style={{ marginBottom: '10px', width: '100%', display: 'none' }}>
                        //     <div className="col-md-4" style={{ padding: '0' }}>
                        //     <img 
                        //         className="img-circle pravatar-image img-responsive col-sm-3" 
                        //         style={{ width: '40px', height: '40px', padding: '0' }} 
                        //         src={Config.LOCAL_URL+ '/images/' + user.avatar} 
                        //         alt="" 
                        //     />
                        //     </div>
                        //     <div className="col-md-6 user-name-online" style={{ marginTop: '5px' }}>
                        //         {user.full_name}
                        //     </div>
                        //     <div className="col-md-2" style={{ marginTop: '-14px', width: '66%' }}>
                        //         <span className="pull-right label label-default">Offline</span>
                        //     </div>
                        // </div>
                    )}
            </div>)
        ))
        return (
            <div>
                <div className="section-title-line">
                    <h3>
                        {count > 0 ? (
                            <div>
                                    <div className="user-online wow pulse animated avatar-animation" data-wow-delay="300ms" data-wow-iteration="infinite" data-wow-duration="0.5s" id="load-animate"></div> Online 
                                    { count > 0 ? (
                                        <span>({count})</span>
                                    ) : (
                                        <span style={{ display: 'none' }}></span>
                                    )}
                            </div>
                        ) : (
                            <div>
                                <div className="user-offline"></div> Offline
                            </div>
                        )}
                      
                    </h3>
                </div>
                <hr className="filler-line" />
                <div className="hot-authors">
                    <div className="user-online-content">
                        { listUsers }
                    </div>
                    <input 
                        type="text" 
                        className="form-control search-form" 
                        placeholder="search user"
                        onChange={this.onSearch}
                    />
                </div>
                <hr />
                <div className="sidebar-box-links">
                    <Link to="/users" className="accented-link scroller">
                        <i aria-hidden="true" className="fa fa-tags mr-05"></i> All authors
                    </Link>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllUsers: () => {
            dispatch(FetchUserRequest());
        },
        
        onSearchUser: (keywork) => {
            dispatch(searchUserRequest(keywork))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Author);