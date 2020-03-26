import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Global, css } from '@emotion/core';
import queryString from 'query-string';

import Header from './components/Header/Header';
import About  from './pages/About';
import Home from './pages/Home';
import Search from './pages/Search';


const globalStyles = css`
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400&display=swap');
    body {
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 300;
        padding: 0;
        margin: 0;
    }
`;

function useQueryString() {
    return queryString.parse(useLocation().search);
}

function App() {
  return (
    <div>
      <Global styles={globalStyles} />
      <Header/>
      <Switch>
      <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/search">
            <Search query={useQueryString().q} />
        </Route>
        <Route path="/about">
            <About/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
