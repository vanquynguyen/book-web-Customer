import React, { Component } from 'react';
import { connect } from 'react-redux';

class UsersItem extends Component {

    render() {
        var { user } = this.props;
        return (
            <div className="hot-authors col-md-4">
                <div className="author-content">
                    <div className="user-item">
                        <div className="image">
                            <img className="img-circle" src="https://images.viblo.asia/avatar/398ff412-f7d3-4e32-85b3-50efae907d6b.png" alt="Images" />
                        </div>
                        <div className="content">
                            <h4 className="author-name">{user.full_name}</h4>
                            <div className="rating-wrapper">
                                <div className="rating-item">
                                    <span style={{cursor: 'default'}}>
                                        <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                            <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'hidden'}}></div>
                                            <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                        </div>
                                        <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                            <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'hidden'}}></div>
                                            <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                        </div>
                                        <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                            <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'hidden'}}></div>
                                            <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                        </div>
                                        <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                            <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'visible'}}></div>
                                            <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                        </div>
                                        <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                            <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'visible'}}></div>
                                            <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span></span></div>
                                        </div>
                                    </span>
                                    <input type="hidden" className="rating" data-filled="fa fa-star rating-rated" data-empty="fa fa-star-o" data-fractions="2" data-readonly="" value="3.5" />
                                </div>
                            </div>
                            <span className="labeling"><i className="fa fa-map-marker"></i>{user.address}</span>
                        </div>
                        <div className="ph-20">
                            <a style={{ width: '90%', background: '#47abda', borderColor: '#FE8800' }} className="btn btn-primary btn-block">View Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}


export default connect(mapStateToProps)(UsersItem);
