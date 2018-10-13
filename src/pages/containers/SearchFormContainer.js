import React, { Component } from 'react';
import SearchForm from './component/SearchForm';
import LinkList from './component/LinkList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as linksActions from '../../reducers/links';
import * as searchActions from '../../reducers/search';

let timer;

class SearchFormContainer extends Component {
  handleSetInput(e) {
    const { SearchActions } = this.props;
    const tag = e.target.value;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      SearchActions.setInput({ tag });
    }, 2000);
  }

  handleFilter() {
    const { search, links } = this.props;
    const keyword = search.get('hashtag');

    const regex = /#[^\s]*/g;
    let tags = keyword.match(regex);

    if (!tags) {
      return [];
    }

    tags = tags.filter((keyword, idx, array) => {
      return array.indexOf(keyword) === idx && keyword.length > 1;
    });

    return links.filter(link => {
      const hashTags = link.get('hashtag').split(' ');
      const count = hashTags.length;

      for (let i = 0; i < count; i++) {
        if (tags.indexOf(hashTags[i]) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  render() {
    return (
      <div>
        <SearchForm setInput={e => this.handleSetInput(e)} />
        <LinkList links={this.handleFilter()} />
      </div>
    );
  }
}

export default connect(
  state => ({
    search: state.search,
    links: state.links
  }),
  dispatch => ({
    SearchActions: bindActionCreators(searchActions, dispatch),
    LinksActions: bindActionCreators(linksActions, dispatch)
  })
)(SearchFormContainer);
