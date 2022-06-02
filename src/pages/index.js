import * as React from 'react';

import Name from '../components/Name';
import Subtitle from '../components/Subtitle';
import Links from '../components/Links';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const IndexPage = () => {
  return (
    <>
      <Name />
      <Subtitle />
      <Links />
      <Projects />
      <Contact />
    </>
  );
};

export default IndexPage;
