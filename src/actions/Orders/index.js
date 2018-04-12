import * as Types from '../../constants/ActionType';
import * as Config from '../../constants/Config';
import axios from 'axios';

export const actFetchOrdersRequest = (id) => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: Config.API_URL + `/user/${id}/get-manage-order`, 
        }).then(res => {
            dispatch(actFetchOrders(res.data))
        })
    }
}

export const actFetchOrders = (orders) => {
    return {
        type: Types.FETCH_ORDERS,
        orders
    }
}
