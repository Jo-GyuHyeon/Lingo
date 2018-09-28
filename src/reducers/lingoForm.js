import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const SET_INPUT = 'lingoFrom/SET_INPUT';

export const set_input = createAction(SET_INPUT);

const initialState = Map({
    category: '',
    hash_tag: '',
    title: '',
    url:'',
    image: ''
})

export default handleActions({
    [SET_INPUT]: (state, action) => {
        const { key, value } = action.payload;
        return state.set(key, value);
    }
}, initialState)
