import React, { Component } from "react";
import CategoryList from "./component/CategoryList";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as categoryActions from "../../reducers/categories";

class CategoryListContainer extends Component {
  handelInsert = (category) => {
    const{CategoryActions} = this.props;
    CategoryActions.insert(category);
  };
  handelRemove = id => {
    const { CategoryActions } = this.props;
    CategoryActions.remove(id);
  };
  render() {
    const { categories } = this.props;
    const { handelInsert, handelRemove } = this;
    console.log(categories)
    return (
      <div>
        <CategoryList
          categories={categories}
          onInsert={handelInsert}
          onRemove={handelRemove} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    categories: state.categories
  }),
  (dispatch) => ({
    CategoryActions: bindActionCreators(categoryActions, dispatch)
  })
)(CategoryListContainer);
