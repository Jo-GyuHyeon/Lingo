import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { connect } from 'react-redux';

const Root = () => (
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

// 액션함수 준비
const mapToDispatch = dispatch => ({});

// 리덕스에 연결을 시키고 내보낸다
export default connect(
  null,
  mapToDispatch
)(Root);
