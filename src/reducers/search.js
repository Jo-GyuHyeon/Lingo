import { fromJS } from "immutable";
import { handleActions, createAction } from 'redux-actions';

const SET_INPUT = 'search/SET_INPUT';

export const set_input = createAction(SET_INPUT);

const initialState = fromJS({
    hashTag: '',
})

export default handleActions({
    [SET_INPUT]: (state, action) => {
        const { tag } = action.payload;
        return state.set('hashTag', tag.toLowerCase());
    }
}, initialState)
