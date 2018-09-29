import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const SET_INPUT = 'search/SET_INPUT';

export const set_input = createAction(SET_INPUT);

const initialState = Map({
    keyword: '',
    selectedKey: -1,
})

export default handleActions({
    [SET_INPUT]: (state, action) => {
        const { key, value } = action.payload;
        return state.set(key, value.toLowerCase());
    }
}, initialState)
