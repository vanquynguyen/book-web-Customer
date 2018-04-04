import * as Types from '../../constants/ActionType';
import * as Config from '../../constants/Config';
import axios from 'axios';

export const actFetchUserRequest = (user) => {
    return (dispatch) => {
        dispatch(actFetchUser(user));
    }
}

export const actFetchUser = (user) => {
    return {
        type: Types.FETCH_USER,
        user
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

export const loginRequest = (login) => {
    return (dispatch) => {
        return axios.post(Config.API_URL + '/login', login).then(res => {
            console.log(res);
            // dispatch(login(res.data))
        })
    }
}

export const login = (user) => {
    return {
        type: Types.LOGIN,
        user
    }
}


// export const actUpdateCategoryRequest = (category) => {
//     return (dispatch) => {
//         return axios.put(Config.API_URL + '/categories', category).then(res => {
//             if (res) {
//                 dispatch(actUpdateCategory(res.data));
//             }
//         })
//     }
// }

// export const actUpdateCategory = (category) => {
//     return {
//         type: Types.UPDATE_CATEGORY,
//         category
//     }
// }

// export const actGetCategoryRequest = (id) => {
//     return dispatch => {
//         return axios.get(Config.API_URL + `/categories/${id}`).then(res => {
//             dispatch(actGetCategory(res.data));
//         })
//     }
// }

// export const actGetCategory = (category) => {
//     return {
//         type : Types.EDIT_CATEGORY,
//         category
//     }
// }