import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class UsersItem extends Component {

    render() {
        var { user } = this.props;
        var account = this.props.account;
        return (
            <div className="hot-authors col-md-4">
                <div className="author-content">
                    <div className="user-item">
                        <div className="image">
                            <img className="img-circle" src="https://images.viblo.asia/avatar/398ff412-f7d3-4e32-85b3-50efae907d6b.png" alt="Images" />
                        </div>
                        <div className="content">
                            <h4 className="author-name">{user.full_name}</h4>
                            <p>{user.email}</p>
                            <span className="labeling"><i className="fa fa-map-marker"></i> {user.address}</span>
                        </div>
                        { user.gender === 1 ? (
                            <p className="label" style={{ backgroundColor: 'red' }}>Male</p>
                        ) : (
                            <p className="label" style={{ backgroundColor: 'pink' }}>Female</p>
                        )}
                        <hr />
                        <div className="ph-20">
                            {user.id === account.id ? (
                                <Link to='/user/profile' style={{ width: '90%', background: '#47abda', borderColor: '#FE8800' }} className="btn btn-primary btn-block scroller">View Profile</Link>
                            ):(
                                <Link to={`/user/${user.id}`} style={{ width: '90%', background: '#47abda', borderColor: '#FE8800' }} className="btn btn-primary btn-block scroller">View Profile</Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
        account: state.account
    }
}


export default connect(mapStateToProps)(UsersItem);
