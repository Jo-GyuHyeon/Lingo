import { fromJS } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const SET_INPUT = 'search/SET_INPUT';

export const setInput = createAction(SET_INPUT);

const initialState = fromJS({
  hashtag: ''
});

export default handleActions(
  {
    [SET_INPUT]: (state, action) => {
      const { tag } = action.payload;
      return state.set('hashtag', tag.toLowerCase());
    }
  },
  initialState
);
