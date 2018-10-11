import React, { Component } from 'react';
import LingoFrom from './component/LingoForm'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as lingoFormActions from "../../reducers/lingoForm";
import * as linksActions from "../../reducers/links";
import * as categoryActions from "../../reducers/categories";

class LingoFromContainer extends Component {

  handleSetInput = (e) => {
    const { LingoFormActions } = this.props;
    const key = e.target.name;
    const value = e.target.value;

    LingoFormActions.set_input({ key, value });
  }

  handelInsert = () => {
    const { LinksActions, lingoForm, CategoryActions } = this.props;
    const title = lingoForm.get('title');
    const category = lingoForm.get('category');
    const url = lingoForm.get('url');
    const hashtag = lingoForm.get('hashtag');
    LinksActions.insert({ title, category, url, hashtag });

    const image = lingoForm.get('image');
    CategoryActions.insert({ category, image });
  };

  render() {
    const {  handleSetInput, handelInsert } = this;
    return (
        <LingoFrom
          setInput={handleSetInput}
          onInsert={handelInsert}
        />
    );
  }
}

export default connect(
  (state) => ({
    categories: state.categories,
    links: state.links,
    lingoForm: state.lingoForm
  }),
  (dispatch) => ({
    LingoFormActions: bindActionCreators(lingoFormActions, dispatch),
    LinksActions: bindActionCreators(linksActions, dispatch),
    CategoryActions: bindActionCreators(categoryActions, dispatch)
  })
)(LingoFromContainer);