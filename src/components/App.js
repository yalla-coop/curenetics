import React from 'react';
import '../styles/reset.css';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import styled, { css } from 'styled-components';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notfound';
import Upload from './pages/upload';
import Enter from './pages/enter';
// a dynamic route, added for testing - icons:
import cureneticsLogo from './common/header/curenetics_logo_2.png';

import { sectionMixin } from './common/Layout';
import { breakpoint, colors, fontFamily } from '../styles/globalStyles';

const fontImport = css`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
`;
const Logo = styled.img`
   
   height: 2.81rem;
   width: 7.18rem; 
   overflow: hidden;
   top: 0.875rem;
   left: 3.12rem;  
    @media ${breakpoint.Xsmall} {
        height: 1.87rem;  
        top: 1rem;
        left: 1.25rem;
        width: 1.37rem;
        height: 1.25rem;
        overflow: hidden;
        min-width: 300px;
    }       
}   
`;

const Main = styled.main`
  ${fontImport};
  font-family: ${fontFamily.body};
  background-color: ${colors.background};
  min-height: 100vh;
  padding: 4rem 1rem 1rem;
  box-sizing: border-box;
  @media only screen and (min-width: ${breakpoint.tablet}) {
    padding: 5rem 1rem 1rem;
  }
`;

const TopBar = styled.div`
  ${fontImport};
  font-family: ${fontFamily.body};
  background-color: ${colors.white};
  box-shadow: ${colors.boxShadow};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: ${breakpoint.tablet}) {
    height: 5rem; /*3*/
  }
`;

const TopContainer = styled.div`
  ${sectionMixin};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }
  li {
    margin-left: 1rem;
  }
`;

//<Link to="/">cureneticsLogo</Link>
const App = () => {
  // add logic here
  // - add metadata (e.g. title tag and description) > depending upon the active route
  // - Helmet module could be useful here ^
  return (
    <>
      <Router>
        <TopBar>
        
          <TopContainer>
          <Logo src={cureneticsLogo} alt="logo" />
            <Nav>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/upload">Upload</Link>
                </li>
                <li>
                  <Link to="/enter">Enter</Link>
                </li>
                <li>
                  <Link to="/trial-list">Trial List</Link>
                </li>
              </ul>
            </Nav>
          </TopContainer>
        </TopBar>

        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/upload" component={Upload} />
            <Route path="/enter" component={Enter} />
            {/* <Route path="/trial-list" component={TrialList} /> */}
            <Route component={NotFound} />
          </Switch>
        </Main>

      </Router>
    </>
  );
}

export default App;