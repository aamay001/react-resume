import React from 'react';
import {
  CodeEditor,
  TopNavigation,
  Toolbar,
  MoreVisibilityModal,
} from '../components';
import Resume from '../components/Resume';

function Home() {
  return (
    <>
      <TopNavigation />
      <Resume />
      <Toolbar />
      <CodeEditor />
      <MoreVisibilityModal />
    </>
  );
}

Home.defaultProps = {
};

Home.propTypes = {
};

export default Home;
