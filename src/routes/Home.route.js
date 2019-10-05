import React from 'react';
import {
  CodeEditor,
  TopNavigation,
  Toolbar,
  MoreVisibilityModal,
} from '../components';
import Resume from '../components/Resume';

const Home = () => (
  <>
    <TopNavigation />
    <Resume />
    <Toolbar />
    <CodeEditor />
    <MoreVisibilityModal />
  </>
);

Home.defaultProps = {
};

Home.propTypes = {
};

export default Home;
