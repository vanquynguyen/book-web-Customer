import * as Types from '../../constants/ActionType';
import * as Config from '../../constants/Config';
import axios from 'axios';

export const actCheckFollowRequest = (data) => {
    return (dispatch) => {
        return axios({
            method: 'post',
            url: Config.API_URL + '/user/check-follow', 
            data: data
        }).then(res => {
            dispatch(actCheckFollow(res.data))
        })
    }
}

export const actCheckFollow = (check) => {
    return {
        type: Types.CHECK_FOLLOW,
        check
    }
}
