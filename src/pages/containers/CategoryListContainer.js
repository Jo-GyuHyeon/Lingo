import React, { Component } from 'react';
import CategoryList from './component/CategoryList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as categoryActions from '../../reducers/categories';
import * as linksActions from '../../reducers/links';

class CategoryListContainer extends Component {
  handelRemove(id) {
    const { CategoryActions, categories, LinksActions } = this.props;
    const category = categories.get(id).get('category');
    LinksActions.remove({ category });
    CategoryActions.remove(id);
  }
  render() {
    const { categories } = this.props;

    return (
      <div>
        <CategoryList
          categories={categories}
          onRemove={id => this.handelRemove(id)}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    categories: state.categories
  }),
  dispatch => ({
    CategoryActions: bindActionCreators(categoryActions, dispatch),
    LinksActions: bindActionCreators(linksActions, dispatch)
  })
)(CategoryListContainer);
