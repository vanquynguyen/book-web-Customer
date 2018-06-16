import * as Types from '../../constants/ActionType';
import * as Config from '../../constants/Config';
import axios from 'axios';

export const actStatisPaymentsRequest = (id) => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: Config.API_URL + `/user/${id}/payment/percent-payment`, 
        }).then(res => {
            dispatch(actStatisPayments(res.data))
        })
    }
}

export const actStatisPayments = (statis) => {
    return {
        type: Types.STATIS_PAYMENTS,
        statis
    }
}
