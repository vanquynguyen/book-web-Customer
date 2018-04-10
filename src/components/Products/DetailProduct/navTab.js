import React, { Component } from 'react';
import { actFetchReviewsRequest } from '../../../actions/Reviews';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';

class navTabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchAllReviews();
    }

    render () {
        const reviews = this.props.reviews;

        const listReviews = reviews.map((review, index) => {
            return <div key={index}>
                        <img src="" alt="" width="64"/>
                        {review.created_at}
                        <br />
                        <StarRatingComponent 
                            name="rate1" 
                            starCount={5}
                            value={review.rate}
                        />
                        {review.content}
                    </div>
        });

        return (
            <div className="col-md-6-offset container" style={{ marginTop: '15px' }}>
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active">
                        <a href="#revieview" aria-controls="overview" role="tab" data-toggle="tab" aria-expanded="true">Review</a>
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
                    <div role="tabpanel" className="tab-pane active" id="review">
                        {listReviews}
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
        )
    }
}

const mapStateToProps = state => {
    return {
        account: state.account,
        reviews: state.reviews
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllReviews: () => {
            dispatch(actFetchReviewsRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navTabs);
