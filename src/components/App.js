import React from 'react';
import '../styles/reset.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notfound';
import Upload from './pages/upload';
import Enter from './pages/enter';
import TrialList from './pages/trialList';
import PatientList from './pages/patientList';
import TrialDetail from './pages/trialDetail';

import cureneticsLogo from './common/images/curenetics-logo.png';
import MatchTrial from './pages/matchTrial';

import { breakpoint, colors, fontFamily } from '../styles/globalStyles';
import { fontImport } from './common/Typography';

const Logo = styled.img`
  max-height: 2rem;
  @media only screen and (min-width: ${breakpoint.Xsmall}) {
    max-height: 3rem;
  }
`;

const Main = styled.main`
  ${fontImport};
  font-family: ${fontFamily.body};
  background-color: ${colors.background};
  min-height: 100vh;
  padding: 4rem 1rem 1rem;
  box-sizing: border-box;
  @media only screen and (min-width: ${breakpoint.Xsmall}) {
    padding: 5rem 1rem 1rem;
  }
`;

const TopBar = styled.div`
  ${fontImport};
  font-family: ${fontFamily.body};
  background-color: ${colors.white};
  box-shadow: ${colors.boxShadow};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: ${breakpoint.Xsmall}) {
    height: 5rem;
  }
`;

const TopContainer = styled.div`
  padding: 1rem 2rem;
  margin: 0 auto;
  max-width: ${breakpoint.massive};
  position: relative;
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

// add logic here
// - add metadata (e.g. title tag and description) > depending upon the active route
// - Helmet module could be useful here ^
const App = () => (
  <>
    <Router>
      <TopBar>
        <TopContainer>
          <Link aria-label="Curenetics Clinical Trials" to="/">
            <Logo src={cureneticsLogo} alt="Curenetics Clinical Trials" />
          </Link>
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
          <Route path="/trial-detail" component={TrialDetail} />
          <Route path="/patient-list" component={PatientList} />
          <Route path="/trial-list" component={TrialList} />
          <Route path="/match-trial" component={MatchTrial} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </Router>
  </>
);
export default App;
