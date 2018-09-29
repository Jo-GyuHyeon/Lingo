import React, { Component } from 'react';
import SearchForm from './component/SearchForm'
import LinkList from "./component/LinkList";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as linksActions from "../../reducers/links";
import * as searchActions from "../../reducers/search";

class SearchFormContainer extends Component {

  handleSetInput = (e) => {
    const { SearchActions } = this.props;
    const key = e.target.name;
    const value = e.target.value;

    SearchActions.set_input({ key, value });
  }

  handleFilter = (links, search) => {
    const keyword = search.get('keyword');

    const regex = /#[^\s]*/g;
    let keywords = keyword.match(regex);

    if (keywords === null) {
      return [];
    }

    keywords = keywords.filter((keyword, idx, array) => {
      return array.indexOf(keyword) === idx && keyword.length > 1
    })


    return links.filter((item) => {
      const hash_tags = item.get('hash_tag').split(' ');
      const count = hash_tags.length;

      for (let i = 0; i < count; i++) {
        if (keywords.indexOf(hash_tags[i]) !== -1) {
          return true;
        }
      }
      return false;
    });
  }

  render() {
    const { search, links } = this.props;
    const { handleSetInput, handleFilter } = this;

    return (
      <div>
        <SearchForm
          setInput={handleSetInput}
        />
        <LinkList
          links={handleFilter(links, search)}
        />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    search: state.search,
    links: state.links,
  }),
  (dispatch) => ({
    SearchActions: bindActionCreators(searchActions, dispatch),
    LinksActions: bindActionCreators(linksActions, dispatch)
  })
)(SearchFormContainer);