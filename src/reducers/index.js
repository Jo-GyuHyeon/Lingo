import categorys from './categorys';

import { combineReducers } from 'redux';


const reducers = combineReducers({
    categorys: categorys,
});

export default reducers;