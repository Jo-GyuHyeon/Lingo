import React, { Component } from "react";
import CategoryList from "../component/CategoryList";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as categoryActions from "../reducers/categorys";

class CategoryListContainer extends Component {
  handelInsert = () => {
    // const{CategoryActions,category} = this.props;
    // CategoryActions.insert(category);
  };
  handelRemove = id => {
    const { CategoryActions } = this.props;
    CategoryActions.remove(id);
  };
  render() {
    const { categorys } = this.props;
    const { handelInsert, handelRemove } = this;
    return (
      <div>
        <CategoryList 
          categorys={categorys}
          onInsert={handelInsert} 
          onRemove={handelRemove} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    categorys: state.categorys
  }),
  (dispatch) => ({
    CategoryActions: bindActionCreators(categoryActions, dispatch)
  })
)(CategoryListContainer);
