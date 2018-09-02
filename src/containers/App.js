import React from 'react';
import { Route } from 'react-router-dom';
import { Home,Subscribe,Submit, About, Category, Link } from 'pages';
import Menu from '../component/Menu';

const App = () => {
  return (
    <div>
      <Menu/>
      <Route exact path="/" component={Home} />
      <Route exact path="/subscribe" component={Subscribe} />
      <Route exact path="/submit" component={Submit} />
      <Route exact path="/about" component={About} />

      <Route exact path="/category/:category?" component={Category} />
      <Route exact path="/link/:title?" component={Link} />
    </div>
  );
};

export default App;
