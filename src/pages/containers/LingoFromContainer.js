import React, { Component } from 'react';
import LingoFrom from './component/LingoForm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as lingoFormActions from '../../reducers/lingoForm';
import * as linksActions from '../../reducers/links';
import * as categoryActions from '../../reducers/categories';

class LingoFromContainer extends Component {
  handleSetInput = function(e) {
    const { LingoFormActions } = this.props;
    const key = e.target.name;
    const value = e.target.value;

    LingoFormActions.setInput({ key, value });
  };

  handelInsert() {
    const { LinksActions, CategoryActions } = this.props;
    const { title, category, url, hashtag, image } = this.props;

    LinksActions.insert({ title, category, url, hashtag });
    CategoryActions.insert({ category, image });
  }

  render() {
    return (
      <LingoFrom
        setInput={e => this.handleSetInput(e)}
        onInsert={() => this.handelInsert()}
      />
    );
  }
}

export default connect(
  state => ({
    categories: state.categories,
    links: state.links,
    title: state.lingoForm.get('title'),
    category: state.lingoForm.get('category'),
    url: state.lingoForm.get('url'),
    hashtag: state.lingoForm.get('hashtag'),
    image: state.lingoForm.get('image')
  }),
  dispatch => ({
    LingoFormActions: bindActionCreators(lingoFormActions, dispatch),
    LinksActions: bindActionCreators(linksActions, dispatch),
    CategoryActions: bindActionCreators(categoryActions, dispatch)
  })
)(LingoFromContainer);
