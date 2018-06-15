import * as Types from '../../constants/ActionType';
import * as Config from '../../constants/Config';
import axios from 'axios';

export const actFetchSellsRequest = (id) => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: Config.API_URL + `/user/${id}/get-manage-sell`, 
        }).then(res => {
            dispatch(actFetchSells(res.data))
        })
    }
}

export const actFetchSells = (sells) => {
    return {
        type: Types.FETCH_SELLS,
        sells
    }
}
