import * as Types from '../../constants/ActionType';
import * as Config from '../../constants/Config';
import axios from 'axios';

export const actFetchReviewsRequest = (id) => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: Config.API_URL + '/get-reviews', 
            params: {id: id}
        }).then(res => {
            dispatch(actFetchReviews(res.data))
        })
    }
}

export const actFetchReviews = (reviews) => {
    return {
        type: Types.FETCH_REVIEWS,
        reviews
    }
}