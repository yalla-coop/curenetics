import React, { useState } from 'react';
import '../styles/reset.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/notfound';
import Upload from './pages/upload';
import TrialList from './pages/trialList';
import PatientList from './pages/patientList';
import EnterPatients from './pages/enterPatients';
// pdf example here
import Index from './pages/matchTrial/index';

import cureneticsLogo from './common/images/curenetics-logo.png';
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
  @media only screen and (max-width: ${breakpoint.small}) {
    padding: 0.3rem 1rem;
  }
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
const App = () => {
  // state from upload file
  const [filenames, setFilenames] = useState([]);
  const [modal, setModal] = useState(false); // should modal be displayed
  const [path, setPath] = useState('/');
  const [warning, setWarning] = useState(null);

  const aboutModalWarning = e => {
    // This function is called on the render of the enterPatients page and as an //onClick event there isn't always an e object.
    if (e) {
      const str = e.target.href.split('/');
      const pathStr = str[str.length - 1];
      e.preventDefault();
      setModal(true);
      setPath(`/${pathStr}`);
    } else {
      setModal(false);
    }
  };
  const aboutSetWarning = () => {
    setWarning(() => aboutModalWarning);
  };
  const reset = () => {
    setWarning(null);
  };
  return (
    <>
      <Router>
        <TopBar>
          <TopContainer>
            <Link
              aria-label="Curenetics Clinical Trials"
              onClick={warning}
              to="/"
            >
              <Logo src={cureneticsLogo} alt="Curenetics Clinical Trials" />
            </Link>
            <Nav>
              <ul>
                <li>
                  <Link to="/about" onClick={warning}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/upload" onClick={warning}>
                    Upload
                  </Link>
                </li>
                <li>
                  <Link to="/enter-patients" onClick={warning}>
                    Enter
                  </Link>
                </li>
              </ul>
            </Nav>
          </TopContainer>
        </TopBar>

        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route
              path="/upload"
              render={props => (
                <Upload
                  {...props}
                  filenames={filenames}
                  setFilenames={setFilenames}
                />
              )}
            />
            <Route
              path="/patient-list"
              render={props => (
                <PatientList
                  {...props}
                  filenames={filenames}
                  setFilenames={setFilenames}
                  modal={modal}
                  setModal={setModal}
                  path={path}
                  setPath={setPath}
                  aboutSetWarning={aboutSetWarning}
                  reset={reset}
                />
              )}
            />
            <Route
              path="/trial-list"
              render={props => (
                <TrialList
                  {...props}
                  modal={modal}
                  setModal={setModal}
                  path={path}
                  setPath={setPath}
                  aboutSetWarning={aboutSetWarning}
                  reset={reset}
                />
              )}
            />
            <Route
              path="/match-trial"
              render={props => (
                <Index
                  {...props}
                  modal={modal}
                  setModal={setModal}
                  path={path}
                  setPath={setPath}
                  aboutSetWarning={aboutSetWarning}
                  reset={reset}
                />
              )}
            />
            <Route
              path="/enter-patients"
              render={props => (
                <EnterPatients
                  {...props}
                  modal={modal}
                  setModal={setModal}
                  path={path}
                  setPath={setPath}
                  aboutSetWarning={aboutSetWarning}
                  reset={reset}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </Main>
      </Router>
    </>
  );
};

export default App;
