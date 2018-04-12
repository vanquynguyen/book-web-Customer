import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

import { connect } from 'react-redux';
import swal from 'sweetalert';
import axios from 'axios';
import * as Config from '../../../constants/Config';
import { actFetchReviewsRequest } from '../../../actions/Reviews';
import * as jquery from 'jquery';

class review extends Component {
    constructor() {
        super();
        this.state = {
            rate: 5,
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rate: nextValue});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const user_id = this.props.account.id;
        const book_id = this.props.id;
        const rate = this.state.rate;
        const content = this.refs.content.value;
        var data = new FormData()
        data.append('user_id', user_id);
        data.append('book_id', book_id);
        data.append('rate', rate);
        data.append('content', content);

        axios.post(Config.API_URL + '/reviews', data).then(res => {
            if (res.data === false) {
                swal("Only once review!", "You clicked the button!", "warning");
            } else {
                swal("Good job!", "You clicked the button!", "success");
                this.props.fetchAllReviews(book_id);
            }
                jquery('.close').click();
        });
    }

    render () {
        const { rate } = this.state;

        return (
            <div>
                <div className="modal fade" id="review-rate" tabIndex="-1" role="dialog" style={{ display: 'none' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">×</button>
                                <h3 className="agileinfo_sign">Review </h3>
                            </div>
                            <div className="modal-body modal-body-sub_agile">
                                <div className="main-mailposi">
                                    <span className="fa fa-star" aria-hidden="true"></span>
                                </div>
                                <div className="modal_body_left modal_body_left1">
                                    <form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                                        <div>
                                            <label>
                                                Rating: ({this.state.rate} Star)
                                            </label>
                                            <br />
                                            <StarRatingComponent 
                                                name="rate1" 
                                                starCount={5}
                                                value={rate}
                                                onStarClick={this.onStarClick.bind(this)}
                                            />
                                        </div>
                                        <div>
                                            <label>Content:</label>
                                            <textarea
                                                ref="content"
                                                className="form-control"
                                            >
                                            </textarea>
                                        </div>
                                        <br />
                                        <button type="submit" className="btn btn-primary btn-xs b-r-0">Ok</button>
                                    </form>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        account: state.account,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllReviews: (id) => {
            dispatch(actFetchReviewsRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(review);
