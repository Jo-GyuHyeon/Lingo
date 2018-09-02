import categorys from './categorys';
import links from './links';
import { combineReducers } from 'redux';


const reducers = combineReducers({
    categorys: categorys,
    links: links
});

export default reducers;