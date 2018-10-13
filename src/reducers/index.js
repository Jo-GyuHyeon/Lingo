import categories from './categories';
import links from './links';
import lingoForm from './lingoForm';
import search from './search';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  categories: categories,
  links: links,
  lingoForm: lingoForm,
  search: search
});

export default reducers;
