import * as React from 'react';

import Layout from '../components/Layout';

import Name from '../components/Name';
import Subtitle from '../components/Subtitle';
import Links from '../components/Links';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Name />
        <Subtitle />
        <Links />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
};

export default IndexPage;
