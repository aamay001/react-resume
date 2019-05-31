import React from 'react';
import {
  CodeEditor,
  TopNavigation,
  Toolbar,
} from '../components';
import Resume from '../components/Resume';

const Home = () => (
  <>
    <TopNavigation />
    <Resume />
    <Toolbar />
    <CodeEditor />
  </>
);

Home.defaultProps = {
};

Home.propTypes = {
};

export default Home;
