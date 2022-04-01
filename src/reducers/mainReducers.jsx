import { combineReducers } from 'redux';
import todos from './todoReducers';
import visibilityFilter from './filterReducers';

export default combineReducers({
    todos,
    visibilityFilter
})