import React from 'react';
import { Route } from 'react-router-dom';
import {
  HomePage,
  MyPage,
  SubmitPage,
  AboutPage,
  CategoryPage,
  LinkPage
} from 'pages';
import Menu from './component/Menu';

const App = () => {
  return (
    <div>
      <Menu />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/myPage" component={MyPage} />
      <Route exact path="/submit" component={SubmitPage} />
      <Route exact path="/about" component={AboutPage} />

      <Route exact path="/category/:category?" component={CategoryPage} />
      <Route exact path="/link/:title?" component={LinkPage} />
    </div>
  );
};

export default App;
