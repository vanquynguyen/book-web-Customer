import * as Types from '../../constants/ActionType';
import * as Config from '../../constants/Config';
import axios from 'axios';

export const actFetchCartsRequest = () => {
    return (dispatch) => {
        return axios.get(Config.API_URL + '/carts').then(res => {
            // console.log(res.data)
            dispatch(actFetchCarts(res.data));
        })
    }
}

export const actFetchCarts = (carts) => {
    return {
        type: Types.FETCH_ALL_CARTS,
        carts
    }
}
