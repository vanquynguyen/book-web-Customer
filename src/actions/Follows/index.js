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

export const actFollowersRequest = (id) => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: Config.API_URL + `/user/${id}/follower`
        }).then(res => {
            dispatch(actFollowers(res.data))
        })
    }
}

export const actFollowers = (followers) => {
    return {
        type: Types.FETCH_ALL_FOLLOWER,
        followers
    }
}

export const actFollowingsRequest = (id) => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: Config.API_URL + `/user/${id}/following`
        }).then(res => {
            dispatch(actFollowings(res.data))
        })
    }
}

export const actFollowings = (followings) => {
    return {
        type: Types.FETCH_ALL_FOLLOWING,
        followings
    }
}