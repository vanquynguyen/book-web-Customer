import * as Types from '../../constants/ActionType';
import * as Config from '../../constants/Config';
import axios from 'axios';

export const actFetchUserRequest = (token) => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: Config.API_URL + '/user', 
            headers: { 'Authorization': `Bearer ${token}` }
        }).then(res => {
            dispatch(actFetchUser(res.data.result))
        })
    }
}

export const actFetchUser = (user) => {
    return {
        type: Types.FETCH_USER,
        user
    }
}

export const FetchUserRequest = () => {
    return (dispatch) => {
        return axios({
            method: 'get',
            url: Config.API_URL + '/users', 
        }).then(res => {
            dispatch(FetchUser(res.data))
        })
    }
}

export const FetchUser = (users) => {
    return {
        type: Types.FETCH_ALL_USER,
        users
    }
}

export const actAddUserRequest = (user) => {
    return (dispatch) => {
        return axios({
            method: 'post',
            url: Config.API_URL + '/register', 
            data: user,
            headers: {
                'Content-Type': 'multipart/form-data' 
            }
        })
        .then(res => {
            dispatch(actAddUser(res.data)) 
        })
    }
}

export const actAddUser = (user) => {
    return {
        type: Types.ADD_USER,
        user
    }
}

export const searchUserRequest = (keywork) => {
    return (dispatch) => {
        return axios.get(Config.API_URL + '/user/search', {params: {keywork: keywork}}).then(res => {
            dispatch(searchUser(res.data));
        })
    }
}

export const searchUser = (users) => {
    return {
        type: Types.SEARCH_USERS,
        users
    }
}

// export const loginRequest = (login) => {
//     return (dispatch) => {
//         return axios.post(Config.API_URL + '/login', login).then(res => {
//             console.log(res);
//             // dispatch(login(res.data))
//         })
//     }
// }

// export const login = (user) => {
//     return {
//         type: Types.LOGIN,
//         user
//     }
// }

export const actGetUserRequest = (id) => {
    return dispatch => {
        return axios.get(Config.API_URL + `/users/${id}`).then(res => {
            dispatch(actGetUser(res.data));
        })
    }
}

export const actGetUser = (user) => {
    return {
        type : Types.GET_USER,
        user
    }
}
