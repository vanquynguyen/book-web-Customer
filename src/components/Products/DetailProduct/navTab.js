import React, { Component } from 'react';
import FacebookProvider, { Comments } from 'react-facebook';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import * as Config from '../../../constants/Config';

class navTabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            appId: ''
        }
    }

    componentDidMount() {
        this.setState({
            appId: '615395222177942'
        })
    }

    componentWillMount() {
        const id = this.props.id;
        this.setState({
            id: id,
            appId: '615395222177942'
        })
    }

    render () {
        const reviews = this.props.reviews;
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
                    <div role="tabpanel" className="tab-pane" id="comment">
                        <FacebookProvider appId={this.state.appId}>
                            <Comments href={Config.LOCAL_URL + `/${this.props.id}`} />
                        </FacebookProvider>
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
       //
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navTabs);
