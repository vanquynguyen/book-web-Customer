import * as Types from '../../constants/ActionType';
import * as Config from '../../constants/Config';
import axios from 'axios';

export const actFetchCartsRequest = (userId) => {
    return (dispatch) => {
        return axios.get(Config.API_URL + '/carts', {params: {userId: userId}}).then(res => {
            // console.log(res.data)
            if (res) {
                dispatch(actFetchCarts(res.data.carts));
            }
        })
    }
}

export const actFetchCarts = (carts) => {
    return {
        type: Types.FETCH_CARTS,
        carts
    }
}


export const actDeleteCartRequest = (id) => {
    return (dispatch) => {
        return axios.delete(Config.API_URL + `/carts/${id}`).then(res => {
            if (res) {
                dispatch(actDeleteCart(id));
            }
        })
    }
}

export const actDeleteCart = (id) => {
    return {
        type: Types.DELETE_CART,
        id
    }
}
