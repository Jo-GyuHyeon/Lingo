import React, { Component } from 'react';
import LinkList from './component/LinkList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as linkActions from '../../reducers/links';

class LinkListContainer extends Component {
  handelRemove(id) {
    const { linkActions } = this.props;
    linkActions.remove(id);
  }
  render() {
    const { links, category } = this.props;
    const { handelRemove } = this;
    return (
      <div>
        <LinkList
          links={links.filter(link => link.get('category') === category)}
          onRemove={() => handelRemove()}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    links: state.links
  }),
  dispatch => ({
    LinkActions: bindActionCreators(linkActions, dispatch)
  })
)(LinkListContainer);
