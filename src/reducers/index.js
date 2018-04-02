import { combineReducers } from 'redux';
import categories from './Categories/Categories';
import categoriesEditing from './Categories/ItemEditing';

const appReducers = combineReducers({
    categories,
    categoriesEditing
});

export default appReducers;