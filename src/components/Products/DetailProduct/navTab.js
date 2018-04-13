import React, { Component } from 'react';
// import { actFetchReviewsRequest } from '../../../actions/Reviews';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';

class navTabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }

    componentWillMount() {
        const id = this.props.id;
        this.setState({
            id: id
        })
    }

    render () {
        const book_id = this.state.id;
        const reviews = this.props.reviews;
        // console.log(reviews)
        const listReviews = reviews.map((review, index) => {
            return <div key={index}>
                        {review.created_at}
                        <br />
                        <div className="review-content">
                            <div className="col-md-2 img-review">
                                <img src="https://images.viblo.asia/avatar/398ff412-f7d3-4e32-85b3-50efae907d6b.png" alt="" width="64"/>
                            </div>
                            <div className="col-md-10">
                                {review.user.full_name}
                                <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={review.rate}
                                />
                                <br />
                                {review.content}
                            </div>
                        </div>
                    </div>
        });

        return (
            <div className="col-md-6-offset container" style={{ marginTop: '15px' }}>
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active">
                        <a href="#review" aria-controls="overview" role="tab" data-toggle="tab" aria-expanded="true">Review</a>
                    </li>
                    {/* <li role="presentation" className="">
                        <a href="#itinerary" aria-controls="itinerary" role="tab" data-toggle="tab" aria-expanded="false">Itinerary</a>
                    </li>
                    <li role="presentation" className="">
                        <a href="#start_at" aria-controls="start_at" role="tab" data-toggle="tab" aria-expanded="false">Start at</a>
                    </li> */}
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
                    {/* <div role="tabpanel" className="tab-pane" id="start_at">
                    </div>
                    <div role="tabpanel" className="tab-pane" id="note">
                    </div> */}
                    <div role="tabpanel" className="tab-pane" id="comment">
                        <div className="fb-comments" data-href={`http://localhost:3000/book/${book_id}/detail`} data-numposts="5"></div>
                    </div>
                </div>
            </div>
        )
    }
}

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.12';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

const mapStateToProps = state => {
    return {
        account: state.account,
        reviews: state.reviews
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
       //
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navTabs);
