import categories from './categories';
import links from './links';
import lingoForm from './lingoForm';
import { combineReducers } from 'redux';


const reducers = combineReducers({
    categories: categories,
    links: links,
    lingoForm:lingoForm
});

export default reducers;