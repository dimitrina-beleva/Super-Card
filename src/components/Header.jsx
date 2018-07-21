import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import React from 'react';
import * as pages from '../pages';

const Logo = () => <h1>SuperCard</h1>;

const Header = () => (
  <Router>
    <div>
      <Link to="/"><Logo /></Link>
      <Link to="/">Home</Link>
      <Link to={{ pathname: '/auto' }}>Auto</Link>
      <Link to="/beauty">Beauty</Link>
      <Link to="/clothes">Clothes</Link>
      <Link to="/tech">Tech</Link>
      <Link to="/sport">Sport</Link>
      <Link to="/restaurants">Restaurants</Link>
      <Switch>
        <Route exact path="/" component={pages.Home} />
        <Route path="/auto" component={pages.Auto} />
        <Route path="/beauty" render={pages.Beauty} />
        <Route path="/clothes" render={pages.Clothes} />
        <Route path="/tech" render={pages.Tech} />
        <Route path="/sport" render={pages.Sport} />
        <Route path="/restaurants" render={pages.Restaurants} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </Router>
);

export default Header;
