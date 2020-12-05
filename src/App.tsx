import Header from 'components/Header';
import MenuItem from 'components/MenuItem';
import NavMenu from 'components/NavMenu';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import theme, { CSSReset } from 'theme';
import Home from 'views/Home';

const Bar = styled.nav`
  display: flex;
  flex-direction: column;
`;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Router>
        <Bar>
          <NavMenu>
            <MenuItem to="/" exact>
              Home
            </MenuItem>
            <MenuItem to="/tracker">Tracker</MenuItem>
          </NavMenu>
          <Header />
        </Bar>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
