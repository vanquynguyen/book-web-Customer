import * as Types from '../../constants/ActionType';
import * as Config from '../../constants/Config';
import axios from 'axios';

export const actFetchHomeBooksRequest = () => {
    return (dispatch) => {
        return axios.get(Config.API_URL + '/get-books').then(res => {
            dispatch(actFetchHomeBooks(res.data));
        })
    }
}

export const actFetchHomeBooks = (books) => {
    return {
        type: Types.FETCH_HOME_BOOKS,
        books
    }
}

export const actFetchUserBooksRequest = (userId) => {
    return (dispatch) => {
        return axios.get(Config.API_URL + `/user/${userId}/books`, ).then(res => {
            dispatch(actFetchUserBooks(res.data));
        })
    }
}

export const actFetchUserBooks = (books) => {
    return {
        type: Types.FETCH_USER_BOOKS,
        books
    }
}

export const actGetBookRequest = (id) => {
    return dispatch => {
        return axios.get(Config.API_URL + `/books/${id}`).then(res => {
            dispatch(actGetBook(res.data));
        })
    }
}

export const actGetBook = (book) => {
    return {
        type : Types.GET_BOOK,
        book
    }
}

export const actGetStatisBookRequest = (id) => {
    return dispatch => {
        return axios.get(Config.API_URL + `/user/${id}/book/percent-active`).then(res => {
            dispatch(actGetStatisBook(res.data));
        })
    }
}

export const actGetStatisBook = (statis) => {
    return {
        type : Types.GET_STATIS_BOOKS,
        statis
    }
}
