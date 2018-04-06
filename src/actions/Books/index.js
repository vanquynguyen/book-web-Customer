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
