import categories from './categories';
import links from './links';
import { combineReducers } from 'redux';


const reducers = combineReducers({
    categories: categories,
    links: links
});

export default reducers;