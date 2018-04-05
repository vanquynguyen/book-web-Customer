import * as Types from '../../constants/ActionType';
import * as Config from '../../constants/Config';
import axios from 'axios';

export const actFetchCategoriesRequest = () => {
    return (dispatch) => {
        return axios.get(Config.API_URL + '/categories').then(res => {
             console.log(res.data);
             dispatch(actFetchCategories(res.data));
        })
    }
}

export const actFetchCategories = (categories) => {
    return {
        type: Types.FETCH_CATEGORIES,
        categories
    }
}
