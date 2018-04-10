import * as Types from '../../constants/ActionType';
import * as Config from '../../constants/Config';
import axios from 'axios';

export const actFetchReviewsRequest = () => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: Config.API_URL + '/reviews', 
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
