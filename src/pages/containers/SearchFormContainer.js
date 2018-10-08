import React, { Component } from "react";
import SearchForm from "./component/SearchForm";
import LinkList from "./component/LinkList";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as linksActions from "../../reducers/links";
import * as searchActions from "../../reducers/search";

let timer;

class SearchFormContainer extends Component {
  handleSetInput = e => {
    const { SearchActions } = this.props;
    const tag = e.target.value;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      SearchActions.set_input({ tag });
    }, 2000);
  };

  handleFilter = (links, search) => {
    const keyword = search.get("hashTag");

    const regex = /#[^\s]*/g;
    let tags = keyword.match(regex);

    if (tags === null) {
      return [];
    }

    tags = tags.filter((keyword, idx, array) => {
      return array.indexOf(keyword) === idx && keyword.length > 1;
    });

    return links.filter(item => {
      const hashTags = item.get("hashTag").split(" ");
      const count = hashTags.length;

      for (let i = 0; i < count; i++) {
        if (tags.indexOf(hashTags[i]) !== -1) {
          return true;
        }
      }
      return false;
    });
  };

  render() {
    const { search, links } = this.props;
    const { handleSetInput, handleFilter } = this;

    return (
      <div>
        <SearchForm setInput={handleSetInput} />
        <LinkList links={handleFilter(links, search)} />
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
